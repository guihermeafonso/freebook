arrAll = []
save = true
id = 0
indice = -1
testado = ''

function onClickAdd() {
    if (save) {
        register()
    } else {
        register(id, indice)
    }
    save = true
    document.getElementById('txtname').value = ''
    document.getElementById('txtemail').value = ''
    document.getElementById('txtpassword').value = ''
}

function register(id, indice) {
    var name = document.getElementById('txtname').value
    var email = document.getElementById('txtemail').value
    var password = document.getElementById('txtpassword').value
    var conta = { name, email, password }
    if (save) {
        fetch("http://localhost:3000/conta/incluir", {
            method: 'POST',
            body: JSON.stringify(conta),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
            .then(resp => {
                return resp.json()
            })
            .then(json => {
                arrAll.push(json)
            })
    } else {
    }
}
