let form = document.forms.signup
let inputs = form.querySelectorAll('input')
let inp = form.querySelectorAll('.req').length
let succes = document.querySelector('center #succes')
let wrong = document.querySelector('center #wrong')

form.onsubmit = (event) => {
    event.preventDefault()
    let errors = 0

    inputs.forEach(inp => {
        let isRequest = inp.parentNode.classList.contains('req')
        let that = true

        if (isRequest === true && inp.value.length === 0) {
            errors.innerHTML += 1
            that = /^([a-zA-Z ]){2,30}$/i
            inp.parentNode.classList.add('error')
        } else {
            inp.parentNode.classList.remove('error')
        }
    });

    // succsec: inp - errors

    if (errors > 0) {
        alert('Error fill all fields')
        wrong.innerHTML += errors.length = inp
        return
    } else {
        succes.innerHTML += errors.innerHTML - inp
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
