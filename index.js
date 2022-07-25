const topNav = document.querySelector(".nav");
const ham = document.querySelector("#ham");
const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", toggleHamburger);
});

ham.addEventListener("click", toggleHamburger);

function toggleHamburger() {
	topNav.classList.toggle("showNav");
  if (ham.getAttribute("aria-expanded") == "false") {
		ham.setAttribute("aria-expanded", "true");
	} else {
		ham.setAttribute("aria-expanded", "false");
	}
}