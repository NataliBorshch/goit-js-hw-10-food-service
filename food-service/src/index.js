import menuCard from './templates/menu-card.hbs';
import itemCard from './menu.json';
import './theme';
import './styles.css';

const newCard = menuCard(itemCard);
const listMenu = document.querySelector('.js-menu');
listMenu.insertAdjacentHTML('beforeend', newCard);
