export const generateRandomGradient = () => {
  const colors = [
    "#ADD8E6",
    "#D8A8F6",
    "#008000",
    "#FFFF00",
    "#FF0000",
    "#00FFFF",
  ];
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  return `linear-gradient(135deg, ${randomColor1} 0%, ${randomColor2} 100%)`;
};
