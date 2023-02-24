const apiKey = "f391cbc72c5ed6212f25efb50ce355d8";
const savedSearches = []
const searchButton = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.name')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const icon = document.querySelector('.icon')
const weatherBox = document.querySelector('.weatherBox')
const fiveDayContainer = document.querySelector('.fiveDayContainer')


searchButton.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=` + inputValue.value + `&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let nameValue = data.city.name
            let tempValue = data.list[0].main.temp
            let descValue = data.list[0].weather[0].description
            console.log(descValue)
            let windValue = data.list[0].wind.speed
            let humidityValue = data.list[0].main.humidity
            let iconValue = data.list[0].weather[0].icon



            name.textContent = nameValue
            temp.textContent = tempValue
            desc.textContent = descValue
            wind.textContent = windValue
            humidity.textContent = humidityValue
            icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconValue}@2x.png`)

            fiveDayContainer.textContent = ""
            for (let i = data.list.length -1; i >= 0; i=i-8) {
                console.log(data.list[i])
                const html = `
            <div class="day card col-2">
                <h4 class="date">${data.list[i].dt_txt.split(' ')[0]}</h4>
                <p class="temp">temp: ${data.list[i].main.temp}</p>
                <p class="wind">wind: ${data.list[i].wind.speed}</p>
                <p class="humidity">humidity: ${data.list[i].main.humidity}</p>
            </div>`
                fiveDayContainer.insertAdjacentHTML('afterbegin', html)
            }

        })
        .catch(err => alert("Invalid city"))
})