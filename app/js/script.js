const mainContainer=document.querySelector('.main-container')
qrInput= mainContainer.querySelector('.main .urlinput')
generateBtn=mainContainer.querySelector('.main .button')
qrImg= mainContainer.querySelector('.footer .img')




generateBtn.addEventListener('click',()=>{
    let qrValue= qrInput.value
    if(!qrValue){
        alert('Insira uma URL')
    }
    generateBtn.innerText='Gerando Qrcode...'
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener('load',()=>{
        generateBtn.innerText='Gerar novamente'
        mainContainer.classList.add('active')  
    })

    qrInput.addEventListener('keyup',()=>{
        if(!qrInput.value){
            mainContainer.classList.remove('active')
        }
    })


})