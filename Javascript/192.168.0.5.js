function navigate(pageId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function logout() {
  document.getElementById('homePage').classList.add('hidden');
  document.getElementById('loginPage').classList.remove('hidden');
}
