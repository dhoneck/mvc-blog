let modalContainer = document.getElementById('create-post-modal');
let addPostBtn = document.getElementById('add-post-btn');
let closeModalBtn = document.getElementById('close-modal-btn');
let submitPostBtn = document.getElementById('submit-post-btn')
let cancelPostBtn = document.getElementById('cancel-post-btn');
let blogTitle = document.getElementById('blog-title');
let blogContent = document.getElementById('blog-content');

// Show post modal form on button click
addPostBtn.addEventListener('click', function (e) {
  e.preventDefault();
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
submitPostBtn.addEventListener('click', async () => {
  const title = blogTitle.value;
  const content = blogContent.value

  const response = await fetch('/api/posts/', {
    method: 'POST',
    body: JSON.stringify({ title, content }),
    headers: { 'Content-Type': 'application/json' }
  });

  // Clear title and content inputs
  blogTitle.value = '';
  blogContent.value = '';

  // Close modal
  modalContainer.classList.remove('is-active');

  // Refresh page
    location.reload();
});
