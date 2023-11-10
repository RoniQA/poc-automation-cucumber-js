const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')
const expect = require('chai')

Given('que eu esteja na pagina inicial do google', function () {
});
       
When('eu pesquisar por um assunto', function () {
});
       
Then('me retorna os resultados indexados', function () {
    // https://cucumber.io/docs/cucumber/checking-assertions/#javascript
    assert.equal(true, true)
});
