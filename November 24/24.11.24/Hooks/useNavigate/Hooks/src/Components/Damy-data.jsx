import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
console.log(useLoaderData());

export const fetchedData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

const DammyDataPage = () => {
  useEffect(() => {
    fetchedData();
  });

  return <div>DammyDataPage</div>;
};
export default DammyDataPage;
