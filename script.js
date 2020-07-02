function calculateInsurance(fullname, country, horsepower, age) {
    switch (country) {
        case "Austria":
            return `${fullname}, your insurance costs are €${Math.round((horsepower * 100 / age + 50)*100)/100} per year.`
            break
        case "Hungary":
            return `${fullname}, your insurance costs are €${Math.round((horsepower * 120 / age + 100)*100)/100} per year.`
            break
        case "Tanzania":
            return `${fullname}, your insurance costs are €${Math.round((horsepower * 150 / (age + 3) + 50)*100)/100} per year.`
    }
}

document.getElementById("calculate").addEventListener("click", function(a) {
    if (document.getElementById("fullname").value != "") {
        fullName = document.getElementById("fullname").value
    } else {
        document.getElementById("result").innerHTML = "Your name is required."
        return
    }
    if (document.getElementById("age").value != "") {
        age = parseInt(document.getElementById("age").value)
    } else {
        document.getElementById("result").innerHTML = "Your age is required."
        return
    }
    if (document.getElementById("horsepower").value != "") {
        horsepower = parseInt(document.getElementById("horsepower").value)
    } else {
        document.getElementById("result").innerHTML = "Your car's horsepower is required."
        return
    }
    country = document.getElementById("country").value
    document.getElementById("result").innerHTML = calculateInsurance(fullName, country, horsepower, age)
});