# QR Generator

This project is fully a client web app that has no use of a Backend server or API.

# Pyodide

In order for the app to generate a QR code it uses an own python script (the qr_code-1.0.0-py3-none-any.whl) that has use of the qr library from python to return an base64 image.

For the code to work, the app uses Pyodide that runs on the browser, and that runs the code.

# Stack

The project uses vite, react and plain javascript.

The background uses three.js and runs on a different thread.
