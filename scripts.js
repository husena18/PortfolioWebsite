document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const imageName = item.getAttribute('data-name');
        const imageNameDisplay = document.getElementById('hovered-image-name');
        imageNameDisplay.textContent = imageName;
        imageNameDisplay.classList.add('active'); // Show the name
    });
    item.addEventListener('mouseleave', () => {
        const imageNameDisplay = document.getElementById('hovered-image-name');
        imageNameDisplay.textContent = '';
        imageNameDisplay.classList.remove('active'); // Hide the name
    });
});
