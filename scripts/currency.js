// Precios iniciales en EUR por cada tarjeta
const pricesInEUR = {
    basic: 0,
    professional: 25,
    premium: 60,
};
// Elementos DOM incluyendo desde las class del html
const currencySelect = document.getElementById("currencySelect");
const basicPriceDisplay = document.querySelector(".pricing__dolar");
const professionalPriceDisplay = document.querySelector(".pricing-blue__dolar");
const premiumPriceDisplay = document.querySelector(".pricing-green__dolar");

// Function para obtener la tasa de cambios desde euros a otra monedaa
async function fetchExchangeRates() {
    try {
        const response = await fetch ("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json");
        const rates = await response.json ();
        return rates;
    } catch (error) {
        console.error("Error al obtener las tasas de cambio:", error);
        return null;
    }
}

// Función para actualizar los precios en la moneda seleccionada
async function updatePrices() {
    const selectedCurrency = currencySelect.value;
    const rates = await fetchExchangeRates();

    // Obtener la tasa de cambio de EUR a la moneda seleccionada
    const rate = selectedCurrency === "eur" ? 1: rates.eur[selectedCurrency];

    // Calcular y mostrar los precios convertidos que ha elegido el usuaro con dos decimales y mayus
    basicPriceDisplay.textContent = `${(pricesInEUR.basic * rate).toFixed(2)} ${selectedCurrency.toUpperCase()}`;
    professionalPriceDisplay.textContent = `${(pricesInEUR.professional * rate).toFixed(2)} ${selectedCurrency.toUpperCase()}`;
    premiumPriceDisplay.textContent = `${(pricesInEUR.premium * rate).toFixed(2)} ${selectedCurrency.toUpperCase()}`;
}

currencySelect.addEventListener("change", updatePrices);
updatePrices();