function rangeValue(value) {
  const root = document.documentElement;

  //Illustrations
  root.style.setProperty('--opacityImg5', (100 - value) / 100);
  root.style.setProperty('--opacityImg6', 100);
  
}
