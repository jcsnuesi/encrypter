var btnEncrypt = document.querySelector('.btnEncryp')
var btnDesencrypt = document.querySelector('.btnDesencryp')
var btnCopie = document.querySelector('.btnCopie')
var textBoxIn = document.querySelector('#box-encriptar')
var textBoxOut = document.querySelector('#box-desencryp')
var info = document.querySelector(".parrafo")



function hideImg() {

  
    document.getElementById("hideImg").style.display = "none";
    document.getElementById("box-desencryp").style.display = "inline-block";

 
    
}


btnEncrypt.addEventListener('click', function (e) {
   
    

    let evaluate = $(textBoxIn).val()
    const diccionario = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" }
    let textEnc = '';
       

    for (let i = 0; i < evaluate.length; i++) {
       
        if (diccionario[evaluate[i]]) {
          
            textEnc += diccionario[evaluate[i]]
          
        }else{

            textEnc += evaluate[i]
           

        }

      
        
    }
    
    $(textBoxOut).val(textEnc)
    $(textBoxIn).val('')
       
})

btnDesencrypt.addEventListener('click', function(){

    let evaluate = $(textBoxIn).val()
    const diccionario = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" }
    let contadora = 0

    if ($(textBoxIn).val() != ''){


        while (contadora < evaluate.length) {

            evaluate = evaluate.replace(diccionario[evaluate[contadora]], evaluate[contadora])

            contadora = contadora + 1


        }

        $(textBoxOut).val(evaluate)
        $(textBoxIn).val('')

    }else{
        info.className = "error"
        info.innerHTML = "Campo requerido!"
      
        
        setTimeout(() => {
            info.className = "parrafo"
            info.innerHTML = "Solo letras minisculas sin acento."

        }, 2000);

       
    }

    
  
})


btnCopie.addEventListener('click', function(e) {
    textBoxOut.select()
    document.execCommand('copy')
    this.innerHTML = 'Copiado!'
    setTimeout(() => {
        this.innerHTML = 'Copiar'
    }, 2000);
   
})


