"use strict";

const modal = document.querySelector(".modal");

const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModalFunction = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModalFunction = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", openModalFunction);
}

closeModal.addEventListener("click", closeModalFunction);
overlay.addEventListener("click", closeModalFunction);
