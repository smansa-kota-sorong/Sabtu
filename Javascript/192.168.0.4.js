const credentials = {
            'KOSUM PAITI': '01',
            'userC2': 'pass2',
            'user3': 'password3',
            'user4': 'password4',
            'user5': 'password5'
        };

function login() {
  if (!document.fullscreenElement) {
    alert("Anda harus masuk ke mode 🔲 untuk melanjutkan!");
    return;
  }

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (credentials[username] && credentials[username] === password) {
    document.getElementById('loginPage').classList.add('hidden');

    switch (username) {
      case 'KOSUM PAITI':
        document.getElementById('homePage').classList.remove('hidden');
                break;
      case 'userC2':
        document.getElementById('gurupage').classList.remove('hidden');
                break;
      case 'userE3':
        document.getElementById('loginadminpage').classList.remove('hidden');
                break;
      case 'userG4':
        document.getElementById('orangtuapage').classList.remove('hidden');
                break;
      case 'userI5':
        document.getElementById('komunitaspage').classList.remove('hidden');
                break;
    }
  } else {
    alert("Username atau Password salah!");
  }
}