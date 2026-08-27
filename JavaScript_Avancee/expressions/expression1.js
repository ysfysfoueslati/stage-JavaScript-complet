const button=document.querySelector('button')
const input=document.querySelector('input')

const timeRegex= /(2[0-3]|[01]\d):[0-5]\d/
input.addEventListener('input', () => {
    if (timeRegex.test(input.value)){
        button.removeAttribute('disabled')
    }
    else{
        button.setAttribute('disabled', '')
    }
})