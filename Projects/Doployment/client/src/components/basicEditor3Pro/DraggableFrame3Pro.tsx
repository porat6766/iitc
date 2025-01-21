import { useEffect, useRef, useContext, useState } from "react";

import { type RenderElement3 } from "./BasicEditor3ProTypes";
import { Position } from "./BasicEditor3ProTypes";
import BlockEditor3 from "./BlockEditor3Pro";
import { BasicEditorContext } from "./BasicEditor3Pro";
import { utils2 } from "./utils2";

// interface Props {
//   element: React.ComponentType<any>; // Type for the dynamic component
//   propsForElement: any; // Type for the props to be passed
// }

// const DynamicComponent: React.FC<Props> = ({ element, propsForElement }) => {
//   return (
//     <>
//       {React.createElement(element, propsForElement)}
//     </>
//   );
// };

export type DraggableFrame3Props = {
  renderElement: RenderElement3;
};

function DraggableFrame3({ renderElement }: DraggableFrame3Props) {
  const [position, setPosition] = useState<Position>(
    renderElement.data.position
  );
  const [displayEditButtons, setDisplayEditButtons] = useState(false);
  const [borderHover, setBorderHover] = useState<string>("none");
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const { baseFunctions, originOfCoordinates, isEditMode }: any =
    useContext(BasicEditorContext);
  const divRef = useRef<HTMLDivElement>(null);
  const borderWidth = 5;

  const frameBorder = isEditMode && isHovering ? "1px solid blue" : "none";

  const frameStyle: React.CSSProperties = {
    position: "absolute",
    left: position.x,
    top: position.y,
    cursor: "grab",
    overflow: "hidden",
    borderTop: frameBorder,
    borderRight:
      borderHover === "right" ? `${borderWidth}px solid blue` : frameBorder,
    borderBottom:
      borderHover === "bottom" ? `${borderWidth}px solid blue` : frameBorder,
    borderLeft: frameBorder,
    backgroundColor: "none",
  };

  useEffect(() => {
    setPosition(renderElement.data.position);
  }, [renderElement.data.position]);

  useEffect(() => {
    // console.log("border hover says:", borderHover);
  }, [borderHover]);

  function detectBorderHoverWrapper(e: any) {
    if (!divRef.current) return;
    const result = utils2.detectBorderHover(
      divRef.current.getBoundingClientRect(),
      e.clientX,
      e.clientY,
      borderWidth + 3
    );
    //should I debounce this?
    if (result !== borderHover) {
      setBorderHover(result);
    }
  }

  function handleMouseEnter() {
    setIsHovering(true);
    window.addEventListener("mousemove", detectBorderHoverWrapper);
    setTimeout(() => {
      window.removeEventListener("mousemove", detectBorderHoverWrapper);
    }, 2000);
  }

  function handleMouseLeave() {
    setIsHovering(false);
    window.removeEventListener("mousemove", detectBorderHoverWrapper);
  }

  //the problem might be that the ooc from the pov of the div is the ooc of wrapper3,
  //but the ooc for e.client and rect are relative to the viewport.
  const handleMouseDown = (e: any) => {
    if (!isEditMode) return;
    const rect = divRef?.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    // console.log(`x:${e.clientX} y:${e.clientY}`);

    const handleMouseMove = (e: any) => {
      if (borderHover === "none") {
        const newPosition = {
          x: e.clientX - offsetX - (originOfCoordinates?.x ?? 0),
          y: e.clientY - offsetY - (originOfCoordinates?.y ?? 0),
        };
        setPosition(newPosition);
        baseFunctions?.setPosition(renderElement.data.id, newPosition);
      } else if (borderHover === "right") {
        const newWidth = e.clientX - rect.left;
        utils2.update0LayerStyle(
          renderElement,
          "width",
          `${newWidth}px`,
          baseFunctions
        );
      } else if (borderHover === "bottom") {
        const newHeight = e.clientY - rect.top;
        utils2.update0LayerStyle(
          renderElement,
          "height",
          `${newHeight}px`,
          baseFunctions
        );
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  function toggleDisplayEditButtons() {
    setDisplayEditButtons((prev) => !prev);
  }

  return (
    <>
      {displayEditButtons && divRef.current && isEditMode && (
        <BlockEditor3
          blockId={renderElement.data.id}
          blockRect={divRef.current.getBoundingClientRect()}
        />
      )}
      <div
        ref={divRef}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleDisplayEditButtons}
        style={frameStyle}
      >
        {renderElement.body}
        {/* <DynamicComponent element={renderElement.body} propsForElement={{}}/> */}
      </div>
    </>
  );
}

export default DraggableFrame3;
