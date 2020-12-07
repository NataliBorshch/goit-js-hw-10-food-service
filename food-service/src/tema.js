const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const changeTheme = event => {
  if (checkboxRef.checked) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
};

const replaceTheme = (oldTheme, newTheme) => {
  body.classList.add(newTheme);
  body.classList.remove(oldTheme);
  localStorage.setItem('Theme', newTheme);
};

function chooseTheme() {
  const currentThema = localStorage.getItem('Theme');
  if (currentThema === Theme.DARK) {
    body.classList.add(Theme.DARK);
    checkboxRef.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}

checkboxRef.addEventListener('change', changeTheme);
chooseTheme();
