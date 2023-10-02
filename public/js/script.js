// Toggle List Menu
const Navbarmenu = document.querySelector(".navbar-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");

onclick = () => {
  Navbarmenu.classList.toggle("active");
};

hamburgerMenu.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !Navbarmenu.contains(e.target)) {
    Navbarmenu.classList.remove("active");
  }
});

// Menampilkan tanggal, bulan dan tahun

const currentDate = new Date();

const tanggal = currentDate.getDate();
const bulan = currentDate.getMonth();
const tahun = currentDate.getFullYear();

const namaBulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const bulanTeks = namaBulan[bulan];

document.getElementById("time").innerHTML = `${tanggal} ${bulanTeks} ${tahun}`;
