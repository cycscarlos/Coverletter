const modal = document.querySelector(".dialog");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", () => {
  modal.showModal();
});

btnClose.addEventListener("click", () => {
  modal.close();
});
