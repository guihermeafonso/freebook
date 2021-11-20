let emails = ['teste@hotmail.com']
let senhas = ['123qwe']


function entrar() {

    let res = document.getElementById('res')
    let email = document.getElementById('txtemail')
    let senha = document.getElementById('txtsenha')

    var i = 0;
    while(i<emails.length) {
        if (email.value == emails[i] && senha.value == senhas[i]) {
            window.alert('Login efetuado com sucesso')
            break;
            }
        else {
            i++;
        }
        window.alert('Email informado não cadastrado ou senha inválida.')
    }
    
}