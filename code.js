const app = document.getElementById('app')
const menu = document.getElementById('menu')

let textOpacity = 0
let menuOpacity=0
document.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        textOpacity += 0.02;
        menuOpacity -=0.02
    } else {
        textOpacity -= 0.02; 
        menuOpacity+=0.02
    }
    textOpacity = Math.max(0, Math.min(1, textOpacity));
    app.style.color = `rgba(152, 255, 152, ${textOpacity})`
    menuOpacity = Math.max(0, Math.min(1, menuOpacity));
    menu.style.opacity=menuOpacity
  });