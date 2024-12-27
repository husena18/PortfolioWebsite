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


// Toggle the mobile menu when the hamburger icon is clicked
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      themeSwitch.checked = true;
    }

    // Toggle theme on checkbox change
    themeSwitch.addEventListener("change", () => {
      if (themeSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  });