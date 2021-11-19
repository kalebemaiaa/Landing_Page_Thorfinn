var admin_btn = document.querySelector("#admin_btn")
var music_btn =  document.querySelector("#music_btn")
var funny_btn =  document.querySelector("#funny_btn")
var info_btn =  document.querySelector("#info_btn")
var config_btn =  document.querySelector("#config_btn")
var util_btn =  document.querySelector("#util_btn")

//variaveis de controle p saber se um btn esta ativo ou nao
var controle_button_admin = false
var controle_button_music = false
var controle_button_funny = false
var controle_button_info = false
var controle_button_config = false
var controle_button_util = false


function show_admin_command(){
    if(controle_button_admin==false){
        for(i=0;i<document.querySelectorAll(".admin_command").length;i++){
            document.querySelectorAll(".admin_command")[i].style.display="flex"
        }
        for(i=0;i<document.querySelectorAll(".funny_command").length;i++){
            document.querySelectorAll(".funny_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".info_command").length;i++){
            document.querySelectorAll(".info_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".config_command").length;i++){
            document.querySelectorAll(".config_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".util_command").length;i++){
            document.querySelectorAll(".util_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".music_command").length;i++){
            document.querySelectorAll(".music_command")[i].style.display="none"
        }
        admin_btn.style.background="#87CEFA"
        music_btn.style.background="#708090"
        funny_btn.style.background="#708090"
        info_btn.style.background="#708090"
        config_btn.style.background="#708090"
        util_btn.style.background="#708090"
        controle_button_admin = true
        controle_button_music = false
        controle_button_funny = false
        controle_button_info = false
        controle_button_config = false
        controle_button_util = false
    }
    else{
        show_all_true()
    }
}
function show_music_command(){
    if(controle_button_music==false){
        for(i=0;i<document.querySelectorAll(".admin_command").length;i++){
            document.querySelectorAll(".admin_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".funny_command").length;i++){
            document.querySelectorAll(".funny_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".info_command").length;i++){
            document.querySelectorAll(".info_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".config_command").length;i++){
            document.querySelectorAll(".config_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".util_command").length;i++){
            document.querySelectorAll(".util_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".music_command").length;i++){
            document.querySelectorAll(".music_command")[i].style.display="flex"
        }
        admin_btn.style.background="#708090"
        music_btn.style.background="#87CEFA"
        funny_btn.style.background="#708090"
        info_btn.style.background="#708090"
        config_btn.style.background="#708090"
        util_btn.style.background="#708090"
        controle_button_admin = false
        controle_button_music = true
        controle_button_funny = false
        controle_button_info = false
        controle_button_config = false
        controle_button_util = false
    }
    else{
        show_all_true()
    }
}
function show_funny_command(){
    if(controle_button_funny==false){
        for(i=0;i<document.querySelectorAll(".admin_command").length;i++){
            document.querySelectorAll(".admin_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".funny_command").length;i++){
            document.querySelectorAll(".funny_command")[i].style.display="flex"
        }
        for(i=0;i<document.querySelectorAll(".info_command").length;i++){
            document.querySelectorAll(".info_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".config_command").length;i++){
            document.querySelectorAll(".config_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".util_command").length;i++){
            document.querySelectorAll(".util_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".music_command").length;i++){
            document.querySelectorAll(".music_command")[i].style.display="none"
        }
        admin_btn.style.background="#708090"
        music_btn.style.background="#708090"
        funny_btn.style.background="#87CEFA"
        info_btn.style.background="#708090"
        config_btn.style.background="#708090"
        util_btn.style.background="#708090"
        controle_button_admin = false
        controle_button_music = false
        controle_button_funny = true
        controle_button_info = false
        controle_button_config = false
        controle_button_util = false
    }
    else{
        show_all_true()
    }
}
function show_info_command(){
    if(controle_button_info==false){
        for(i=0;i<document.querySelectorAll(".admin_command").length;i++){
            document.querySelectorAll(".admin_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".funny_command").length;i++){
            document.querySelectorAll(".funny_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".info_command").length;i++){
            document.querySelectorAll(".info_command")[i].style.display="flex"
        }
        for(i=0;i<document.querySelectorAll(".config_command").length;i++){
            document.querySelectorAll(".config_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".util_command").length;i++){
            document.querySelectorAll(".util_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".music_command").length;i++){
            document.querySelectorAll(".music_command")[i].style.display="none"
        }
        admin_btn.style.background="#708090"
        music_btn.style.background="#708090"
        funny_btn.style.background="#708090"
        info_btn.style.background="#87CEFA"
        config_btn.style.background="#708090"
        util_btn.style.background="#708090"
        controle_button_admin = false
        controle_button_music = false
        controle_button_funny = false
        controle_button_info = true
        controle_button_config = false
        controle_button_util = false
    }
    else{
        show_all_true()
    }
}
function show_config_command(){
    if(controle_button_config==false){
        for(i=0;i<document.querySelectorAll(".admin_command").length;i++){
            document.querySelectorAll(".admin_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".funny_command").length;i++){
            document.querySelectorAll(".funny_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".info_command").length;i++){
            document.querySelectorAll(".info_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".config_command").length;i++){
            document.querySelectorAll(".config_command")[i].style.display="flex"
        }
        for(i=0;i<document.querySelectorAll(".util_command").length;i++){
            document.querySelectorAll(".util_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".music_command").length;i++){
            document.querySelectorAll(".music_command")[i].style.display="none"
        }
        admin_btn.style.background="#708090"
        music_btn.style.background="#708090"
        funny_btn.style.background="#708090"
        info_btn.style.background="#708090"
        config_btn.style.background="#87CEFA"
        util_btn.style.background="#708090"
        controle_button_admin = false
        controle_button_music = false
        controle_button_funny = false
        controle_button_info = false
        controle_button_config = true
        controle_button_util = false
    }
    else{
        show_all_true()
    }
}
function show_util_command(){
    if(controle_button_util==false){
        for(i=0;i<document.querySelectorAll(".admin_command").length;i++){
            document.querySelectorAll(".admin_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".funny_command").length;i++){
            document.querySelectorAll(".funny_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".info_command").length;i++){
            document.querySelectorAll(".info_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".config_command").length;i++){
            document.querySelectorAll(".config_command")[i].style.display="none"
        }
        for(i=0;i<document.querySelectorAll(".util_command").length;i++){
            document.querySelectorAll(".util_command")[i].style.display="flex"
        }
        for(i=0;i<document.querySelectorAll(".music_command").length;i++){
            document.querySelectorAll(".music_command")[i].style.display="none"
        }
        admin_btn.style.background="#708090"
        music_btn.style.background="#708090"
        funny_btn.style.background="#708090"
        info_btn.style.background="#708090"
        config_btn.style.background="#708090"
        util_btn.style.background="#87CEFA"
        controle_button_admin = false
        controle_button_music = false
        controle_button_funny = false
        controle_button_info = false
        controle_button_config = false
        controle_button_util = true
    }
    else{
        show_all_true()
    }
}

//A FUNCAO QUE EXECUTA QUANDO NENHUM BOTAO ESTA ATIVO
function show_all_true(){
    for(i=0;i<document.querySelectorAll(".admin_command").length;i++){
        document.querySelectorAll(".admin_command")[i].style.display="flex"
    }
    for(i=0;i<document.querySelectorAll(".funny_command").length;i++){
        document.querySelectorAll(".funny_command")[i].style.display="flex"
    }
    for(i=0;i<document.querySelectorAll(".info_command").length;i++){
        document.querySelectorAll(".info_command")[i].style.display="flex"
    }
    for(i=0;i<document.querySelectorAll(".config_command").length;i++){
        document.querySelectorAll(".config_command")[i].style.display="flex"
    }
    for(i=0;i<document.querySelectorAll(".util_command").length;i++){
        document.querySelectorAll(".util_command")[i].style.display="flex"
    }
    for(i=0;i<document.querySelectorAll(".music_command").length;i++){
        document.querySelectorAll(".music_command")[i].style.display="flex"
    }
    admin_btn.style.background="#708090"
    music_btn.style.background="#708090"
    funny_btn.style.background="#708090"
    info_btn.style.background="#708090"
    config_btn.style.background="#708090"
    util_btn.style.background="#708090"
    controle_button_admin = false
    controle_button_music = false
    controle_button_funny = false
    controle_button_info = false
    controle_button_config = false
    controle_button_util = false
}