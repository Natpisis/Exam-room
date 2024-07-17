import { useState,useEffect } from 'react'
import './App.css'
import Form from './componant/Form'

function App() {
  const [data, setData] = useState(0)
  useEffect (() => {
    async function read_data_database(){
      try {
        const data = await fetch("https://6228-184-22-12-234.ngrok-free.app/select_data");
        setData(await data.json())

      } catch (error) {

      }
    }
    read_data_database()
  } , []) 
 console.log(data)

  return (
    <>
      <div className="App">
      <h1>โปรแกรมห้องข้อสอบ</h1>
      <Form />
      
    </div>
    </>
  )
  
}

export default App
