import { useReducer } from "react"

function UseReducerHook () {

    const [state,dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case 'SET_NAME':
                return {...state, name: action.payload}
            case "ADD_NAME":
                return {...state, names: [...state.names, state.name], name: ""}
            case "REMOVE_NAME":
                return {...state, names: state.names.filter((name) => name !== action.payload)}
        }
    }, {names: [], name: ""})
   
  return (
    <div>
        <br />
        <h1>useReducer Hook</h1>
        <input type="text" value={state.name} onChange={e => dispatch({type: "SET_NAME", payload: e.target.value})}/>
        <button onClick={
            () => dispatch({type: "ADD_NAME"})
        }>Add name</button>
        <button onClick={
            () => dispatch({type: "REMOVE_NAME", payload: state.name})
        }>Remove name</button>
        <div>
            <p>Name list:</p>
            {state.names.map((name,index) => (
            <li key={index}>{name}</li>
        ))}</div>
        <br />
      </div>
  )
}

export default UseReducerHook