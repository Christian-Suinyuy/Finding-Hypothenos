// hypothenos finder

const buttonElem = document.querySelector('button')

buttonElem.addEventListener('click', ()=>{
    
    let a = Number(document.getElementById('a').value)
    let b = Number(document.getElementById('b').value)
    let hyp = Math.sqrt((a*a)+(b*b))
    document.querySelector('h2').innerText += hyp
})

