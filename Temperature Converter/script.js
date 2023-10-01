document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const unitSelect = document.getElementById("unit");
    const resultOutput = document.getElementById("result");

    function convertTemperature() {
        const celsius = parseFloat(celsiusInput.value);

        if (!isNaN(celsius)) {
            const targetUnit = unitSelect.value;
            let result;
            let unitSymbol = "";

            switch (targetUnit) {
                case "fahrenheit":
                    result = (celsius * 9/5) + 32;
                    unitSymbol = "°F";
                    break;
                case "kelvin":
                    result = celsius + 273.15;
                    unitSymbol = "K";
                    break;
                case "rankine":
                    result = (celsius + 273.15) * 9/5;
                    unitSymbol = "°R";
                    break;
                case "newton":
                    result = celsius * 33/100;
                    unitSymbol = "N";
                    break;
                case "romer":
                    result = celsius * 21/40 + 7.5;
                    unitSymbol = "°Rø";
                    break;
                case "reaumur":
                    result = celsius * 4/5;
                    unitSymbol = "°Ré";
                    break;
                case "delisle":
                    result = (100 - celsius) * 3/2;
                    unitSymbol = "°D";
                    break;
                default:
                    result = "Invalid Unit";
            }

            resultOutput.textContent = result.toFixed(2) + " " + unitSymbol;
        } else if (celsiusInput.value.length === 0) {
            resultOutput.textContent = "Enter the temperature";
        } else {
            resultOutput.textContent = "Invalid Input";
        }
    }

    celsiusInput.addEventListener("input", convertTemperature);
    unitSelect.addEventListener("change", convertTemperature);
});
