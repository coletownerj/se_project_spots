const editBtn = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#edit-profile-modal");
const editCloseButton = profileModal.querySelector(".modal__close-btn");

const addBtn = document.querySelector(".profile__add-button");
const postModal = document.querySelector("#new-post-modal");
const postCloseBtn = postModal.querySelector(".modal__close-btn");

editBtn.addEventListener("click", function () {
  profileModal.classList.add("modal_is-opened");
});

editCloseButton.addEventListener("click", function () {
  profileModal.classList.remove("modal_is-opened");
});

addBtn.addEventListener("click", function () {
  postModal.classList.add("modal_is-opened");
});

postCloseBtn.addEventListener("click", function () {
  postModal.classList.remove("modal_is-opened");
});
