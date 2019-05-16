// Source: https://www.imdb.com/list/ls051421138/
const MOVIES = [
  "A Bag of Hammers",
  "The African Queen",
  "Beyond Silence",
  "Not Without My Daughter",
  "Lucky",
  "Happy, Texas",
  "Flowers in the Attic",
  "Eight Men Out",
  "Ghost",
  "Bottle Shock",
  "Butter",
  "Airport",
  "The Man from Earth",
  "The Quest",
  "Quills",
  "The Experts"
];

// Store our list item class as a constant
const LIST_ITEM_CLASSNAME = 'list__item';

// Store our unordered list DOM element reference so we can append to it
const listNode = document.getElementById('list');

/**
 * Renders a list of strings to the target unordered list in the DOM.
 * @param {string[]} list The array of text strings to render. 
 */
function renderList(list) {
  list.forEach((i) => {
    const item = document.createElement('li');
    item.classList.add(LIST_ITEM_CLASSNAME);
    const text = document.createTextNode(i);
    item.appendChild(text);
    listNode.appendChild(item);
  });
}

renderList(MOVIES);
