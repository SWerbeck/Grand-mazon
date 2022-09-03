
// counter code

let counter = 0

let granCount = document.getElementsByTagName("h2")[0]

function countUp(){
    counter++
    granCount.innerHTML = `Grandmas sold: ${counter}`
}

setInterval(countUp, 2000);


// button / selector code

let option = "GRANDMA"


let select = document.getElementsByTagName("select")[0]

function changeMessage(){
    option = select.value
    console.log(option)
}


select.addEventListener("change", changeMessage)


const message = document.getElementById("message")

order.addEventListener("click", function(){
    counter++
    granCount.innerHTML = `Grandmas sold ${counter}`
   
    message.innerHTML = `CONGRATS YOU BOUGHT A ${option}!!`
    setTimeout(() => {
        message.innerHTML = " "

    }, 4000);
})

