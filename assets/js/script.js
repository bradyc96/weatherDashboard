const apiKey = "f391cbc72c5ed6212f25efb50ce355d8";
const savedSearches = []
const searchButton = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.name')
const temp = document.querySelector('.temp')
const desc = document.querySelector('desc')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const icon = document.querySelector('.icon')



searchButton.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let nameValue = data['name']
        let tempValue = data['main']['temp']
        let descValue = data['weather'][0]['description']
        let windValue = data['wind']['speed']
        let humidityValue = data['main']['humidity']
        let iconValue = data['weather'][0]['icon']

        name.innerHTML = nameValue
        temp.innerHTML = tempValue
        desc.innerHTML = descValue
        wind.innerHTML = windValue
        humidity.innerHTML = humidityValue
        icon.innerHTML = iconValue
    })
.catch(err => alert("Invalid city"))
})