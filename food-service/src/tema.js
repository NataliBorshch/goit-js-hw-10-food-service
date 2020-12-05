const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const changeTema = event => {
  if (checkboxRef.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Thema', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Thema', Theme.LIGHT);
  }
};

function chooseThema() {
  const currentThema = localStorage.getItem('Thema');
  if (currentThema === null) {
    body.classList.add(Theme.LIGHT);
  } else if (currentThema === Theme.DARK) {
    body.classList.add(Theme.DARK);
    checkboxRef.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}

checkboxRef.addEventListener('change', changeTema);
chooseThema();
