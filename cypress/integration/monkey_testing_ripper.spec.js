describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
    cy.visit('https://losestudiantes.co');
    cy.contains('Cerrar').click();
    cy.wait(1000);
    ramdomEvent(10);
  })
})
function ramdomEvent(monkeysLeft) {
  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
    //obteniendo el evento a realizar
    var randomEvent= getRandomInt(0,3);

    switch (randomEvent) {
      case 0:
      ramdomClick();
      break;
      case 1:
      fillText();
      break;
      case 2:
      selectRandom();
      break;
      case 3:
      buttonRandom();
      break;

      default:
      break;
    }
    monkeysLeft = monkeysLeft - 1;
    cy.wait(1000);
    ramdomEvent(monkeysLeft);
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function ramdomClick()
{
  cy.get('a').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if(!Cypress.dom.isHidden(randomLink)) {
      cy.wrap(randomLink).click({force: true});
    }
  });
}
function fillText()
{
  cy.get('input[type="text"]').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if(!Cypress.dom.isHidden(randomLink)) {
      cy.wrap(randomLink).click({force: true}).type("texto",{force:true});
    }
  });
}
function selectRandom()
{
  cy.get('select').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    var randomOption = randomLink.options[getRandomInt(0, randomSelect.options.length)].value;
    if(!Cypress.dom.isHidden(randomLink)) {
      cy.wrap(randomLink).select(randomOption,{force:true});
    }
  });
}
function buttonRandom()
{
  cy.get('button').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if(!Cypress.dom.isHidden(randomLink)) {
      cy.wrap(randomLink).click({force:true});
    }
  });
}
function randomClick(monkeysLeft) {

  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
    cy.get('a').then($links => {
      var randomLink = $links.get(getRandomInt(0, $links.length));
      if(!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({force: true});
        monkeysLeft = monkeysLeft - 1;
      }
      cy.wait(1000);
      randomClick(monkeysLeft);
    });
  }
}
