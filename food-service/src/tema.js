const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const changeTheme = event => {
  if (checkboxRef.checked) {
    replaceTheme(theme.LIGHT, theme.DARK);
  } else {
    replaceTheme(theme.DARK, theme.LIGHT);
  }
};

const replaceTheme = (oldTheme, newTheme) => {
  body.classList.add(newTheme);
  body.classList.remove(oldTheme);
  localStorage.setItem('Theme', newTheme);
};

function chooseTheme() {
  const currentTheme = localStorage.getItem('Theme');
  if (currentTheme === theme.DARK) {
    body.classList.add(theme.DARK);
    checkboxRef.checked = true;
  } else {
    body.classList.add(theme.LIGHT);
  }
}

checkboxRef.addEventListener('change', changeTheme);
chooseTheme();
