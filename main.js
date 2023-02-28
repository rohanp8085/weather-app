const darkbtn = document.querySelector(".dark-btn")
const lightbtn = document.querySelector(".light-btn")
const container = document.querySelector(".container")
const form = document.querySelector("form")
const input = document.querySelector("input")
const day = document.querySelector("#day")
const time = document.querySelector("#time")
const country= document.querySelector("#country")
const city= document.querySelector("#city")
const celcius = document.querySelector("#celcius")
const sunnytext = document.querySelector("#sunnytext")
const changeimg = document.querySelector("#changeimg")
const sunrise = document.querySelector("#Sunrise")
const moonrise = document.querySelector("#moonrise")
const moonset = document.querySelector("#moonset")
// console.log(sunrise)
const sunset = document.querySelector("#sunset")
const box = document.querySelector(".box")
// const weatherimage = document.querySelector("#weather-image")

// console.log(weatherimage)



darkbtn.addEventListener('click', changeColore)
function changeColore() {
    container.style.backgroundColor = "black"
    box.style.backgroundColor = " rgb(191, 214, 239)"
    box.style.color = "black"
    
}
lightbtn.addEventListener('click', lightmode)
function lightmode() {
    container.style.backgroundColor = "white"
    box.style.backgroundColor = "black"
    box.style.color = "white"
//    const  newhone = document.createElement("h1")
// //    console.log(newhone)
//    newhone.innerText = "weather app"
//    newhone.style.color = "black"

//    weatherimage.appendChild(newhone)

}

async function weatherReport(e) {
    e.preventDefault()
    
      try {
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=137f55633aaf4d2bb23104411232702&q=${input.value}=10&aqi=yes&alerts=no`)

        const data = await res.json()
        const textone = data.location.country
          country.innerText = textone
        const texttwo = data.location.name
        // console.log(texttwo)
        const textthree = data.location.localtime
        time.innerText = textthree
         city.innerText = texttwo
         const textfour = data.location.region
         day.innerText = textfour
         const textfive = data.current.temp_c
         celcius.innerText =   "TEMP:" + " " + textfive
         const textsix = data.current.condition.text
         sunnytext.innerText = textsix
         const textsunrise = data.forecast.forecastday[0].astro.sunrise
        sunrise.innerText =  "sunrise:" + " " + textsunrise
        const textsunset = data.forecast.forecastday[0].astro.sunset
        // console.log(textsunset)
        sunset.innerText =      "sunset:" + " " + textsunset
        const textmoonrise = data.forecast.forecastday[0].astro.moonrise
        moonrise.innerText =      "moonrise:" + " " + textmoonrise
        const textmoonset = data.forecast.forecastday[0].astro.moonset
        moonset.innerText =      "moonset:" + " " + textmoonset
        //  console.log(textsunrise)
         let icon = 'https:' + data.current.condition.icon
         changeimg.setAttribute("src" , icon)
      } catch (error) {
        window.alert("Enter valid City Name")
      }
    
    form.reset()
    
}
form.addEventListener('submit' , weatherReport)