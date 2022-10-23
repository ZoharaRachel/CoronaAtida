const cust = require("./models/Customers")
const corona = require("./models/Corona")

function GetUsers(){
    return users;
}

function GetTasks(){
    return tasks;
}

function GetTaskByIdUser(id){
    let arr =[];
    for(i=0;i<tasks.length;i++){
        if(tasks[i].idUser==id)
            arr.push(tasks[i]);
    }
    return arr;
}

function AddUser(u){
    users.push(u);
}

function AddTask(t){
    t.id=tasks.length;
    t.status=false;
    tasks.push(t);
}

function DeleteTask(id){
    for (let i=0;i<tasks.length &&tasks[i].id!=id;i++)
        tasks.splice(i,1);
}

function TaskWithMaxLevel(){
    let max=0,imax=0;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].level>max)
        {
            max=tasks[i].level;
            imax=i;
        }
    }
    return tasks[imax].title;
}

function TaskWithEarlyDAte(){
    var d = new Date(2000,1,1);
    let imax =0;
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].status == false){
            if(tasks[i].date>d){
                d=tasks[i].date;
                imax=i;
            }
        }
    }
    return tasks[imax].title;
}

function TasksTrue(){
    var count=0;
    // tasks[3].status = true;
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].status == true)
            count++;
    }
    return {count};
}

function TasksFalse(){
    var count=0;
    for(let i=0; i<tasks.length; i++){
        if(tasks[i].status == false)
            count++;
    }
    return {count};
}

function UpdateTask(id){
    for(let i=0; i<tasks.length; i++) {
        if(tasks[i].id==id){
            if(tasks[i].status==true){
                tasks[i].status=false;
                break;
            }
            else
                if(tasks[i].status==false){
                    tasks[i].status=true;
                    break;
            }
        }
    }
}

function DeleteTaskTrue(){
    for (let i=0;i<tasks.length &&tasks[i].status==true;i++)
        tasks.splice(i,1);
}

function login(userName, password){
    for (let i=0; i<users.length;i++){
        if(users[i].name==userName&&users[i].password==password)
            return users[i];
    }
    return null;
}

function SortLevel(id){
    let arr=[];
    for (let i=0;i<tasks.length;i++){
        if(tasks[i].idUser==id)
            arr.push(tasks[i]);
    }
    const sortArr=arr.sort((t1,t2)=> t1.level-t2.level);
    return sortArr;
}

function SortDate(id){
    let arr=[];
    for (let i=0;i<tasks.length;i++){
        if(tasks[i].idUser==id)
            arr.push(tasks[i]);
    }
    const sortArr=arr.sort((t1,t2)=> t1.date-t2.date);
    return sortArr;
}
module.exports={GetUsers,GetTasks,GetTaskByIdUser,AddUser,AddTask,DeleteTask,TaskWithMaxLevel,
                TaskWithEarlyDAte,TasksTrue,TasksFalse,UpdateTask,DeleteTaskTrue,login,SortLevel,
                SortDate}