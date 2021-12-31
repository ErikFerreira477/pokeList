function fetchStart() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach(function (poke) {
                fetchPoke(poke)
            })
        })
}

function fetchPoke(poke) {
    let url = poke.url;

    fetch(url)
        .then(response => response.json())
        .then(function (pokedata) {

            criaTabela(pokedata);
        })
}

function criaTabela(data) {
    let table = document.querySelector('#tabela');
    let tr = document.createElement('tr');
    let linhaIMG = document.createElement('img');
    linhaIMG.classList.add('imgStyle');    //deixar com borda
    let linhaNome = document.createElement('td');
    let linhaID = document.createElement('td');
    let linhaTYPE = document.createElement('td');
    let linhaHAB1 = document.createElement('td');

    linhaIMG.src = data['sprites']['front_default'];
    linhaNome.innerText = data['name'];
    linhaID.innerHTML = data['id'];
    linhaTYPE.innerHTML = data['types']['0']['type']['name'];
    linhaHAB1.innerHTML = data['abilities']['0']['ability']['name'];

    tr.append(linhaIMG, linhaNome, linhaID, linhaTYPE, linhaHAB1);
    //como gerar a imagem
    table.appendChild(tr);
}

fetchStart()

//busca