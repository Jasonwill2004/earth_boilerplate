var bodyvar = document.body

//four buttons
var consumption = document.getElementById("consumption")
console.log(consumption);

var climate = document.getElementById("climate")
console.log(climate);

var resources = document.getElementById("resources")
console.log(resources);

var people = document.getElementById("people")
console.log(people);

//save text
var savetext = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

// Variable Declaration is done---------


consumption.onclick=()=>{

    //backgroung
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    //frame
    frame.src="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
    
    //buttons
    consumption.style.background="#27AE70"
    resources.style.background="transparent"
    climate.style.background="transparent"
    people.style.background="transparent"

}


resources.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"
    resources.style.background="#EA9355"
    consumption.style.background="transparent"
    climate.style.background="transparent"
    people.style.background="transparent"

}

climate.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"
    climate.style.background="#337BE6"
    resources.style.background="transparent"
    consumption.style.background="transparent"
    people.style.background="transparent"

    

}

people.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"
    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"
    savetext.innerHTML="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."
    people.style.background="#D06961"
    resources.style.background="transparent"
    climate.style.background="transparent"
    consumption.style.background="transparent"


}

