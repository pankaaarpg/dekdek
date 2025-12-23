window.onload = () => {
    const textOverlay = document.querySelector('.text-overlay');
    textOverlay.style.opacity = 0;
    setTimeout(() => {
        textOverlay.style.transition = "opacity 2s";
        textOverlay.style.opacity = 1;
    }, 500);
};
