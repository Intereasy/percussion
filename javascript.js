
window.addEventListener('keydown', function(e){
console.log(e.keyCode);
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return;
audio.currentTime=0;
audio.play();
key.classList.add("active");

});
function removeTransition(e){
  if (e.propertyName !=="transform") return;
  this.classList.remove("active");
  console.log(e.propertyName);
    
}
const init = () => {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend',removeTransition));
}
window.addEventListener('load',init);