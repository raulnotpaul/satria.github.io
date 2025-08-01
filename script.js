const container = document.getElementById("container");

container.addEventListener("click", () => {
  const text = document.createElement("p");
  text.textContent = "TE AMO";
  text.classList.add("floating-text");

  // Random horizontal position
  text.style.left = Math.random() * 90 + "%";

  // Add to container
  container.appendChild(text);

  // Auto-remove after animation ends
  setTimeout(() => {
    container.removeChild(text);
  }, 8000);
});
