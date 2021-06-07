const COLORS_BUTTON = [
  { text: "Rojo", color: "#890000", buttonsColor: "gold" },
  { text: "Turquesa", color: "#19B1AC", buttonsColor: "#ccc" },
  { text: "Negro", color: "#111", buttonsColor: "#bbb" },
  { text: "Azul", color: "#001F91", buttonsColor: "#ddd" },
  { text: "Amarillo", color: "#d68111", buttonsColor: "#1836a3" }
];

const changeColor = document.querySelector(".change-color");
const tamagotchi = document.querySelector(".tamagotchi");

changeColor.innerHTML = COLORS_BUTTON.map(color => {
  return `<button style="--color: ${color.color}; --text-color: ${color.buttonsColor}">
    <span>${color.text}</span>
  </button>`;
}).join("");

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tamagotchi.style.setProperty("--body-color", COLORS_BUTTON[index].color);
    tamagotchi.style.setProperty("--buttons-color", COLORS_BUTTON[index].buttonsColor);
  });
});

/*
const petPixel = [
  0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
  0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1,
  0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
  0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0,
  0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0
];

const petPixel = [
  1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 0, 0, 0, 1, 0,
  1, 0, 0, 0, 0, 0, 0, 0, 1,
  0, 0, 0, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 0, 1, 0, 0,
  0, 1, 0, 1, 1, 1, 1, 1, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 0
];

const data = petPixel.map((num, index) => {
  const x = index % 9;
  const y = Number.parseInt(index / 9);
  const color = num === 1 ? "#000" : null;
  if (color) { return `${x * 4}px ${y * 4}px 0 ${color}`; }
}).filter(shadow => shadow).join(",");

console.log(data);
*/
