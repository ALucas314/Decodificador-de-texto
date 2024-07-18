// Captura dos elementos do DOM
const criptoTextEl = document.getElementById("cripto");
const decriptoTextEl = document.getElementById("decripto");
const criptoBtnEl = document.getElementById("criptoBtn");
const decriptoBtnEl = document.getElementById("decriptoBtn");
const copyBtnEl = document.getElementById("copyBtn");
const decriptoSubtextEl = document.querySelector(".decipto-subtext");
const decriptoImgEl = document.getElementById("decripto-img");
const decriptoBoxEl = document.querySelector(".decripto-box");

// Adição dos "Event Listeners" nos botões
criptoBtnEl.addEventListener("click", encriptText);
decriptoBtnEl.addEventListener("click", decriptText);
copyBtnEl.addEventListener("click", copyText);

// Função de encriptação
function encriptText() {
  const regularText = criptoTextEl.textContent;
  const anyInvalidChar = isAnyCharInvalid(regularText);
  if (anyInvalidChar) {
    renderInvalid(regularText);
  } else {
    let encriptedText = "";
    for (letter of regularText) {
      switch (letter) {
        case "e":
          encriptedText += "enter";
          break;
        case "i":
          encriptedText += "imes";
          break;
        case "a":
          encriptedText += "ai";
          break;
        case "o":
          encriptedText += "ober";
          break;
        case "u":
          encriptedText += "ufat";
          break;
        default:
          encriptedText += letter;
      }
    }
    renderValid(encriptedText, false); // Passa false para indicar que é criptografado
  }
}

// Função de decriptação
function decriptText() {
  const encriptedText = criptoTextEl.textContent;
  const anyInvalidChar = isAnyCharInvalid(encriptedText);
  if (anyInvalidChar) {
    renderInvalid(encriptedText);
  } else {
    let decriptedText = encriptedText
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    renderValid(decriptedText, true); // Passa true para indicar que é descriptografado
    changeImage(); // Chama a função para mudar a imagem
  }
}

// Função de validação da mensagem inserida pelo usuário
function isAnyCharInvalid(text) {
  if (text) {
    let invalidChar = 0;
    for (letter of text) {
      if (
        (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) ||
        letter.charCodeAt(0) == 32 ||
        letter.charCodeAt(0) == 33 ||
        letter.charCodeAt(0) == 44 ||
        letter.charCodeAt(0) == 46 ||
        letter.charCodeAt(0) == 63 ||
        letter.charCodeAt(0) == 231
      ) {
        invalidChar += 0;
      } else {
        invalidChar += 1;
      }
    }
    return Boolean(invalidChar);
  } else {
    return true;
  }
}

// Função que renderiza a mensagem resultado validada
function renderValid(text, isDecrypted) {
  decriptoTextEl.style.color = "black";
  decriptoTextEl.style.fontWeight = 400;
  decriptoTextEl.style.lineHeight = 1.5;
  decriptoTextEl.style.textAlign = "left";
  criptoTextEl.textContent = "";
  decriptoSubtextEl.classList.add("invisible");
  copyBtnEl.classList.remove("invisible");
  decriptoImgEl.classList.remove("invisible");
  decriptoImgEl.classList.remove("img-visibility");
  decriptoBoxEl.style.justifyContent = "space-between";
  decriptoTextEl.textContent = text;

  if (isDecrypted) {
    decriptoImgEl.src = "./img/Sasuke 1.png"; // Altera a imagem para Sasuke 1.png se for descriptografado
  } else {
    // Caso contrário, mantém a imagem padrão
    decriptoImgEl.src = "./img/Sasuke.png";
  }
}

// Função que renderiza a mensagem resultado invalidada
function renderInvalid(text) {
  decriptoTextEl.style.color = "red";
  decriptoTextEl.style.fontWeight = 700;
  decriptoTextEl.style.lineHeight = 1.2;
  decriptoTextEl.style.textAlign = "center";
  decriptoTextEl.textContent =
    "Por favor, use apenas letras minúsculas e sem acento";
  decriptoSubtextEl.classList.remove("invisible");
  copyBtnEl.classList.add("invisible");
  decriptoImgEl.classList.remove("invisible");
  decriptoImgEl.classList.add("img-visibility");
  decriptoBoxEl.style.justifyContent = "center";
  criptoTextEl.textContent = text;
}

// Função do botão "Copiar"
function copyText() {
  const userText = decriptoTextEl.textContent;
  navigator.clipboard.writeText(userText);
  decriptoTextEl.textContent = "Nenhuma mensagem";
}

// Função para mudar a imagem ao descriptografar
function changeImage() {
  decriptoImgEl.src = "./img/Sasuke 1.png";
}
