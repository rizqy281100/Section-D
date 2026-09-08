// Navbar Toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Tutup menu saat salah satu link diklik
const links = document.querySelectorAll(".nav-links a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

// Conctact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  // Tampilkan pesan alert sukses sederhana
  alert(
    "Sukses mengirim pesan! Terima kasih, tim kami akan segera menghubungi Anda.",
  );

  // Kosongkan kembali isian form
  contactForm.reset();
});
