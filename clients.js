



var client = {

    nome:'mike',
    conta:'111',
    saldo:'33.22'
    
    }

    var add_dinheiro = function(valor){
        client.saldo=client.saldo+valor;
       }
       
       var remover_dinheiro=function(valor){
           client.saldo=client.saldo-valor;
       }

       var consultar_client=function(){
        console.log('nome: '+ client.nome);
        console.log('conta: '+ client.conta);
        console.log('saldo: '+ client.saldo);
    }

    console.log()
    

   //consultar_client();