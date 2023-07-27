'use strict'
const pad=document.querySelector("#pads");
const criarDiv=(texto)=>{
const div=document.createElement("button");
div.classList.add('key');
div.textContent= texto.slice(3,4);
div.id=texto;
pad.appendChild(div);
}
const sons={
  'KeyA':  'boom.mp3',
  'KeyS':  'cl-hihat.mp3',
  'KeyD':  'snare.mp3',
  'KeyF':  'pd-hihat.mp3',
  'KeyG':  'op-hihat.mp3',
  'KeyH':  'high-tom.mp3',
  'KeyJ':  'low-tom.mp3',
  'KeyK':  'crash.mp3',
  'KeyL':  'ride.mp3'
}
const tocar=(letra)=>{
  const audio= new Audio(`./sounds/${sons[letra]}`);
  audio.play();
};
Object.keys(sons).forEach(e=>criarDiv(e));
document.getElementById("pads")
  .addEventListener('click',(e)=>{
  const letra=e.target.id;
  let letraExiste=sons.hasOwnProperty(letra);
  if(letraExiste){
    tocar(letra);
  }
});
  window.addEventListener('keydown',(e)=>{
  let {code}=e;
  let letraExiste=sons.hasOwnProperty(code);
  if(letraExiste){
    tocar(code);
  }
});