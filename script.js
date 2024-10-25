// Seleciona o botão do menu e o menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Adiciona um evento de clique ao botão do menu
menuToggle.addEventListener('click', () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
const menuOptions = document.querySelectorAll('.menu-option');

menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.add('clicked');

        // Remove a classe após a animação
        setTimeout(() => {
            option.classList.remove('clicked');
        }, 300); // Tempo deve ser o mesmo da transição
    });
});