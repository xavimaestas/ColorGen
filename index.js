const btn = document.getElementById("colorBtn")
const picker = document.getElementById("colorPickerInput")
const scheme = document.getElementById("colorScheme")
let colorOne = document.getElementById("colorOne")
let colorTwo = document.getElementById("colorTwo")
let colorThree = document.getElementById("colorThree")
let colorFour = document.getElementById("colorFour")
let colorFive = document.getElementById("colorFive")

let colorHexOne = document.getElementById("colorHexOne")
let colorHexTwo = document.getElementById("colorHexTwo")
let colorHexThree = document.getElementById("colorHexThree")
let colorHexFour = document.getElementById("colorHexFour")
let colorHexFive = document.getElementById("colorHexFive")





function getColor(){
    fetch(`https://www.thecolorapi.com/scheme?hex=c70007&mode=analogic&count=5`)
    .then(results => results.json())
    .then(data => {
        colorOne.style.backgroundColor = data.colors[0].hex.value
        colorTwo.style.backgroundColor = data.colors[1].hex.value
        colorThree.style.backgroundColor = data.colors[2].hex.value
        colorFour.style.backgroundColor = data.colors[3].hex.value
        colorFive.style.backgroundColor = data.colors[4].hex.value

        colorHexOne.textContent = data.colors[0].hex.value
        colorHexTwo.textContent = data.colors[1].hex.value
        colorHexThree.textContent = data.colors[2].hex.value
        colorHexFour.textContent = data.colors[3].hex.value
        colorHexFive.textContent = data.colors[4].hex.value

        btn.addEventListener("click", function(){
            fetch(`https://www.thecolorapi.com/scheme?hex=${picker.value.slice(1)}&mode=${scheme.value}&count=5`)
            .then(results => results.json())
            .then(data => {
               console.log(data)
                colorOne.style.backgroundColor = data.colors[0].hex.value
                colorTwo.style.backgroundColor = data.colors[1].hex.value
                colorThree.style.backgroundColor = data.colors[2].hex.value
                colorFour.style.backgroundColor = data.colors[3].hex.value
                colorFive.style.backgroundColor = data.colors[4].hex.value
        
                colorHexOne.textContent = data.colors[0].hex.value
                colorHexTwo.textContent = data.colors[1].hex.value
                colorHexThree.textContent = data.colors[2].hex.value
                colorHexFour.textContent = data.colors[3].hex.value
                colorHexFive.textContent = data.colors[4].hex.value
            })
             
        })
    })
}


// clipboard functions

function clipboard() {
    colorHexOne.addEventListener("click", function(){
        setHexOneClip()
        copyFade()
    })
    colorOne.addEventListener("click", function(){
        setHexOneClip()
        copyFade()
    })

    colorHexTwo.addEventListener("click", function(){
        setHexTwoClip()
        copyFade()
    })
    colorTwo.addEventListener("click", function(){
        setHexTwoClip()
        copyFade()
    })
    colorHexThree.addEventListener("click", function(){
        setHexThreeClip()
        copyFade()
    })
    colorThree.addEventListener("click", function(){
        setHexThreeClip()
        copyFade()
    })

    colorHexFour.addEventListener("click", function(){
        setHexFourClip()
        copyFade()
    })
    colorFour.addEventListener("click", function(){
        setHexFourClip()
        copyFade()
    })
    colorHexFive.addEventListener("click", function(){
        setHexFiveClip()
        copyFade()
    })
    colorFive.addEventListener("click", function(){
        setHexFiveClip()
        copyFade()
    })


}
clipboard()

function setHexOneClip(){
    navigator.clipboard.writeText(colorHexOne.textContent)
}

function setHexTwoClip(){
    navigator.clipboard.writeText(colorHexTwo.textContent)
}

function setHexThreeClip(){
    navigator.clipboard.writeText(colorHexThree.textContent)
}

function setHexFourClip(){
    navigator.clipboard.writeText(colorHexFour.textContent)
}

function setHexFiveClip(){
    navigator.clipboard.writeText(colorHexFive.textContent)
}

function copyFade(){
    document.getElementById("copyConfirmation").style.display = "block"
    setTimeout(()=> document.getElementById("copyConfirmation").style.display = "none",1000)
    
}



function reset(){
    document.getElementById("copyConfirmation").removeAttribute('style')
}


getColor()







