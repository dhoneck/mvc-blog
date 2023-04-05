const addCommentBtn = document.getElementById('add-comment-btn');
const commentText = document.getElementById('comment-input');

addCommentBtn.addEventListener('click', async () => {
  console.log('Add comment button was pressed!');

  const url = window.location.href;
  const postId = url.split('/').pop();


  const comment = commentText.value;

  const response = await fetch('/api/comments/', {
    method: 'POST',
    body: JSON.stringify({ comment, postId }),
    headers: { 'Content-Type': 'application/json' }
  });

  // Clear comment input
  commentText.value = '';

  // Refresh Page
  location.reload();
});