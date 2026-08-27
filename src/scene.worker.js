import * as THREE from "three/webgpu"


self.onmessage = ({data})=>{
  const {canvas,w,h} = data

  const cameraZ = 5
  
  //scene
  const scene = new THREE.Scene();

  //camera 
  const camera = new THREE.PerspectiveCamera(75,w/h,0.1,100);
  camera.position.z=cameraZ;

  //renderer 
  const renderer = new THREE.WebGPURenderer({antialias:true,canvas});
  renderer.setSize(w,h,false)
  renderer.setPixelRatio(6);

  //model

  const shape = new THREE.IcosahedronGeometry(11,1)

  const material = new THREE.MeshBasicMaterial({color:"rgb(231, 231, 231)",wireframe:true})

  const model =  new THREE.Mesh(shape,material)

  scene.add(model)


  //animate
  function animate(t = 0){
    model.rotation.x = t * 0.0001
    model.rotation.y = t * 0.00015
    renderer.render(scene,camera)
  }
  renderer.setAnimationLoop(animate)


}