function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileDevice()) {
document.body.innerHTML = `
<div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #7fbdfc;">
<div style="text-align: center; padding: 20px; background-color: #e74c3c; color: white; border-radius: 10px;">
<h1>Halaman ini hanya dapat diakses melalui perangkat mobile.</h1>
<p>Silakan buka halaman ini di perangkat mobile Anda untuk melanjutkan.</p>
</div>
</div>
`;
}
