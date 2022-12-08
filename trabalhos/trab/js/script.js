const inputs = document.querySelectorAll(".input");
const button = document.querySelector(".login__button");
const main = document.querySelector("main");
const background_music = new Audio("music/enemy.mp3");
var isPlaying = false;

// rebemos o event e dele pegamos o target (event.target)
const handleFocus = ({ target }) => {
    //target => é a representação do input
    //previousElementSibling => retorna o elemento anterior ao input, no caso o span
    const span = target.previousElementSibling;

    span.classList.add("span-active");
}

// rebemos o event e dele pegamos o target (event.target)
const handleFocusOut = ({ target }) => {
    // Removendo a classe se o campo estiver vazio:
    if (target.value === "") {
        const span = target.previousElementSibling;
        span.classList.remove("span-active");
    }
}

// validar o nome de usuário e a senha
const handleChange = () => {
    const [username, password] = inputs;

    if (username.value && password.value.length >= 8) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// Observando se os elementos vão entrar em foco:
inputs.forEach(input => input.addEventListener("focus", handleFocus));
// Observando se os elementos vão sair do foco:
inputs.forEach(input => input.addEventListener("focusout", handleFocusOut));
// Observando se os elementos vão receber alterações no input:
inputs.forEach(input => input.addEventListener("input", handleChange));

// Iniciando a música ao clicar no documento pela primeira vez:
main.addEventListener("click", () => {
    if (!isPlaying && document.body.scrollWidth >= 800) {
        background_music.play();
        isPlaying = true;
    }
});
// Verificando se a música deve ser interrompida:
window.addEventListener("resize", () => {
    if (document.body.scrollWidth < 800) {
        background_music.pause();
        isPlaying = false
    } else {
        if (!isPlaying) {
            background_music.play();
            isPlaying = true;
        }
    }
});
