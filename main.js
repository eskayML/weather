i = 0
text = "Type in a city to search"

function typeWriter() {
    if (i < text.length) {
        document.getElementById('heading').innerHTML += text.charAt(i)
        i++
    }
}


setInterval(typeWriter, 75)
setInterval(() => {
    i = 0
    document.getElementById('heading').innerHTML = ''
    setInterval(typeWriter, 75)
}, 6000)

//handle submit function

function handleSubmit(e){
    e.preventDefault()
    let city = document.getElementById('input').value
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1813121aed8319c4635b46e070cd150e&units=metric`)
        // Converting to JSON
    .then(response => response.json())

        // Displaying results to console
    .then(json => {
        console.log(json)
        document.getElementsByClassName('output')[0].style.display = 'block'
        document.getElementsByTagName('p')[0].innerHTML = json.name
        document.getElementsByTagName('p')[1].innerHTML = json.main.temp+' <sup>o</sup>C'
        document.getElementsByTagName('p')[2].innerHTML = "<span style='color: red;'>*</span>" + json.weather[0].description
        document.getElementById('icon').src = `https://openweathermap.org/img/w/${json.weather[0].icon}.png`
    });
    
   
}



let submitBtn = document.getElementById('submit-btn')
submitBtn.onclick = handleSubmit

