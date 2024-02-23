let form = document.forms.signup
let inputs = form.querySelectorAll('input')

form.onsubmit = (event) => {
    event.preventDefault()
    let error = false

    inputs.forEach(inp => {
        let isRequest = inp.parentNode.classList.contains('req')

        if ( isRequest === true && inp.value.length === 0) {
            error = true

            inp.parentNode.classList.add('error')
        } else {
            inp.parentNode.classList.remove('error')
        }
    });

    if (error === true) {
        alert('Error fill all fields')
        return
    }
    submit(event.target)
}

function submit(form) {
    let fm = new FormData(form)

    let user = {}

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}


const input_all = document.querySelectorAll('input');
const span = document.querySelectorAll('span[data-id]');

let avter = {
    all: 0,
    need: 0,
    succes: 0,
    wrong: 0
}

span.forEach(span => {
    const dataId = span.dataset.id;
    const value = parseInt(span.textContent.trim()); 
    avter[dataId] = value;
})

