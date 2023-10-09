const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const mobileModalBtn = document.getElementById("mobileModalBtn");
const modalBtnSubscribe = document.getElementById("modalBtnSubscribe");
const closeBtn = document.getElementById("closeBtn");
const sucssesModal = document.getElementById("simplesuccessModal");
const sucssesModalBtn = document.getElementById("sendBtnModal");
const successModalcloseBtn = document.getElementById("successModalcloseBtn");
const goodBtn = document.getElementById("good");
const inputModal = document.getElementById("inputModal");
const errorText = document.getElementById("errorEmail");
const inputSvg = document.getElementById("inputSvg");

modalBtn.addEventListener("click", openModal);
if (modalBtnSubscribe) {
  modalBtnSubscribe.addEventListener("click", openModal);
}
mobileModalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", () => {
  inputModal.value = "";
  closeModal();
});
sucssesModalBtn.addEventListener("click", () => {
  inputModal.value = "";
  openModalSucsses();
});
successModalcloseBtn.addEventListener("click", closeModalSucsses);
goodBtn.addEventListener("click", closeModalSucsses);

inputModal.addEventListener("focus", () => {
  inputSvg.style.stroke = "#DD34DD";
  //errorText.style.display = "none";
});

inputModal.addEventListener("blur", () => {
  const email = inputModal.value;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    inputSvg.style.stroke = "red";
    sendBtnModal.disabled = true;
    //errorText.style.display = "block";
  } else {
    inputSvg.style.stroke = "#fff";
    sendBtnModal.disabled = false;
    //errorText.style.display = "none";
  }
});

function openModal() {
  inputSvg.style.stroke = "#fff";
  modal.style.display = "block";
  window.addEventListener("click", clickOutside);
  document.addEventListener("keydown", handleEscapeKey);
}

function closeModal() {
  modal.style.display = "none";
  inputModal.style.border = "none";
  //errorText.style.display = "none";
  inputModal.value = "";
  window.removeEventListener("click", clickOutside);
  document.removeEventListener("keydown", handleEscapeKey);
}

function openModalSucsses() {
  modal.style.display = "none";
  sucssesModal.style.display = "block";
  window.addEventListener("click", clickOutside);
  document.addEventListener("keydown", handleEscapeKey);
}

function closeModalSucsses() {
  sucssesModal.style.display = "none";
  window.removeEventListener("click", clickOutside);
  document.removeEventListener("keydown", handleEscapeKey);
}

function clickOutside(e) {
  if (e.target === modal) {
    closeModal();
  }
  if (e.target === sucssesModal) {
    closeModalSucsses();
  }
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    closeModal();
    closeModalSucsses();
    inputModal.value = "";
    inputModal.style.border = "none";
  }
}
