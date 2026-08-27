import {  useState } from "react"
import "./App.css"
import pyodide from "./pyodideLoader"

function App() {


  const body = document.getElementById('root')
  body.className = "Appear"

  const [code,setCode] = useState('')
  const [urlCodeBind,setUrlCodeBind] = useState('')
  const [url,setUrl] = useState('')

  async function generateCode(text){
    const process = await pyodide.globals.get('makecode')
    
    const result = await process(text)

    setUrlCodeBind(text)
    setUrl(`data:image/png;base64,${result}`)
    
    const img = document.getElementById('img')
    img.src = `data:image/png;base64,${result}`;

    makeDownload(result)
  }

  function makeDownload(result){
    const link = document.getElementById('download')
    link.href = `data:image/png;base64,${result}`
    link.download = "qr.png"
  }

  return (
    <main className="main">
      <section className="container">
        <input type="text" placeholder="enter the qr code text here" value={code} onChange={(e)=>{setCode(e.target.value)}} />
        <div className="qr-container">
          <img src="" alt=""  className="qr" id="img" />
          {url ? <div className="qr-download">
            <p className="urlCodeBind">{urlCodeBind}</p>
            <a id="download">Download</a>
          </div> : ''}
        </div>
        
        <button onClick={()=>{generateCode(code); setCode('')}}>Generate</button>
      </section>
    </main>
  )
}

export default App
