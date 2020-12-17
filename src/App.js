import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

/* Miscellaneous Components */
function WelcomeMessage({ myprop }) {
  return <p>{myprop}</p>
}

const Counter = ({ setCount, children }) => {
  return (
    <div>
      {children}
      <button onClick={setCount}>Click me</button>
    </div>
  )
}

const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Scott')

  useEffect(() => {
    console.log(`Hi ${name}, you clicked ${count} times`,)
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click this one with a side effect!</button>
    </div>
  )
}

/* Event Handlers */
const handleClickEvent = (event) => {
  //Handle the event
  alert("Thanks for clicking!")
}

function App() {
  const message = 'Hello!';
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message === 'Hello!' ? 'The message was "hello!"' : message} Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClickEvent}>Click me please!</button>
        <CounterWithNameAndSideEffect />
        <WelcomeMessage myprop={'somevalue'} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Counter setCount={() => setCount(count + 1)}>
          <p>You clicked {count} times</p>
        </Counter>
      </main>
    </div>
  );
}

export default App;
