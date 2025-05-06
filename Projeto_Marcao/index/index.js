var adicionar = document.getElementById('adicionar')
var lista = document.getElementById('lista')
var texto = document.getElementById('texto_usuario')
var remover = document.getElementById('remover')

function Criar(){
    valor_texto = texto.value
    if(valor_texto === ''){
         alert("Não deixe vazio")
    }
    else{ 
        const check = document.createElement ("input")
        check.type = "checkbox"
        check.id = Date.now() + "_sua tarefa"
        
        const label = document.createElement("label")
        label.setAttribute('for',check.id)
        label.textContent = valor_texto
        
        const item = document.createElement('li')
        item.appendChild(check)
        item.appendChild(label)


        const botaox = document.createElement('button')
        botaox.textContent = "x"
        botaox.className = "remover tarefa"
        botaox.addEventListener('click', function(event){
            event.stopPropagation()
            item.remove()
        })
        
        item.appendChild(botaox)
        
        lista.appendChild(item)
        texto.value = ''
        
    
            check.addEventListener('change', function(){
                if(check.checked){
                    
                    item.style.color = "green"
                     
                }
                else{
                    item.style.color = 'black'
                }
            })
        }

     }    
     


adicionar.addEventListener('click',Criar,)




