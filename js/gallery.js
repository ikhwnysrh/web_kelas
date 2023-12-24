// const elementClose = document.getElementsByClassName('overlay');

// for (Let i = 0; i < elementClose.length; i++) {
//     elementClose[i].addEventListener('click', function () {
//         Let url = window.location.href.substr(0, window.location.href.indexOf('#'))
//         window.location = url;
//     });
// }   

 // Tambahkan JavaScript untuk menutup overlay ketika latar belakang hitam diklik
 document.addEventListener('DOMContentLoaded', function () {
    const overlays = document.querySelectorAll('.overlay');

    // Fungsi untuk menampilkan overlay
    function openOverlay(target) {
      const overlay = document.querySelector(target);
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.display = 'flex';
    }

    // Fungsi untuk menutup overlay
    function closeOverlay(target) {
      const overlay = document.querySelector(target);
      overlay.style.width = '0';
      overlay.style.height = '0';
      overlay.style.display = 'none';
    }

    // Buka overlay saat mengklik tautan
    document.querySelectorAll('.mx-3 a').forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        openOverlay(target);
      });
    });

    // Tutup overlay saat mengklik latar belakang hitam
    overlays.forEach(function (overlay) {
      overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
          closeOverlay(`#${overlay.id}`);
        }
      });
    });

    // Tutup overlay saat mengklik tombol tutup
    document.querySelectorAll('.close-btn').forEach(function (closeBtn) {
      closeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const target = this.getAttribute('href');
        closeOverlay(target);
      });
    });
  });