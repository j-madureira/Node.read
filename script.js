let fs = require('fs');

fs.writeFile('app-q.js','console.log("Criado pelo Node")',function(erro){
                                                          if(erro){ throw "Erro!"}

                                                          console.log("Tudo certo na criação!")
});


fs.readFile('app-q.js','UTF8',function(erros,data){
                                   if(erros){ throw erros}

                                   console.log(data);
});