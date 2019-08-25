$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

document.addEventListener('DOMContenloaded', function(evet){
    console.log('El DOM ha sido cargado correctamente y esta listo para ser usado');
    const buttonsave= document.getElementById('button-save');
    buttonsave.addEventListener('click',function(e){
        e.preventDefault();
        var user='angel';
        var pass='12345';
        var usuario = document.getElementById('usuario').value;  
        var contra = document.getElementById('password').value;
        if(usuario===user && contra===pass){
            alert('entro ');
            return true;
        } else if(usuario==="" && contra==="" ){
            alert('campos vacios! complete los campos por favor!')
            return false;
        }else{
            return false;
        }

    })
});