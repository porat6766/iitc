import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components impotr
import Button from './Components/Button'
import Card from "./Components/Card"
import Modal from './Components/Modal'
import Layout from "./Components/Layout"

function App() {
  const [count, setCount] = useState(0)
  const [statusOpen,setstatusOpen]= useState(true)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

      <Card >
        <h1>lskjefh</h1>
        <p>jhjdfvbh</p>
      </Card>

      <Layout>
      <h1>Page Title</h1>
      <p>This is the main content of the page.</p>
      </Layout>

      <Modal statusOpen={statusOpen}>
      <h2>Modal Title</h2>
      <p>This is the modal content.</p>
      </Modal>

      <Button count={count} setCount={setCount}>
        <span>count is {count}</span>
      </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
