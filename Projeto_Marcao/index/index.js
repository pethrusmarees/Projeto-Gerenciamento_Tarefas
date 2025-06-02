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

        const botao_editar = document.createElement('img')
        botao_editar.src = 'mdi--pencil.png'
        botao_editar.style.width = '17px'
        botao_editar.style.cursor = 'pointer'
        botao_editar.style.paddingLeft = '2px'
        botao_editar.style.paddingTop = '5px'
        botao_editar.className = "remover tarefa"
        botao_editar.addEventListener('click', (event) => {
            event.stopPropagation()
           const editar =  prompt('editar tarefa: ');
           label.textContent = editar

        })

        item.appendChild(botao_editar)

        const botaox = document.createElement('img')
        botaox.src = 'mdi--trash.png'
        botaox.style.width = '17px'
        botaox.style.paddingLeft = '10px'
        botaox.style.paddingTop = '5px'
        botaox.style.cursor = 'pointer'
        botaox.className = "remover tarefa"
        botaox.addEventListener('click', function(event){
            event.stopPropagation()
            item.remove()
        })
        
        item.appendChild(botaox)
        console.log(label.length)
        
        lista.appendChild(item)
        texto.value = ''
        
    
            check.addEventListener('change', function(){
                if(check.checked){
                    
                    item.style.color = "gray"
                    item.style.textDecoration = 'line-through'
                     
                }
                else{
                    item.style.color = 'white'
                    item.style.textDecoration = 'none'
                }
            })
        }
     }    

    remover.addEventListener('click', (event) => {
        event.stopPropagation()
        lista.innerHTML = ''
    })
adicionar.addEventListener('click',Criar,)


addEventListener('keydown',(event) => {
    if(event.key  === 'Enter'){
        Criar()
    }
})




