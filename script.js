const commands_list = [
    {
        nome:"play",
        descricao:"Toca uma música",
        show:false,
        usage:"$play [argumento/link]",
        class_command:"music"
    },
    {
        nome:"say",
        descricao:"Diz o que você pede",
        show:false,
        usage:"$say [argumento]",
        class_command:"funny"
    },
    {
        nome:"fila",
        descricao:"Mostra as músicas na fila",
        show:false,
        usage:"$fila",
        class_command:"music"
    },
    {
        nome:"filtro",
        descricao:"Habilita ou desabilita um filtro de música",
        show:false,
        usage:"$filtro [tipo]",
        class_command:"music"
    },
    {
        nome:"skip",
        descricao:"Pula a música que está tocando",
        show:false,
        usage:"$skip",
        class_command:"music"
    },
    {
        nome:"volume",
        descricao:"Muda o volume do bot",
        show:false,
        usage:"$volume [number]",
        class_command:"music"
    },
    {
        nome:"ping",
        descricao:"Mostra sua latência",
        show:false,
        usage:"$ping",
        class_command:"util"
    },
    {
        nome:"ban",
        descricao:"Bane um usuário",
        show:false,
        usage:"$ban [@user_name] [motivo]",
        class_command:"admin"
    },
    {
        nome:"kick",
        descricao:"Chuta um usuário",
        show:false,
        usage:"$kick [@user_name] [motivo]",
        class_command:"admin"
    },
    {
        nome:"8ball",
        descricao:"A antiga 8ball está aqui para responder suas perguntas",
        show:false,
        usage:"$8ball [pergunta]",
        class_command:"funny"
    },
    {
        nome:"kiss",
        descricao:"Beija um usuário",
        show:false,
        usage:"$kiss [@user_name]",
        class_command:"funny"
    },
    {
        nome:"marry",
        descricao:"se casa com um usuário",
        show:false,
        usage:"$marry [@user_name]",
        class_command:"funny"
    },
    {
        nome:"chatividade",
        descricao:"muda a atividade do bot",
        show:false,
        usage:"$chatividade [argumento]",
        class_command:"config"
    },
    {
        nome:"help",
        descricao:"Mostra a lista de todos comandos ou um comando especifico",
        show:false,
        usage:"$help [command_name(opcional)]",
        class_command:"info"
    },
    {
        nome:"avatar",
        descricao:"Mostrar o avatar do server ou de um usuário que você marcar",
        show:false,
        usage:"$avatar [@user_name(opcional)]",
        class_command:"info"
    },
    {
        nome:"ship",
        descricao:"Mostra a porcentagem de ship entre você e um usuário",
        show:false,
        usage:"$ship [@user_name]",
        class_command:"funny"
    },
    {
        nome:"mute",
        descricao:"Muta um usuário de determinado canal",
        show:false,
        usage:"$mute [@user_name]",
        class_command:"admin"
    },
    {
        nome:"pause",
        descricao:"Pausa a musica que está tocando",
        show:false,
        usage:"$pause",
        class_command:"music"
    }
]

const admin_btn = document.querySelector("#admin_btn")
const music_btn =  document.querySelector("#music_btn")
const funny_btn =  document.querySelector("#funny_btn")
const info_btn =  document.querySelector("#info_btn")
const config_btn =  document.querySelector("#config_btn")
const util_btn =  document.querySelector("#util_btn")
const all_btn = document.querySelector("#all_btn")

let analisando_state_all = []

const content_commandName = document.querySelector("#comandos_file")

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
    
const removeChilds = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

function show_all_commands(){
    verificar_outros_zerados(controle_btn,0)
    if(analisando_state_all.includes(true)==true){
        removeChilds(content_commandName)
        for(i=0;i<controle_btn.length;i++){
            if(controle_btn[i].nome==controle_btn[0].nome){
                controle_btn[i].state = true
            }
            else{
                controle_btn[i].state = false
            }
                const paragrafo = document.createElement('p')
                paragrafo.textContent = commands_list[i].nome
                paragrafo.classList.add('lista_comandos_exibition')
                content_commandName.appendChild(paragrafo)
        }
    }
    else{
        if(controle_btn[0].state == false){
            controle_btn[0].state = true
            for(i=0;i<commands_list.length;i++){
                const paragrafo = document.createElement('p')
                paragrafo.textContent = commands_list[i].nome
                paragrafo.classList.add('lista_comandos_exibition')
                content_commandName.appendChild(paragrafo)
            }
        }
        else{
            controle_btn[0].state = false
            removeChilds(content_commandName)
        }
    }
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
    if(controle_btn[6].state==true){
        util_btn.style.backgroundColor = "#fff"
    }
    else{
        util_btn.style.backgroundColor = "#000"
    }
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
        for(i=0;i<controle_btn.length;i++){
            if(controle_btn[i].nome==controle_btn[index].nome){
                controle_btn[i].state = true
            }
            else{
                controle_btn[i].state = false
            }
            if(commands_list[i].class_command==controle_btn[index].nome){
                const paragrafo = document.createElement('p')
                paragrafo.textContent = commands_list[i].nome
                paragrafo.classList.add('lista_comandos_exibition')
                content_commandName.appendChild(paragrafo)
            }  
        }
    }
    else{
        if(controle_btn[index].state==false){
            controle_btn[index].state = true
            for(i=0;i<commands_list.length;i++){
                if(commands_list[i].class_command==controle_btn[index].nome){
                    const paragrafo = document.createElement('p')
                    paragrafo.textContent = commands_list[i].nome
                    paragrafo.classList.add('lista_comandos_exibition')
                    content_commandName.appendChild(paragrafo)
                }  
            }
        }
        else{
            controle_btn[index].state = false
            removeChilds(content_commandName)
        }
    }
    console.log(controle_btn)
}


function copyText(){
    alert("HELLo")
}

