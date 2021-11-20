// Data inicial

var data = new Date();
var hora = data.getHours();
var minuto = data.getMinutes();
var diaSemana = data.getDay();
var dia = data.getDate();
var mes = data.getMonth();
let diaSemanatxt = 0;
let mestxt = 0;

var horario = window.document.getElementById('horario')
horario.innerHTML = `${hora}:${minuto}`

if (diaSemana == 0) {
    diaSemanatxt = 'Dom';
}

if (diaSemana == 1) {
    diaSemanatxt = 'Seg';
}

if (diaSemana == 2) {
    diaSemanatxt = 'Ter';
}

if (diaSemana == 3) {
    diaSemanatxt = 'Qua';
}

if (diaSemana == 4) {
    diaSemanatxt = 'Qui';
}

if (diaSemana == 5) {
    diaSemanatxt = 'Sex';
}

if (diaSemana == 6) {
    diaSemanatxt = 'Sab';
}

if (mes == 0) {
    mestxt = 'Jan'
}

if (mes == 1) {
    mestxt = 'Fev'
}

if (mes == 2) {
    mestxt = 'Mar'
}

if (mes == 3) {
    mestxt = 'Abr'
}

if (mes == 4) {
    mestxt = 'Mai'
}

if (mes == 5) {
    mestxt = 'Jun'
}

if (mes == 6) {
    mestxt = 'Jul'
}

if (mes == 7) {
    mestxt = 'Ago'
}

if (mes == 8) {
    mestxt = 'Set'
}

if (mes == 9) {
    mestxt = 'Out'
}

if (mes == 10) {
    mestxt = 'Nov'
}

if (mes == 11) {
    mestxt = 'Dez'
}

var data = window.document.getElementById('data')
data.innerHTML = `${diaSemanatxt}, ${dia} de ${mestxt}`

// Popup Agenda

let buttonA = window.document.getElementById('buttonA')
const popupA = document.querySelector('.popupA-wrapper')

buttonA.addEventListener('click', () => {
     popupA.style.display = 'block'
})

popupA.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popupA-close', 'popupA-wrapper', 'popupA-fazer']
    const shouldClosePopupA = classNames.some(className => className == classNameOfClickedElement)
    
    if (shouldClosePopupA) {
        popupA.style.display = 'none';
    }
})

// Popup Serviço

let buttonS = window.document.getElementById('buttonS')
const popupS = document.querySelector('.popupS-wrapper')

buttonS.addEventListener('click', () => {
     popupS.style.display = 'block'
})

popupS.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popupS-close', 'popupS-wrapper', 'popupS-fazer']
    const shouldClosePopupS = classNames.some(className => className == classNameOfClickedElement)
    
    if (shouldClosePopupS) {
        popupS.style.display = 'none';
    }
})


// Troca de agenda para serviço

let agenda = document.querySelector('.agendatxt')
let servicos = document.querySelector('.servicostxt')
let conteudoagenda = document.querySelector('.agenda')
let conteudoservicos = document.querySelector('.servicos')

servicos.addEventListener('click', () =>{
    servicos.style.borderBottom = '2px solid orange'
    servicos.style.color = 'orange'
    agenda.style.borderBottom = '0px solid orange'
    agenda.style.color = 'white'
    conteudoagenda.style.display = 'none';
    conteudoservicos.style.display = 'block';
})

agenda.addEventListener('click', () =>{
    agenda.style.borderBottom = '2px solid orange'
    agenda.style.color = 'orange'
    servicos.style.borderBottom = '0px solid orange'
    servicos.style.color = 'white'
    conteudoagenda.style.display = 'block';
    conteudoservicos.style.display = 'none';
})

// Adicionar servico no banco

arrAll = []
save = false
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
    document.getElementById('txtdesc').value = ''
    document.getElementById('txtval').value = ''
    document.getElementById('txtdur').value = ''
}


function register(id, indice) {
    var descricao = document.getElementById('txtdesc').value
    var valor = document.getElementById('txtval').value
    var duracao = document.getElementById('txtdur').value
    var servico = {descricao: descricao, valor: valor, duracao: duracao}
    console.log(servico)
    if (save) {
        fetch(`http://localhost:3000/conta/alterar/${id}`, {
                method: 'PUT',
                body: JSON.stringify(servico),
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            })
                .then(resp => {
                    return resp.json()
                })
                .then(json => {
                    this.arrAll[indice] = json
                    document.getElementById('add').innerHTML = "Alterado com sucesso"
                })
            }
}
