const navBtn = document.getElementById('menu');
const menuBar = document.getElementById('menubar');

navBtn.addEventListener('click', () => {
  menuBar.classList.toggle('hidden');
  menuBar.classList.toggle('flex');
})

