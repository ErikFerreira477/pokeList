let input = document.querySelector('#input2');

function enviaDados() {
    let nome = document.querySelector('#nome').value;
    let email = document.querySelector('#email').value;
    let emailConfirm = document.querySelector('#emailConf').value;
    let tel = document.querySelector('#telefone').value;
    let sugest = document.querySelector('#textArea').value;
    let count = 0;

    if (nome == '') {

        alert('Você deixou o campo NOME em branco, TENTE NOVAMENTE!');
    }
    else if (email == '') {
        alert('Você deixou o campo EMAIL em branco, TENTE NOVAMENTE!');
    }
    else if (emailConfirm == '') {
        alert('Você deixou o campo EMAIL em branco, TENTE NOVAMENTE!');
    }
    else if (tel == '') {
        alert('Você deixou o campo TELEFONE em branco, TENTE NOVAMENTE!');
    }
    else if (sugest == '') {
        alert('Você deixou o campo SUGESTÃO em branco, TENTE NOVAMENTE!');
    }
    else {
        count++;
    }

    if (email !== emailConfirm) {
        alert('Confirme o EMAIL corretamente!');
    }
    else {
        count++;
    }

    if (count == 2) {
        alert('Recebemos sua sugestão com sucesso!')
        let nome = document.querySelector('#nome').value = '';
        let email = document.querySelector('#email').value = '';
        let emailConfirm = document.querySelector('#emailConf').value = '';
        let tel = document.querySelector('#telefone').value = '';
        let sugest = document.querySelector('#textArea').value = '';
    }
}

//fecha modal

function abreModal(){
    let modalBack = document.querySelector('.modal')

    modalBack.style.display = "block"
}

function fecha() {
    let modalBack = document.querySelector('.modal')
        
    modalBack.style.display = "none";
}