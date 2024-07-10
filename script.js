function encryptText() {
	const inputText = document.getElementById("inputText").value;
	if (inputText) {
		// Aplicando a criptografia
		const encryptedText = inputText
			.replace(/e/g, "enter")
			.replace(/i/g, "imes")
			.replace(/a/g, "ai")
			.replace(/o/g, "ober")
			.replace(/u/g, "ufat");

		// Atualizando o conteúdo da div "result"
		document.querySelector(".result img").style.display = "none";
		document.querySelector("#default-message").style.display = "none";
		document.querySelector(".result h1").style.display = "none";
		document.getElementById("outputText").textContent = encryptedText;

		// Mostrar o botão de copiar
		document.getElementById("copy").style.display = "block";
	} else {
		alert("Por favor, digite um texto para criptografar.");
	}
}

function decryptText() {
	const inputText = document.getElementById("inputText").value;
	if (inputText) {
		// Aplicando a descriptografia
		const decryptedText = inputText
			.replace(/enter/g, "e")
			.replace(/imes/g, "i")
			.replace(/ai/g, "a")
			.replace(/ober/g, "o")
			.replace(/ufat/g, "u");

		// Atualizando o conteúdo da div "result"
		document.querySelector(".result img").style.display = "none";
		document.querySelector("#default-message").style.display = "none";
		document.querySelector(".result h1").style.display = "none";
		document.getElementById("outputText").textContent = decryptedText;

		// Mostrar o botão de copiar
		document.getElementById("copy").style.display = "block";
	} else {
		alert("Por favor, digite um texto para descriptografar.");
	}
}

function copyText() {
	// Obtém o texto do elemento com o id "outputText"
	const outputText = document.getElementById("outputText").textContent;
	if (outputText) {
		// Cria um elemento temporário para copiar o texto
		const tempInput = document.createElement("textarea");
		tempInput.value = outputText;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		alert("Texto copiado para a área de transferência!");
	} else {
		alert("Não há texto para copiar.");
	}
}

function resetResult() {
	// Reexibindo a imagem e a mensagem padrão
	document.querySelector(".result img").style.display = "block";
	document.querySelector("#default-message").style.display = "block";
	document.querySelector(".result h1").style.display = "block";
	document.getElementById("outputText").textContent = "";

	// Ocultar o botão de copiar
	document.getElementById("copy").style.display = "none";
}

document.getElementById("inputText").addEventListener("input", () => {
	if (!document.getElementById("inputText").value) {
		resetResult();
	}
});
