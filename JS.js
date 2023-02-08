let displayGame = document.querySelector('.displayGame')
let width = displayGame.getBoundingClientRect().width
let height = displayGame.getBoundingClientRect().height

let snake = displayGame.querySelectorAll('.component')
let count1 = 0
let count2 = snake.length-1
let val = 'RIGHT'
let val2 = 'RIGHT' 
let a = 200

let setId = setInterval(() => {  runSnake() }, 100);

function runSnake(){

    if(val === 'RIGHT' & val2 != 'LEFT'){
        if(count1 < 0){count1=snake.length-1}
        if(count2 < 0){count2=snake.length-1}


        if(snake[count1].offsetTop != snake[count2].offsetTop & val2 === 'DOWN'){
            a = 0
            for(arr of snake){
                if(a < arr.offsetTop){
                    a = arr.offsetTop
                }
            }

        }else if(snake[count1].offsetTop != snake[count2].offsetTop & val2 === 'UP'){
            a = Number.MAX_SAFE_INTEGER
            for(arr of snake){
                if(a > arr.offsetTop){
                    a = arr.offsetTop
                }
            }
        }

        snake[count2].style.top = a + 'px'
        snake[count2].style.left = parseInt(snake[count1].offsetLeft) + 10 + 'px'

        if(Math.floor(width) <= parseInt(snake[count2].offsetLeft)){
            clearInterval(setId)
            return
        }
        count1--
        count2--
    
    }else if(val === 'LEFT' & val2 != 'RIGHT'){
        if(count1 < 0){count1=snake.length-1}
        if(count2 < 0){count2=snake.length-1}


        if(snake[count1].offsetTop != snake[count2].offsetTop & val2 === 'DOWN'){
            a = 0
            for(arr of snake){
                if(a < arr.offsetTop){
                    a = arr.offsetTop
                }
            }

        }else if(snake[count1].offsetTop != snake[count2].offsetTop & val2 === 'UP'){
            a = Number.MAX_SAFE_INTEGER
            for(arr of snake){
                if(a > arr.offsetTop){
                    a = arr.offsetTop
                }
            }
        }

        snake[count2].style.top = a + 'px'
        snake[count2].style.left = parseInt(snake[count1].offsetLeft) - 10 + 'px'
        if(0 > parseInt(snake[count2].offsetLeft)){
            clearInterval(setId)
            return
        }
        count1--
        count2--
    
    }else if(val === 'UP' & val2 != 'DOWN'){
        if(count1 < 0){count1=snake.length-1}
        if(count2 < 0){count2=snake.length-1}
     
        if(snake[count1].offsetLeft != snake[count2].offsetLeft & val2 === 'RIGHT'){
            a = 0
            for(arr of snake){
                if(a < arr.offsetLeft){
                    a = arr.offsetLeft
                }
            }
   
        }else if(snake[count1].offsetLeft != snake[count2].offsetLeft & val2 === 'LEFT'){
            a = Number.MAX_SAFE_INTEGER
            for(arr of snake){
                if(a > arr.offsetLeft){
                    a = arr.offsetLeft
                }
            }
        }

        snake[count2].style.left = a + 'px'
        snake[count2].style.top = parseInt(snake[count1].offsetTop) - 10 + 'px'
        if(0 >= parseInt(snake[count2].offsetTop)){
            clearInterval(setId)
            return
        }
        count1--
        count2--
    
    }else if(val === 'DOWN' & val2 != 'UP'){
        if(count1 < 0){count1=snake.length-1}
        if(count2 < 0){count2=snake.length-1}
     
        if(snake[count1].offsetLeft != snake[count2].offsetLeft & val2 === 'RIGHT'){
            a = 0
            for(arr of snake){
                if(a < arr.offsetLeft){
                    a = arr.offsetLeft
                }
            }

        }else if(snake[count1].offsetLeft != snake[count2].offsetLeft & val2 === 'LEFT'){
            a = Number.MAX_SAFE_INTEGER
            for(arr of snake){
                if(a > arr.offsetLeft){
                    a = arr.offsetLeft
                }
            }
        }

        snake[count2].style.left = a + 'px'
        snake[count2].style.top = parseInt(snake[count1].offsetTop) + 10 + 'px'
        if(height <= parseInt(snake[count2].offsetTop)){
            clearInterval(setId)
            return
        }
        count1--
        count2--
    }
}


let buttons = document.querySelector('.buttonGame').querySelectorAll('input')

for(let button of buttons){
    button.addEventListener('click', (e)=>{
        val2 = val 
        val = e.target.value
    })
}




