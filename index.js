function convert() {
    const temperatureInput = document.querySelector('#temperature');
    const conversionType = document.querySelector('#conversion').value;
    const resultElement = document.querySelector('#result');

    const temperature = parseFloat(temperatureInput.value);

    if (isNaN(temperature)) {
        resultElement.textContent = 'Invalid input';
        return;
    }

    let result;

    if (conversionType === 'celsiusToFahrenheit') {
        result = (temperature * 9 / 5) + 32;
        resultElement.innerHTML= `${temperature}°C is equal to ${result}°F`;
    } else if (conversionType === 'fahrenheitToCelsius') {
        result = (temperature - 32) * 5 / 9;
        resultElement.innerHTML = `${temperature}°F is equal to ${result}°C`;
    }
}

