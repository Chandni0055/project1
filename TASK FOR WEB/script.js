const form = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');
const toggleBtn = document.getElementById('toggleTheme');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('eventName').value.trim();
  const date = document.getElementById('eventDate').value;
  const time = document.getElementById('eventTime').value;
  const location = document.getElementById('eventLocation').value.trim();

  if (!name || !date || !time || !location) {
    alert("Please fill in all fields!");
    return;
  }

  const card = document.createElement('div');
  card.classList.add('event-card');

  card.innerHTML = `
    <div class="event-title">${name}</div>
    <div class="event-details">📍 ${location}</div>
    <div class="event-details">🗓️ ${date} ⏰ ${time}</div>
  `;

  eventList.appendChild(card);
  form.reset();
});

// Dark mode toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
