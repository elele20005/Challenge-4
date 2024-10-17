// Toggle light/dark mode styles for the page and circle
const toggleTheme = () => {
  document.body.classList.toggle('dark-mode');
  const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentMode);
};

// Read from local storage and return data. If no data exists, return an empty array.
const readLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Store a given object in local storage
const storeLocalStorage = (key, value) => {
  const existingData = readLocalStorage(key);
  existingData.push(value);
  localStorage.setItem(key, JSON.stringify(existingData));
};

// Redirect to a different page
let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// On page load, set the theme based on saved preferences
window.onload = () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
