const box = document.getElementById("box");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let x = 0;
let y = 0;
let step = 20;
// const maxX = window.innerWidth - box.offsetWidth;
// const maxY = window.innerHeight - box.offsetHeight;

const moveBox = (e) => {
  if (e === "ArrowRight" || e === "d") {
    x += step;
    box.style.transform = `translate(${x}px, ${y}px)`;
    console.log("Right pressed");
    console.log(
      "x:",
      x,
      "window width:",
      window.innerWidth,
      "box width:",
      box.offsetWidth
    );
  }

  if (e === "ArrowLeft" || e === "a") {
    x -= step;
    box.style.transform = `translate(${x}px, ${y}px)`;
    console.log("Left pressed");
    console.log(
      "x:",
      x,
      "window width:",
      window.innerWidth,
      "box width:",
      box.offsetWidth
    );
  }

  if (e === "ArrowUp" || e === "w") {
    y -= step;
    box.style.transform = `translate(${x}px,${y}px)`;
    console.log("Up pressed");
  }
  if (e === "ArrowDown" || e === "s") {
    y += step;
    box.style.transform = `translate(${x}px, ${y}px)`;
    console.log("Down pressed");
  }
};

document.addEventListener("keydown", (e) => {
  moveBox(e.key);
});
up.addEventListener("click", (e) => {
  moveBox("ArrowUp");
});
down.addEventListener("click", (e) => {
  moveBox("ArrowDown");
});
left.addEventListener("click", (e) => {
  moveBox("ArrowLeft");
});
right.addEventListener("click", (e) => {
  moveBox("ArrowRight");
});
