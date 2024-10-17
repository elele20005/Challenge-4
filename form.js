// Select the form element
const formElement = document.getElementById('blog-form');

// Handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  
  // Check if all fields are filled
  if (!username || !title || !content) {
    alert('Please fill out all fields.');
    return;
  }

  // Store the form data in local storage
  const newPost = { username, title, content };
  storeLocalStorage('blogPosts', newPost);
  
  // Redirect to the blog page
  redirectPage('blog.html');
};

// Add an event listener for form submission
formElement.addEventListener('submit', handleFormSubmit);
