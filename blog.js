// Select the main element and the back button element
const mainElement = document.getElementById('blog-list');

// Function to build and append an element to the DOM
const buildPostElement = (post) => {
  const postContainer = document.createElement('div');
  postContainer.classList.add('blog-post');
  
  const title = document.createElement('h2');
  title.textContent = post.title;

  const content = document.createElement('p');
  content.textContent = post.content;

  const author = document.createElement('small');
  author.textContent = `Posted by: ${post.username}`;

  postContainer.appendChild(title);
  postContainer.appendChild(content);
  postContainer.appendChild(author);
  
  mainElement.appendChild(postContainer);
};

// Function to handle the case where no blog posts exist
const noPostsMessage = () => {
  const message = document.createElement('p');
  message.textContent = "No blog posts available.";
  mainElement.appendChild(message);
};

// Function to render the list of blog posts
const renderBlogList = () => {
  const blogPosts = readLocalStorage('blogPosts');
  if (blogPosts.length > 0) {
    blogPosts.forEach(post => buildPostElement(post));
  } else {
    noPostsMessage();
  }
};

// On page load, render the blog list
window.onload = () => {
  renderBlogList();
};
