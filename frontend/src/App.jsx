import { useState } from 'react'
import Form from './components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold text-center">
      Simple User Form
      </h1>
      <Form />
    </>
  )
}

export default App
