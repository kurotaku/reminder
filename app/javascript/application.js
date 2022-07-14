// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

document.addEventListener("turbo:load", function(){
  if(window.innerWidth < 768){
    document.getElementById('body').classList.add('menu-close');
  }
})

globalThis.menuToggle = () => {
  document.getElementById('body').classList.toggle('menu-close');
}
