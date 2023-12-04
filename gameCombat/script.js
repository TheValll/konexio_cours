const character = document.getElementById("character");
let isJumping = false;

window.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    const currentPosition = parseFloat(
      window.getComputedStyle(character).getPropertyValue("left")
    );
    character.style.left = currentPosition + 15 + "px";
  }
  if (e.key === "q") {
    const currentPosition = parseFloat(
      window.getComputedStyle(character).getPropertyValue("left")
    );
    character.style.left = currentPosition - 15 + "px";
  }
  if (e.key === " " && !isJumping) {
    isJumping = true;
    const initialPosition = parseFloat(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    const newPosition = initialPosition - 50 + "px";

    character.style.top = newPosition;

    setTimeout(() => {
      character.style.top = initialPosition + "px";
      isJumping = false;
    }, 200);
  }
});
