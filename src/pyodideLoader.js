
   const pyodide = await loadPyodide({
     indexURL: `${import.meta.env.BASE_URL}/pyodide/`
   });
   await pyodide.loadPackage("micropip");
   
   const micropip = pyodide.pyimport("micropip");
   
   await micropip.install("pillow")
   
   await micropip.install(`${import.meta.env.BASE_URL}/qr_code-1.0.0-py3-none-any.whl`);
   
   await pyodide.runPythonAsync(`
       from qr_code.main import makecode
   `)
   
   export default pyodide