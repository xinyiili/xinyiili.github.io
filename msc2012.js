function rangeValue2(value) {
    const root = document.documentElement;
  
    root.style.setProperty('--opacityImg4', (100 - value) / 100);
    root.style.setProperty('--opacityImg5', 100);
}
