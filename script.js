// here first property is that we ahve to create a 
// dynamic dopdown bar where we can 
// // here we need to call the to do head
// let todohead=document.querySelectorAll(".todohead");
// // Here we need to add the event listner
// todohead.forEach(e=>{
//     e.addEventListener("click",function(ele){
//         // Here we will try to add the container-body
//         let containerBody=document.getElementById("body");
//         containerBody.classList.toggle("display-off");
//     })
// })// 
// Here we need to find the user input in the form
 let addbtn=document.querySelector(".add-btn");
 addbtn.addEventListener("click",function(){
    let heroFront=document.querySelector(".hero-front");
    heroFront.classList.toggle("display-off");
    let popUp=document.querySelector(".form_popUp");
    popUp.classList.toggle("display-off");
 })
 let cancelbtn=document.querySelector("#cancel");
 cancelbtn.addEventListener("click",function(){
    let heroFront=document.querySelector(".hero-front");
    heroFront.classList.toggle("display-off");
    let popUp=document.querySelector(".form_popUp");
    popUp.classList.toggle("display-off");
 })
 // Now here we need a object
 let allList={};
 let idx=0;
 let todoCount=0
 let startedCount=0;
 let allListofEvent=[];
 /// here we need elements
 // here we need to add the form here
 let form=document.querySelector(".AddForm");
 form.addEventListener("submit",function(e){
    // here we have to catch the data
    e.preventDefault();
    // Here we hav to catch the data
    let name=form.NameEvent.value;
    console.log(name);
    let dueDate=form.duedate.value;
    console.log(dueDate);
    let priority=form.priority.value;
    console.log(priority);
    let state=form.state.value;
    /// These should be added in the object also
    // allList.push({"eventname":name ,"duedate":dueDate,"priority":priority});
    // allListofEvent.push(allList);
    allList.eventName=name;
    allList.dueDate=dueDate;
    allList.priority=priority;
    allList.state=state;
    allListofEvent[idx]=allList;
    if(state=="todo-state"){
        let divAdd=document.createElement("div");
        divAdd.className="elementSeen";
        divAdd.innerHTML=`<div id="row${idx}" class="elementSeen">
        <p class="nameofevent">${name}</p>
        <p class="duedate"> ${dueDate} </p>
        <div class="editDelete">
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">delete</span>
        </div>
    </div>`
    idx++;
    todoCount++;
    let todoBadgeID=document.querySelector("#todo-badgeID");
    todoBadgeID.innerHTML=todoCount;
    // Here we hav
        let container=document.querySelector(".AddElement");
            container.appendChild(divAdd);
    }
    else if(state=="started-state"){
        let divAdd=document.createElement("div");
        divAdd.className="elementSeen";
        divAdd.innerHTML=`<div id="row${idx}" class="elementSeen">
        <p class="nameofevent">${name}</p>
        <p class="duedate"> ${dueDate} </p>
        <div class="editDelete">
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">delete</span>
        </div>
    </div>`
    idx++;
    startedCount++;
    let todoBadgeID=document.querySelector("#todo-badgeID");
    todoBadgeID.innerHTML=todoCount;
    // Here we hav
        let container=document.querySelector("#addelStarted");
            container.appendChild(divAdd);
    }
    else{
        //   addelComplted
        let divAdd=document.createElement("div");
        divAdd.className="elementSeen";
        divAdd.innerHTML=`<div id="row${idx}" class="elementSeen">
        <p class="nameofevent">${name}</p>
        <p class="duedate"> ${dueDate} </p>
        <div class="editDelete">
            <span class="material-symbols-outlined">edit</span>
            <span class="material-symbols-outlined">delete</span>
        </div>
    </div>`
    idx++;
    startedCount++;
    let todoBadgeID=document.querySelector("#todo-badgeID");
    todoBadgeID.innerHTML=todoCount;
    // Here we hav
        let container=document.querySelector("#addelComplted");
            container.appendChild(divAdd);
    }
    /// Here now we need to add the this element in to the div
 })