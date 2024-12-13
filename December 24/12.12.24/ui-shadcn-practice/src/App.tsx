import { Button } from "./Components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Components/ui/accordion";

import { Badge } from "./Components/ui/badge";

import { Slider } from "@/Components/ui/slider";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

import { ThemeProvider } from "@/Components/ui/dark";

import { ModeToggle } from "./Components/mode";

function App() {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>
      <div className="gap-10 flex flex-col text-center">
        <p>HELLO TO OF THE BEST LIBRARY OF COMPONENTS UI-SHADCN</p>
        <Button>CLICK ME</Button>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Badge
          className="cursor-pointer flex justify-center font-bold p-5 text-xl"
          variant="destructive"
        >
          Badge
        </Badge>
        <Slider
          className="cursor-pointer"
          defaultValue={[50]}
          max={100}
          step={1}
        />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>Hover</TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
