
   // Seleciona o botão e o ícone
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const html = document.querySelector('html')

    // Função para alternar o modo dark
    function toggleTheme() {
      // Alterna a classe 'dark-mode' no corpo
      document.body.classList.toggle('dark-mode');
      html.classList.toggle('dark-mode')
      
      // Alterna o ícone entre lua e sol
      if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-sun');
      } else {
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon');
      }
    }

    // Adiciona o evento de clique ao botão
    themeToggleBtn.addEventListener('click', toggleTheme);


