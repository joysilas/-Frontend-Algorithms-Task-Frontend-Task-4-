const convertFahrToCelsius = (fahr) => {
    Celsius = (fahr - 32) * (5/9)

    if (isNaN(fahr)) {
        let dataType = Array.isArray(fahr) ? 'Array' : typeof fahr;

        let state =  `${fahr} is not a valid number but a/an ${dataType}`
        return state;
    }

    return Celsius.toFixed(4)
}
console.log(convertFahrToCelsius())
console.log(convertFahrToCelsius(0))
console.log(convertFahrToCelsius("0"))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({temp: 0}))