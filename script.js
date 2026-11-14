// Update this email address to the workshop's real enquiry email.
const WORKSHOP_EMAIL = "info@shardatechnicalworkshop.com";

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Workshop enquiry — " + form.get("service"));
  const body = encodeURIComponent(
    `Name: ${form.get("name")}\nPhone: ${form.get("phone")}\nService: ${form.get("service")}\n\nRequirement:\n${form.get("message") || "Not specified"}`
  );
  window.location.href = `mailto:${WORKSHOP_EMAIL}?subject=${subject}&body=${body}`;
});
