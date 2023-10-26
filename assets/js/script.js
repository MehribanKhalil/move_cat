const cat = document.getElementById("cat");
let x = 0;
let y = 0;
let speed = 70;
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

document.body.addEventListener("keyup", (e) => {
    if (e.key==='a' || e.key === "ArrowLeft") {
        //left
        if (x > 0) {
        x -= speed;
        cat.style.left = x + "px";
        cat.style.transform = "rotate(270deg)";
        }
    }
     else if (e.key === "d" || e.key === "ArrowRight") {
          //right
          if (x + 210 < windowWidth) {
            x += speed;
            cat.style.left = x + "px";
            cat.style.transform = "rotate(90deg)";
            }
        }
    else if (e.key === "w" || e.key === "ArrowUp") {
          //up
          if (y > 0) {
            y -= speed;
            cat.style.top = y + "px";
            cat.style.transform = "rotate(-0deg)";
            }
    }
    else if (e.key === "s" || e.key === "ArrowDown") {
      //down
      if (y + 220 < windowHeight) {
        y += speed;
        cat.style.top = y + "px";
        cat.style.transform = "rotate(180deg)";
        }
    }

})
