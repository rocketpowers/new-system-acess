
localStorage.setItem("saldo", "00.00");
    var client = {
    nome:'mike',


conta:'ax23',
saldo:33.22


}

var add_dinheiro = function(valor){
 client.saldo=client.saldo+valor;
}

var remover_dinheiro=function(valor){
    client.saldo=client.saldo-valor;
}

var consultar_saldo = function(){
    console.log('saldo: ' + client.saldo);

}

var consultar_client=function(){
    console.log('nome: '+ client.nome);
    console.log('login:' + client.login);
    console.log('senha:'+ client.senha);
    console.log('conta: '+ client.conta);
    console.log('saldo: '+ client.senha);
}

//add_dinheiro(100);

//consultar_saldo();


