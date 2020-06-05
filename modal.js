//// Modal
const signUp = document.querySelector('#signUp');
const signIn = document.querySelector('#signIn');
const closeBtns = document.querySelectorAll('#close');
const modal = document.querySelector('#modal');
const signInModal = document.querySelector('#signInModal');
console.log(document.querySelectorAll('#signUp'));

// Show Sign Up Modal
signUp.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

// Hide Sign Up/ Sign In Modals
closeBtns[0].addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

closeBtns[1].addEventListener('click', () => {
  signInModal.classList.remove('show-modal');
});

// Show Sign In Modal
signIn.addEventListener('click', () => {
  signInModal.classList.add('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', (e) => {
  e.target === modal ? modal.classList.remove('show-modal') : false;
});
