import { useRef, useEffect, useState } from "react";

function UserRefHook() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const idRef = useRef(1);
  const [names, setNames] = useState([
    { id: idRef.current++, name: "John" },
    { id: idRef.current++, name: "Jane" },
  ]);

  const onAddName = () => {
    setNames([
      ...names,
      {
        id: idRef.current++,
        name: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  };

  return (
    <>
    <br />
     <h1>useRef Hook</h1>
      <div>
        {names.map((name) => (
          <div key={name.name}>
            {name.id} - {name.name}
          </div>
        ))}
      </div>
      <input type="text" ref={inputRef} />
      <button onClick={onAddName}>Add Name</button>
      <br />
    </>
  );
}

export default UserRefHook;