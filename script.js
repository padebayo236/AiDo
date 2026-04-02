const themeToggle = document.getElementById("themeToggle");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const yearEl = document.getElementById("year");

const savedTheme = localStorage.getItem("spa-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const darkEnabled = document.body.classList.contains("dark");
  localStorage.setItem("spa-theme", darkEnabled ? "dark" : "light");
  themeToggle.textContent = darkEnabled ? "☀️" : "🌙";
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;

  if (!name || !service || !date) {
    formMessage.textContent = "Please complete all fields before submitting.";
    return;
  }

  formMessage.textContent = `Thanks, ${name}! Your ${service} request for ${date} was received.`;
  bookingForm.reset();
});

yearEl.textContent = new Date().getFullYear();
