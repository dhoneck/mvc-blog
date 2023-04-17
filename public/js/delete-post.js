let deletePostBtn = document.getElementById('delete-post-btn');

// Handle post deletion
deletePostBtn.addEventListener('click', async () => {
  console.log('deletePostBtn clicked');

  // Grab post ID from URL
  const url = window.location.href;
  const postId = url.split('/').pop();

  // Run fetch to use API to delete post
  const fetchURL = `/api/posts/${postId}`;
  const response = await fetch(fetchURL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });

  // Redirect to dashboard
  location.href = '/dashboard';
});
