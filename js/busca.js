function busca() {
    let input = document.getElementById('input').value.toUpperCase()
    let tabela = document.getElementById('tabela');
    let tr = tabela.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll('td')[0];
        let td1 = tr[i].querySelectorAll('td')[1];
        let td2 = tr[i].querySelectorAll('td')[2];
        let td3 = tr[i].querySelectorAll('td')[3];

        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(input) > -1 || td1.innerHTML == input || td2.innerHTML.toUpperCase().indexOf(input) > -1 || td3.innerHTML.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = "none"
            }
        }
    }
}
