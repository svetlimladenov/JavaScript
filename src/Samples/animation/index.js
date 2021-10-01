const biscuit = document.getElementById("biscuit");

let xy = 30;

document.getElementById("btn").addEventListener("click", () => {
  setInterval(() => {
    move();
  }, 1000);
});

function move() {
  biscuit.style.left = `${xy}px`;
  xy += 50;
}
