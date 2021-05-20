let input = document.querySelector(".task_input");
let ul = document.querySelector(".task_list");


let allTasks = localStorage.getItem("info");
allTasks = JSON.parse(allTasks);
if(allTasks != null){
    for(let i=0;i<allTasks.length;i++){
        let li = document.createElement("li");
        li.innerText = allTasks[i].info ;
        ul.appendChild(li);
        li.addEventListener("dblclick", deleteTask)
    }
}
    

function deleteTask(e){

    e.currentTarget.remove();
    let info = localStorage.getItem("info");
    info = JSON.parse(info);
    info = info.filter(function(data){
        return (e.currentTarget.innerText != data.info);
    });
    localStorage.setItem("info", JSON.stringify(info)); 
}

function typeEvent(e){

    if(e.key == "ArrowUp" || e.key == "ArrowDown"){
        let task = input.value ;
        if(!task){
            alert(" Added an empty string !!");
            return;
        }
        input.value = "";
        let li = document.createElement("li");
        // let id = uid() ;
        li.innerText = task;
        if(e.key == "ArrowUp"){
            ul.insertBefore(li,ul.firstChild);
        }
        else{
            ul.appendChild(li); // adds at the end 
        }

        let info = localStorage.getItem("info");
        if(info == null){
            let data = [{"info": task}];
            localStorage.setItem("info", JSON.stringify(data));
        }else{
            let data = JSON.parse(info);
            data.push({"info": task});
            localStorage.setItem("info",JSON.stringify(data));
        
            li.addEventListener("dblclick", deleteTask);
        }
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