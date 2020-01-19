let countDown;
let displayTime = document.querySelector('.display-time')

function timer(seconds){
    clearInterval(countDown)
    const now  = Date.now();
    const then = now + seconds * 1000
    displayTimeLeft(seconds)

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000)

        if(secondsLeft < 0){
            clearInterval(countDown)
            return;
        }

        displayTimeLeft(secondsLeft)
    }, 1000)
    
}


function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remSeconds = seconds % 60;
    let display = `${minutes}:${remSeconds}`
    if(remSeconds < 10){
        display = `${minutes}:0${remSeconds}`
    }
    
    displayTime.textContent = display;
   
}

document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins)
    timer(mins * 60);
    this.reset();
})