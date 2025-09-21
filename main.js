document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const status = document.getElementById('status');
  // Demo behaviour: show success message (no server)
  status.textContent = `Thanks, ${name || 'friend'} — message received (demo).`;
  this.reset();
});
