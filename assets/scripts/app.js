document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuOpen = document.querySelector("#mobile-menu-open");
  mobileMenuOpen.addEventListener("click", function toggleMobileMenu(event) {
    const menuElementId = event.currentTarget.getAttribute("aria-controls");
    const menuElement = document.getElementById(menuElementId);

    const expandedClassName = menuElement.dataset.expandedClassName;

    menuElement.classList.add(expandedClassName);

    setTimeout(() => {
      document.addEventListener("click", function closeMobileMenu(event) {
        if (event.target.contains(menuElement)) return;

        menuElement.classList.remove(expandedClassName);

        document.removeEventListener("click", closeMobileMenu);
      });
    }, 0);
  });

  const mobileMenuClose = document.querySelector("#mobile-menu-close");
  mobileMenuClose.addEventListener("click", function toggleMobileMenu(event) {
    const menuElementId = event.currentTarget.getAttribute("aria-controls");
    const menuElement = document.getElementById(menuElementId);

    const expandedClassName = menuElement.dataset.expandedClassName;

    menuElement.classList.remove(expandedClassName);
  });
});
