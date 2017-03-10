var express=require('express');
var app=express();
var path = require("path");
var mysql = require('mysql');

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));

app.set('view engine', 'ejs'); 

//1. Efetuar login;
//2. Fazer as telas CRUD;
//3. Conferir se o usuário está logado;

app.get("/dia",function(req,res){    
            
   var connection = mysql.createConnection({
                            host     : '104.196.222.196',
                            user     : 'newtech',
                            password : 'newtech',
                            database : 'indicadores'});

    connection.connect(function(err){
        if(err) throw err;
        
        connection.query('call buscaDados(1)',function(err,rows){
           if(err) throw err;
            
                var top5vendedores=JSON.stringify(rows[0]);            
                var top5produtos=JSON.stringify(rows[1]);
                var top5grupos=JSON.stringify(rows[2]);
            
                var valores={"tipo" : "Dia",
                 "movimento" : 3000, 
                 "projetado" : 190000,
                 "clientesDia" : 477,
                 "valorMedio" : 77,
                "projetadoClientes" : 699,
                "top5vendedores" : top5vendedores,
                "top5produtos" : top5produtos,
                "top5grupos" : top5grupos}    
    
                res.render('dia',valores);
        });
        
        connection.end();        
    });          
});

app.get("/mes",function(req,res){
            
    var connection = mysql.createConnection({
                            host     : '104.196.222.196',
                            user     : 'newtech',
                            password : 'newtech',
                            database : 'indicadores'});

    connection.connect(function(err){
        if(err) throw err;
        
        connection.query('call buscaDados(2)',function(err,rows){
           if(err) throw err;
            
                var top5vendedores=JSON.stringify(rows[0]);            
                var top5produtos=JSON.stringify(rows[1]);
                var top5grupos=JSON.stringify(rows[2]);
            
                var valores={"tipo" : "Mês",
                 "movimento" : 3000, 
                 "projetado" : 190000,
                 "clientesDia" : 477,
                 "valorMedio" : 77,
                "projetadoClientes" : 699,
                "top5vendedores" : top5vendedores,
                "top5produtos" : top5produtos,
                "top5grupos" : top5grupos}    
    
                res.render('dia',valores);
        });
        
        connection.end();        
    });       
});

app.get("/ano",function(req,res){
   var connection = mysql.createConnection({
                            host     : '104.196.222.196',
                            user     : 'newtech',
                            password : 'newtech',
                            database : 'indicadores'});

    connection.connect(function(err){
        if(err) throw err;
        
        connection.query('call buscaDados(3)',function(err,rows){
           if(err) throw err;
            
                var top5vendedores=JSON.stringify(rows[0]);            
                var top5produtos=JSON.stringify(rows[1]);
                var top5grupos=JSON.stringify(rows[2]);
            
                var valores={"tipo" : "Ano",
                 "movimento" : 3000, 
                 "projetado" : 190000,
                 "clientesDia" : 477,
                 "valorMedio" : 77,
                "projetadoClientes" : 699,
                "top5vendedores" : top5vendedores,
                "top5produtos" : top5produtos,
                "top5grupos" : top5grupos}    
    
                res.render('dia',valores);
        });
        
        connection.end();        
    });       
});


app.get("/login",function(req,res){
    //var valores={"movimento" : 10000, "projetado" : 190000}  
    res.sendFile(path.join(__dirname ,'/login.html'));    
});


app.get("/",function(req,res){
    res.status(404).send("Página não encontrada!");   
    
});

app.listen(3000);