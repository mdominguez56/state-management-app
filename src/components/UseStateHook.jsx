import { useState } from 'react'

function UseStateHook() {
  const [count, setCount] = useState(1)
  const [list, setList] = useState(["Robin", "Laika", "Loba"])
  const [dogName, setDogName] = useState("")

  const addOne = () => {
    setCount(count + 1)
  }

  const addDog = () => {
    setList([...list, dogName])
  }

  const removeDog = () => {
    setList(list.filter((item) => item !== dogName))
  }

  return (
    <>
      <div>
        <h1>useState Hook</h1>
        <p>Count: {count}</p>
        <button onClick={addOne}>+1</button>
        <ul className='dogs'>
          {list.map((item, index) => (
            <li key={index}>Dog: {item}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a dog"
          onChange={(e) => setDogName(e.target.value)}
        />
        <button onClick={addDog}>Add Dog</button>
        <button onClick={removeDog}>Remove Dog</button>
        <br />
      </div>
    </>
  )
}

export default UseStateHook
