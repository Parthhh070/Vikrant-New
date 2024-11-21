const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

document
  .getElementById("exploreVikrant")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior

    // Create the ripple transition element
    const ripple = document.createElement("div");
    ripple.classList.add("page-transition");
    document.body.appendChild(ripple);

    // Add the active class to start the animation
    setTimeout(() => {
      ripple.classList.add("active");
    }, 10);

    // Navigate to the new page after the animation
    setTimeout(() => {
      window.location.href = "What_is_vikrant.html"; // Replace with your target URL
    }, 1200); // Match the CSS animation duration
  });
