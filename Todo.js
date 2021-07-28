

// document.addEventListener('ready', ()=>{
    M.AutoInit()
    // ele6.className = 'task-time timepicker'
    // ele12.setAttribute('class', 'task-time timepicker')

// })


let clear = document.querySelector('#clear')
let remove = document.querySelector('#remove')
var add = document.querySelector('#add')
let input = document.querySelector('#todo-item')
let tasks = document.querySelector('#task-list')
let title = document.querySelector('#title')
let date = document.querySelector('#date')
let taskCount = document.querySelector('#task-count')


// document.querySelector()


add.addEventListener('click', (event)=>{

    let ele6 = document.createElement('input')
    ele6.placeholder = 'starting'
    ele6.className = 'task-time timepicker'

    let ele7 = document.createElement('div')
    ele7.className = 'col s2 center'

    let ele8 = document.createElement('p')
    ele8.textContent = 'to'


    let ele9 = document.createElement('div')
    ele9.className = 'row my-row'

    let ele10 = document.createElement('div')
    ele10.className = 'col s5'

    let ele11 = document.createElement('div')
    ele11.className = 'col s5'

    let ele12 = document.createElement('input')
    ele12.placeholder = 'ending'
    ele12.setAttribute('class', 'task-time timepicker')
    // ele12.className = 'task-time datepicker'
    //////////////////////////////////////////////////////////
    ele1 = document.createElement('input')
    ele1.type = 'checkbox'
    ele1.id = 'task'
    ele1.placeholder = 'Enter your task'
    // console.log({ele1})

    let ele2 = document.createElement('span')
    ele2.textContent = input.value
    ele2.id = 'task-span'

    let ele3 = document.createElement('label')
    ele2.for = 'task'

    ele4 = document.createElement('li')

    // ele4.setAttribute('class', 'my-section orange lighten-2')
    // ele4.className = 'my-section white z-depth-1 '

    // let ele5 = document.createElement('p')
    // ele5.id = "task-time"
    // ele5.textContent = '14:30 - 15:30'

    

    if(input.value == ''){
    
        input.placeholder = 'No task input'
        // input.placeholder.style.color = 'red'
        console.log({input})
        
        setTimeout(() => {
            input.placeholder = 'Enter your task'
        }, 2000);
        // clearTimeout()
        
    }else{
        

        tasks.appendChild(ele4)
        ele4.appendChild(ele3)
        ele3.appendChild(ele1)
        ele3.appendChild(ele2)
        //////////////////////
        ele4.appendChild(ele9)
        //////////////////////
        ele9.appendChild(ele10)
        ele9.appendChild(ele7)
        ele9.appendChild(ele11)
        ///////////////////////
        ele10.appendChild(ele6)
        ele7.appendChild(ele8)
        ele11.appendChild(ele12)

        setTimeout(() => {
            ele4.className = ' my-section white z-depth-1 visual'
        }, 20);

        
        input.value = ''
        
    }

    var dynCount
    if(tasks.children.length <= 1){
        dynCount = ' Task'
    }else{
        dynCount = ' Tasks'
    }
    taskCount.textContent = tasks.children.length + dynCount

    if (tasks.children.length == 0) {
        taskCount.textContent = 'No Task'
    }


    /******* A counter for undone tasks *******/
    // let li = tasks.children
    // for (let index = 0; index < tasks.children.length; index++) {
    //     let x = li[index].children[0].children[0].checked
    //     console.log(tasks.childElementCount -! x)
    //     console.count()

    // }

    /*** A place in the page to place the undone counts **********/
    // taskCount.textContent =  taskCount.textContent + 'hello'
    M.AutoInit()

})


clear.addEventListener('click', (event)=>{

    tasks.textContent = ''
    taskCount.textContent = 'No Task'
})

remove.addEventListener('click', ()=>{
    let li = tasks.children

        for (let index = 0; index < li.length; index++) {
            while (li[index] && li[index].children[0].children[0].checked) {  
                tasks.removeChild(li[index])
            }    
        }

    var dynCount
    if(tasks.children.length == 1){
        dynCount = ' Task'
    }
    else if(tasks.children.length == 0){
        
        dynCount = ' No Task'
    }
    else{
        dynCount = ' Tasks'
    }
    
    taskCount.textContent = tasks.children.length - 1 + 1 + dynCount

    if (tasks.children.length == 0) {
        taskCount.textContent = 'No Task'
    }

})

let today = new Date().toLocaleDateString('en-gb', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
})
date.textContent = today
date.style.fontSize = 'large'
console.log({today})
// console.log(today.getDay() , today.getDate() , today.getMonth() , today.getFullYear())


