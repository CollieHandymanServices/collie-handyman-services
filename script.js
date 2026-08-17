const BUSINESS_EMAIL = "colliezach27@gmail.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (BUSINESS_EMAIL === "colliezach27@gmail.com") {
    alert("Before using the quote form, open script.js and replace colliezach27@gmail.com with your business email.");
    return;
  }
  const data = new FormData(e.target);
  const subject = encodeURIComponent("New Quote Request - Collie Handyman Services LLC");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nProject address/area: ${data.get("address")}\n\nProject details:\n${data.get("project")}`
  );
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
