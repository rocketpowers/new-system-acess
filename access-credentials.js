function acesso(form){

//filtro letras maisculas convertendo td para minusculas
form.nome.value=form.nome.value.toLowerCase()
form.senha.value=form.senha.value.toLowerCase()
    
if (form.nome.value=="rambo" && form.senha.value=="123"||
form.nome.value=="magaiver" && form.senha.value=="456"||
form.nome.value=="rocky" && form.senha.value=="789"){

alert("Welcome Mr.  " + form.nome.value  )

location="page3-menu.html"}
        
else{

form.nome.value=""
form.senha.value=""
alert("Insert as correct credentials to have access")
    
    }
    }
