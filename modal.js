//// Modal
const signUpBtn = document.querySelector('#signUp');
const signInBtn = document.querySelector('#signIn');
const closeBtns = document.querySelectorAll('#close');
const signUpModal = document.querySelector('#signUpModal');
const signInModal = document.querySelector('#signInModal');

// Show Sign Up Modal
signUpBtn.addEventListener('click', () => {
  signUpModal.classList.add('show-modal');
});

// Hide Sign Up/ Sign In Modals
closeBtns[0].addEventListener('click', () => {
  signUpModal.classList.remove('show-modal');
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
  e.target === signUpModal || signInModal
    ? e.target.classList.remove('show-modal')
    : false;
  console.log(e.target);
});
