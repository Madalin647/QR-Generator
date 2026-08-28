import RendererWorker from "./scene.worker.js?worker";

const worker = new RendererWorker();


const canvas = document.querySelector("canvas");

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const offscreen = canvas.transferControlToOffscreen();

worker.postMessage(
    { canvas: offscreen,w:canvas.width,h:canvas.height,ratio:devicePixelRatio},
    [offscreen]
);


 


