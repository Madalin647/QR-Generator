
   let pyodide = await loadPyodide();
   await pyodide.loadPackage("micropip");
   
   const micropip = pyodide.pyimport("micropip");
   
   await micropip.install("pillow")
   
   await micropip.install("../qr_code-1.0.0-py3-none-any.whl");
   
   await pyodide.runPythonAsync(`
       from qr_code.main import makecode
   `)
  
   export default pyodide
