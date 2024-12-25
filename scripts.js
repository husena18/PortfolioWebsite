document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll('.item');
  const hoveredImageName = document.getElementById('hovered-image-name');

  items.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const imageName = this.getAttribute('data-name');
      hoveredImageName.textContent = imageName;
    });

    item.addEventListener('mouseleave', function() {
      hoveredImageName.textContent = '';
    });
  });
});

function toggleNavBar() {
  const navbar = document.getElementById('navbar');
  navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
}
