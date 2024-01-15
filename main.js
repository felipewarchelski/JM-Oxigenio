//FORMS

function sucessfullSend() {
    alert("Mensagem enviada com sucesso!")
}

function validateForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;

    if (nome.trim() === '' || email.trim() === '' || numero.trim() === '') {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    } else {
        sucessfullSend();
        return true;
    }
}

//LOGO

function logoClick() {
    setTimeout(function () {
        window.location.href = "#home"
    }, 200)

}

//COPY BUTTON

function copyButton() {
    var email = 'vendas@jmoxigenio.com';
    var inputTemporario = document.createElement('input');
    inputTemporario.setAttribute('value', email);
    document.body.appendChild(inputTemporario);
    inputTemporario.select();
    document.execCommand('copy');
    document.body.removeChild(inputTemporario);
    window.alert('Endereço de e-mail copiado!');
}