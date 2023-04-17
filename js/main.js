function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

scrollTop("button");


const openBtn = document.getElementById('openBtn');
const modal = document.getElementById('modal');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.inquiry_content') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});


