const { Given, When, Then } = require('@cucumber/cucumber');

Given('que eu esteja na pagina inicial do google', function () {
    console.log("Step 1")
});
       
When('eu pesquisar por um assunto', function () {
    console.log("Step 2")
});
       
Then('me retorna os resultados indexados', function () {
    console.log("Step 3")
});
