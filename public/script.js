function loadPage(page) {
    fetch(page + '.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('content').innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading page:', error);
      });
  }
  
  // 링크 클릭 시 페이지 로드
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        loadPage(link.getAttribute('href').substring(1));
      });
    });
  
    // 초기 페이지 로드
    loadPage('home');
  });
  