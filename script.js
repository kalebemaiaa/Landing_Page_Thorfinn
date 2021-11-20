const commands_list = [
    {
        nome:"play",
        descricao:"Toca uma música",
        show:false,
        help_exibition:false,
        usage:"$play [argumento/link]",
        class_command:"music"
    },
    {
        nome:"say",
        descricao:"Diz o que você pede",
        show:false,
        help_exibition:false,
        usage:"$say [argumento]",
        class_command:"funny"
    },
    {
        nome:"fila",
        descricao:"Mostra as músicas na fila",
        show:false,
        help_exibition:false,
        usage:"$fila",
        class_command:"music"
    },
    {
        nome:"filtro",
        descricao:"Habilita ou desabilita um filtro de música",
        show:false,
        help_exibition:false,
        usage:"$filtro [tipo]",
        class_command:"music"
    },
    {
        nome:"skip",
        descricao:"Pula a música que está tocando",
        show:false,
        help_exibition:false,
        usage:"$skip",
        class_command:"music"
    },
    {
        nome:"volume",
        descricao:"Muda o volume do bot",
        show:false,
        help_exibition:false,
        usage:"$volume [number]",
        class_command:"music"
    },
    {
        nome:"ping",
        descricao:"Mostra sua latência",
        show:false,
        help_exibition:false,
        usage:"$ping",
        class_command:"util"
    },
    {
        nome:"ban",
        descricao:"Bane um usuário",
        show:false,
        help_exibition:false,
        usage:"$ban [@user_name] [motivo]",
        class_command:"admin"
    },
    {
        nome:"kick",
        descricao:"Chuta um usuário",
        show:false,
        help_exibition:false,
        usage:"$kick [@user_name] [motivo]",
        class_command:"admin"
    },
    {
        nome:"8ball",
        descricao:"A antiga 8ball está aqui para responder suas perguntas",
        show:false,
        help_exibition:false,
        usage:"$8ball [pergunta]",
        class_command:"funny"
    },
    {
        nome:"kiss",
        descricao:"Beija um usuário",
        show:false,
        help_exibition:false,
        usage:"$kiss [@user_name]",
        class_command:"funny"
    },
    {
        nome:"marry",
        descricao:"se casa com um usuário",
        show:false,
        help_exibition:false,
        usage:"$marry [@user_name]",
        class_command:"funny"
    },
    {
        nome:"chatividade",
        descricao:"muda a atividade do bot",
        show:false,
        help_exibition:false,
        usage:"$chatividade [argumento]",
        class_command:"config"
    },
    {
        nome:"help",
        descricao:"Mostra a lista de todos comandos ou um comando especifico",
        show:false,
        help_exibition:false,
        usage:"$help [command_name(opcional)]",
        class_command:"info"
    },
    {
        nome:"avatar",
        descricao:"Mostrar o avatar do server ou de um usuário que você marcar",
        show:false,
        help_exibition:false,
        usage:"$avatar [@user_name(opcional)]",
        class_command:"info"
    },
    {
        nome:"ship",
        descricao:"Mostra a porcentagem de ship entre você e um usuário",
        show:false,
        help_exibition:false,
        usage:"$ship [@user_name]",
        class_command:"funny"
    },
    {
        nome:"mute",
        descricao:"Muta um usuário de determinado canal",
        show:false,
        help_exibition:false,
        usage:"$mute [@user_name]",
        class_command:"admin"
    },
    {
        nome:"pause",
        descricao:"Pausa a musica que está tocando",
        show:false,
        help_exibition:false,
        usage:"$pause",
        class_command:"music"
    }
]
let analisando_state_all = []
const controle_btn = [
    {
        nome:"all",
        state:false,
    },
    {
        nome:"admin",
        state:false,
    },
    {
        nome:"music",
        state:false,
    },
    {
        nome:"funny",
        state:false,
    },
    {
        nome:"info",
        state:false,
    },
    {
        nome:"config",
        state:false,
    },
    {
        nome:"util",
        state:false,
    }
]

const content_commandName = document.querySelector("#comandos_file")

function show_all_commands(){
    verificar_outros_zerados(controle_btn,0)
    if(analisando_state_all.includes(true)==true){
        removeChilds(content_commandName)
        removeChilds(document.getElementById("specific_help"))
        for(j=0;j<commands_list.length;j++){
            commands_list[j].help_exibition =false
        }
        for(i=0;i<controle_btn.length;i++){
            controle_btn[i].state = false
        }
        controle_btn[0].state = true
        for(i=0;i<commands_list.length;i++){
                const paragrafo = document.createElement('p')
                paragrafo.textContent = commands_list[i].nome
                paragrafo.classList.add('lista_comandos_exibition')
                paragrafo.setAttribute('ID',`commandName_${commands_list[i].nome}`)
                content_commandName.appendChild(paragrafo)
        }
        pixels=0
    }
    else{
        if(controle_btn[0].state == false){
            controle_btn[0].state = true
            for(i=0;i<commands_list.length;i++){
                const paragrafo = document.createElement('p')
                paragrafo.textContent = commands_list[i].nome
                paragrafo.classList.add('lista_comandos_exibition')
                paragrafo.setAttribute('ID',`commandName_${commands_list[i].nome}`)
                content_commandName.appendChild(paragrafo)
            }
        }
        else{
            controle_btn[0].state = false
            removeChilds(content_commandName)
            removeChilds(document.getElementById("specific_help"))
            for(j=0;j<commands_list.length;j++){
                commands_list[j].help_exibition =false
            }
        }
        pixels=0
    }
    atribui_função()
}
function show_admin_command(){
    verificar_outros_zerados(controle_btn,1)
    one_of_three(1)
}
function show_music_command(){
    verificar_outros_zerados(controle_btn,2)
    one_of_three(2)
}
function show_funny_command(){
    verificar_outros_zerados(controle_btn,3)
    one_of_three(3)
}
function show_info_command(){
    verificar_outros_zerados(controle_btn,4)
    one_of_three(4)
}
function show_config_command(){
    verificar_outros_zerados(controle_btn,5)
    one_of_three(5)
}
function show_util_command(){
    verificar_outros_zerados(controle_btn,6)
    one_of_three(6)
}


function verificar_outros_zerados(arrayName,index){
    analisando_state_all.length = 0
    for(i=0;i<arrayName.length;i++){
        if(arrayName[i]==arrayName[index]){
            continue
        }
        else{
            analisando_state_all.push(arrayName[i].state)
        }
    }
}
function one_of_three(index){
    if(analisando_state_all.includes(true)==true){
        removeChilds(content_commandName)
        removeChilds(document.getElementById("specific_help"))
        for(j=0;j<commands_list.length;j++){
            commands_list[j].help_exibition =false
        }
        for(i=0;i<controle_btn.length;i++){
            controle_btn[i].state = false
        }
        controle_btn[index].state = true
        for(i=0;i<commands_list.length;i++){
            if(commands_list[i].class_command==controle_btn[index].nome){
                const paragrafo = document.createElement('p')
                paragrafo.textContent = commands_list[i].nome
                paragrafo.classList.add('lista_comandos_exibition')
                paragrafo.setAttribute('ID',`commandName_${commands_list[i].nome}`)
                content_commandName.appendChild(paragrafo)
            }  
        }
        pixels=0
    }
    else{
        if(controle_btn[index].state==false){
            controle_btn[index].state = true
            for(i=0;i<commands_list.length;i++){
                if(commands_list[i].class_command==controle_btn[index].nome){
                    const paragrafo = document.createElement('p')
                    paragrafo.textContent = commands_list[i].nome
                    paragrafo.classList.add('lista_comandos_exibition')
                    paragrafo.setAttribute('ID',`commandName_${commands_list[i].nome}`)

                    content_commandName.appendChild(paragrafo)
                }  
                
            }
            pixels=0
        }
        else{
            removeChilds(document.getElementById("specific_help"))
            for(j=0;j<commands_list.length;j++){
                commands_list[j].help_exibition =false
            }
            controle_btn[index].state = false
            removeChilds(content_commandName)
            pixels=0
        }
    }
    atribui_função()
}

const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

const atribui_função = ()=>{
    for(i=0;i<document.querySelectorAll(".lista_comandos_exibition").length;i++){
        const paragrafo_em_evidencia = document.querySelectorAll(".lista_comandos_exibition")[i]
        paragrafo_em_evidencia.addEventListener("click",()=>{
            const nome_do_comando = paragrafo_em_evidencia.id.slice(12)
            for(i=0;i<commands_list.length;i++){
                if(commands_list[i].nome==nome_do_comando){
                    if(commands_list[i].help_exibition == false){
                        removeChilds(document.getElementById("specific_help"))
                        for(k=0;k<commands_list.length;k++){
                            commands_list[k].help_exibition = false
                        }
                        imprimindo_elementos(i)
                        commands_list[i].help_exibition = true
                    }
                    else{
                        removeChilds(document.getElementById("specific_help"))
                        commands_list[i].help_exibition = false
                    }
                }
            }
        })
    }
}

function imprimindo_elementos(index){
    const help_description_exibition_paragraph = document.createElement('p')
    const help_usage_exibition_paragraph = document.createElement('p')

    help_description_exibition_paragraph.textContent = `${commands_list[index].descricao}`
    help_usage_exibition_paragraph.textContent = `${commands_list[index].usage}`

    help_usage_exibition_paragraph.setAttribute('ID',`help_exibition_uso_`)
    help_description_exibition_paragraph.setAttribute('ID',`help_exibition_descricao_`)

    help_description_exibition_paragraph.classList.add("elemento_baixo")

    document.getElementById("specific_help").appendChild(help_usage_exibition_paragraph)
    document.getElementById("specific_help").appendChild(help_description_exibition_paragraph)
}











//pseudo-carossel
let pixels=0

const down_arrow_function = ()=>{
    if(document.querySelectorAll(".lista_comandos_exibition").length>=10){
       if(pixels>(commands_list.length-10)*-30){
            pixels=pixels-40
            for(i=0;i<12;i++){
                document.querySelectorAll(".lista_comandos_exibition")[i].style=`transform:translateY(${pixels}px)`
            }
       }
    }
}
const up_arrow_function = ()=>{
    if(document.querySelectorAll(".lista_comandos_exibition").length>=10){
        if(pixels<40){
            pixels=pixels+40
            for(i=0;i<12;i++){
                document.querySelectorAll(".lista_comandos_exibition")[i].style=`transform:translateY(${pixels}px)`
            }
        }
    }
}

