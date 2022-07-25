let menus = ["Pizza Salami", 'Eis', 'Brötchen', 'Käse'];
let prices = [1.99, 2.99, 3.99, 4.99];
let amounts = [1, 1, 1, 1];

function getValueFromInput(i) {
    return document.getElementById(i).value; /* liest jedes input feld aus z.b. getValueFromInput('menu') dann liest er das input feld mit der ID menu aus und gibt den wert zurück */
}

function getMenuFromInput() {
    let menu = getValueFromInput('menu');
    let result = menu.trim(); /* mit .trim() löscht er die Leerzeichen am Anfang und am Ende */
    return result;
}

function getPriceFromInput() {
    return +getValueFromInput('price');
}

function onAddMenu() {
    let menuIndex = getMenuIndex(getMenuFromInput()); /* Hier gibt er mir die Zahl raus an welcher stelle das eingegebene im array steht, wenn es nicht im array ist gibt er -1 aus  */

    if (menuIndex == -1) { /* Wenn das im ersten Inputfeld noch nicht im Array vorhanden ist passiert das:  */
        menus.push(getMenuFromInput()); /* Was im ersten Inputfeld steht wird ins Array gepusht */
        prices.push(getPriceFromInput()); /* Was im zweiten Inputfeld steht wird ins Array gepusht */
        amounts.push(1); /* in das Array amounts wird eine 1 ans ende hinzugefügt */
    } else if (menuIndex > -1) { /* Wenn das im Inputfeld schon exestiert passiert das: */
        amounts[menuIndex]++; /* Er erhöht an der stelle wo das im Inputfeld schon exestiert den amounts um 1 */
    }
}

function getMenuIndex(menu) {
    return menus.indexOf(menu); /* er gibt die stelle an der das in den Klammern im Array steht zurück, wenn es nicht exestiert gibt er -1 zurück  */
}