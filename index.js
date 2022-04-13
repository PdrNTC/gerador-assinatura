// Encontra as inputs
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const gerenciaInput = document.getElementById('gerencia');
const telefoneInput = document.getElementById('telefone');

desenharImagem();

// adiciona um metodo que realiza uma funcao quando um eventoacontece
// no caso o evento chama-se: "input" e ocorre quando o texto digitado se altera
// ou quando o valor selecionado altera
nomeInput.addEventListener('input', () => atualizaNome())
sobrenomeInput.addEventListener('input', () => atualizaNome())
gerenciaInput.addEventListener('input', () => atualizaNome())
telefoneInput.addEventListener('input', () => atualizaNome())

function atualizaNome() {
  // recebe as informacoes das inputs
  var nome = nomeInput.value;
  var sobrenome = sobrenomeInput.value;
  var gerencia = gerenciaInput.value;
  var telefone = telefoneInput.value;

  let nomeCompleto = nome //+ ' ' + sobrenome

  desenharImagem(nomeCompleto,sobrenome,gerencia,telefone); 
}

function desenharImagem(name,sobrenome,gerencia,telefone) {
	if(!name) name = "Preencha o nome"
    	var canvas = document.getElementById('idCanvas');
    	var context = canvas.getContext('2d');
	
	// pedro mod
	if(!sobrenome) sobrenome = "Preencha o cargo"
    	var canvas = document.getElementById('idCanvas');
    	var context = canvas.getContext('2d');

	if(!gerencia) gerencia = "Preencha a gerência"
    	var canvas = document.getElementById('idCanvas');
    	var context = canvas.getContext('2d');
	
	if(!telefone) telefone = "Preencha o telefone"
    	var canvas = document.getElementById('idCanvas');
    	var context = canvas.getContext('2d');
		
	
	var imageObj = new Image();

  	imageObj.onload = function() {    		
			context.drawImage(imageObj, 0, 0);
    		context.font = "30px Minhafonte";
    		context.fillStyle = "#3e3e3d";
			// pedro mod
    		context.fillText(name, 162, 90);
			context.fillText(sobrenome, 162, 120);
			context.fillText(gerencia, 162, 148);
			context.fillText(telefone, 162, 175);
	    
    		var canvas = document.getElementById('idCanvas');
   	 	var dataURL = canvas.toDataURL();

		// adiciona a imagem no botao de download
		const downloadButton = document.querySelector(".download-image")
    		downloadButton.href = `data:application/octet-stream;${dataURL}`
	}
	imageObj.setAttribute('crossOrigin', 'anonymous');
	// Esse é o atributo que você vai alterar para colocar a sua imagem de assinatura
	imageObj.src = "https://raw.githubusercontent.com/PdrNTC/Email-sign-generator/master/assets/imgs/imgass.png";
	
	//imageObj.src = "https://raw.githubusercontent.com/Tashima42/Email-sign-generator/canvas/assets/imgs/assinatura-modelo.png";
};



