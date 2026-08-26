
import pyodide from "../pyodideLoader"
import { useState } from "react"



function App() {

  const [code,setCode] = useState('')

  async function generateCode(text){
    const process = await pyodide.globals.get('makecode')
    
    const result = await process(text)
    
    
    const page = document.getElementById('root')
    const img = document.createElement('img')
    img.src = `data:image/png;base64,${result}`;
    page.appendChild(img)
  }

  return (
    <>
     <input type="text" onChange={(e)=>{setCode(e.target.value)}} />
     <button onClick={()=>{generateCode(code)}}>Generate</button>
    </>
  )
}

export default App
