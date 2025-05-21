document.getElementById('postForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (title && content) {
    addPost(title, content);
    this.reset();
  }
});

function addPost(title, content) {
  const posts = document.getElementById('posts');

  const post = document.createElement('div');
  post.className = 'post';

  post.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <button class="like-btn" onclick="likePost(this)">❤️ 0</button>
    <div class="comment-box">
      <input type="text" placeholder="Add a comment..." />
      <button onclick="addComment(this)">💬 Comment</button>
      <ul class="comments"></ul>
    </div>
  `;

  posts.prepend(post);
  post.scrollIntoView({ behavior: 'smooth' });
}

function addComment(button) {
  const input = button.previousElementSibling;
  const commentText = input.value.trim();

  if (commentText) {
    const ul = button.nextElementSibling;
    const li = document.createElement('li');
    li.textContent = commentText;
    ul.appendChild(li);
    input.value = '';
  }
}

function likePost(button) {
  let count = parseInt(button.textContent.replace(/[^\d]/g, ''));
  count += 1;
  button.innerHTML = `❤️ ${count}`;
}

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

