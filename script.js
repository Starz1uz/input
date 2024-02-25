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

