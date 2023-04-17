let modalContainer = document.getElementById('update-post-modal');
let updatePostBtn = document.getElementById('update-post-btn');
let closeModalBtn = document.getElementById('close-modal-btn');
let submitChangesBtn = document.getElementById('submit-changes-btn')
let cancelPostBtn = document.getElementById('cancel-post-btn');
let articleTitle = document.getElementById('article-title'); // Current title
let articleContent = document.getElementById('article-content'); // Current content
let blogTitle = document.getElementById('blog-title'); // Title field on update modal
let blogContent = document.getElementById('blog-content'); // Content field on update modal

// Show post modal form on button click
updatePostBtn.addEventListener('click', function (e) {
  e.preventDefault();

  blogTitle.value = articleTitle.textContent;
  blogContent.value = articleContent.textContent;

  modalContainer.classList.add('is-active');
})

// Close post modal form on button click
cancelPostBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modalContainer.classList.remove('is-active');
})

// Close post modal form on modal exit button click
closeModalBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modalContainer.classList.remove('is-active');
})

// Handle post form submission
submitChangesBtn.addEventListener('click', async () => {
  const title = blogTitle.value;
  const content = blogContent.value

  // Grab post ID from URL
  const url = window.location.href;
  const postId = url.split('/').pop();

  // Run fetch to use API to delete post
  const fetchURL = `/api/posts/${postId}`;

  const response = await fetch(fetchURL, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' }
  });

  // Clear title and content inputs
  blogTitle.value = '';
  blogContent.value = '';

  // Close modal
  modalContainer.classList.remove('is-active');

  // Redirect to dashboard
  location.href = '/dashboard';
});
