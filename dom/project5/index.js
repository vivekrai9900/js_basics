//generate random colors

const randomColor= function(){
    const hex ='0123456789ABCDEF'

    let color='#';

    for(i=0;i<=5;i++){
        color += hex[Math.floor(Math.random()*16)];
    }

    return color;

}

// console.log(randomColor());

let interval;

document.getElementById('start').addEventListener('click',function(){
   interval=  setInterval(function(){
        document.querySelector('body').style.backgroundColor = randomColor();
    },2000)
})


document.getElementById('stop').addEventListener('click',function(){
    clearInterval(interval);
})