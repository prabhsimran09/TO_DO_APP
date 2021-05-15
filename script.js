let input = document.querySelector(".task_input");
let ul = document.querySelector(".task_list");

function deleteTask(e){
    e.currentTarget.remove();
}

function typeEvent(e){
    if(e.key == "ArrowUp" || e.key == "ArrowDown"){
        let task = input.value ;
        if(!task){
            alert(" Added an enpty string !!");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        li.innerText = task;
        if(e.key == "ArrowUp"){
            ul.insertBefore(li,ul.firstChild);
        }
        else{
            ul.appendChild(li); // adds at the end 
        }
        li.addEventListener("dblclick", deleteTask);
    };
    
}
input.addEventListener("keydown",typeEvent);

// input.addEventListener("keyup",functtion(e));
// input.addEventListener("keypress",function(e){
//     console.log(e);
//     if(e.key == "Enter"){
//         let task = input.value ;
//         if(!task){
//             alert(" Added an enpty string !!");
//             return;
//         }
//         input.value = "";
//         let li = document.createElement("li");
//         li.innerText = task;
//         ul.appendChild(li); // adds at the end 
//        // ul.insertBefore(li,ul.firstChild);
//         li.addEventListener("dblclick", deleteTask);
//     };
// })