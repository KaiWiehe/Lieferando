let menus = [];
let prices = [];
let amounts = [];

function showBasket() {
    let basket = document.getElementById('basket');
    basket.innerHTML = '';

    for (let i = 0; i < menus.length; i++) {
        const menuItem = menus[i];
        const priceItem = prices[i];
        const amountItem = amounts[i];

        let priceItemPlusAmountItem = priceItem * amountItem;
        let priceItemPlusAmountItemNew = priceItemPlusAmountItem.toFixed(2);

        basket.innerHTML += /* html */ `
        <div class="basketItem">
            <div>${amountItem}</div>
            <div class="basketName">
                <h3>${menuItem}</h3>
                <div>28cm</div>
                <a>Anmerkung hinzufügen</a>
            </div>
            <div class="basketItemPrice">
                <div>${priceItemPlusAmountItemNew}€</div>
                <div class="addRemoveButton">
                    <img onclick="addItemFromBasket('${menuItem}')" src="img/add_FILL0_wght400_GRAD0_opsz48.svg">
                    <img onclick="removeItemFromBasket(${amountItem}, '${menuItem}')" src="img/remove_FILL0_wght400_GRAD0_opsz48.svg">
                </div>
            </div>
        </div>`;
    }

    let sum = calcSum();

    let sumComplete = calcSumComplete(sum);

    basket.innerHTML += `
    <div class="basketEnd">
        <div class="left">
            <div class="marginBottom">Zwischensumme</div>
            <div class="marginBottom">Lieferkosten</div>
            <div class="bold marginBottom">Gesamt</div>
        </div>
        <div class="right">
            <div class="marginBottom">${sum.toFixed(2)}€</div>
            <div class="marginBottom">1.50€</div>
            <div class="bold marginBottom">${sumComplete}€</div>
        </div>
    </div>`;

    if (menus.length === 0) {
        basket.innerHTML = `
        <img src="img/shopping_basket_FILL0_wght400_GRAD0_opsz48.svg" alt="Warenkorb">
        <h2>Fülle deinen Warenkorb...</h2>
        <span>Füge einige leckere Gerichte aus der Speisekarte hinzu und Bestelle dein Essen.</span>`;
    }
}

function addToBasket(menu, price) {
    let menuIndex = getMenuIndex(menu);

    if (menuIndex == -1) {
        menus.push(menu);
        prices.push(price);
        amounts.push(1);
    } else if (menuIndex > -1) {
        amounts[menuIndex]++;
    }
    showBasket();
}

function addItemFromBasket(menu) {
    let menuIndex = getMenuIndex(menu);
    amounts[menuIndex]++;
    showBasket();
}

function removeItemFromBasket(amount, menu) {
    let menuIndex = getMenuIndex(menu);

    if (amount > 1) {
        amounts[menuIndex]--;
    } else if (amount == 1) {
        amounts.splice(menuIndex, 1);
        menus.splice(menuIndex, 1);
        prices.splice(menuIndex, 1);
    }
    showBasket();
}

function getMenuIndex(menu) {
    return menus.indexOf(menu);
}

function calcSum() {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        let sumItem = prices[i] * amounts[i];
        sum += sumItem;
    }
    let sumNew = parseFloat(sum);
    return sumNew;
}

function calcSumComplete(sum) {
    let sumComplete = sum + 1.5;
    let sumCompleteNew = sumComplete.toFixed(2);
    return sumCompleteNew;
}