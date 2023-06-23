import UseStateHook from './components/UseStateHook'
import UseReducerHook from './components/UseReducerHook'
import UseMemoUseCallbackHooks from './components/UseMemoUseCallbackHooks'
import UseEffectHook from './components/UseEffectHook'
import './App.css'

function App() {

  return (
    <>
      <div>
        <UseStateHook />
        <UseReducerHook />
        <UseMemoUseCallbackHooks />
        <UseEffectHook />
      </div>
    </>
  )
}

export default App
