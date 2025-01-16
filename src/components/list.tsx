import { useState } from "react";

function list() {
  const [list, setlist] = useState<string[]>([]);
  const [count, setcount] = useState(1);

  function add() {
    const item = "Item" + count;
    setlist((prev) => {
      return [...prev , item];
    });
    setcount((prev: number) => {
      return prev + 1;
    });
  }
  return (
    <>
      <h1>List</h1>
      <button onClick={add}>Add items</button>
      <ul>
        {list.map((el: string, index: number) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </>
  );
}
export default list;
