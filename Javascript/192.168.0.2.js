const video = document.getElementById('introVideo');
    video.onended = function () {
      document.getElementById('videoPage').classList.add('hidden');
      document.getElementById('loginPage').classList.remove('hidden');
    };