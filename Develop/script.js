textArea = $("textarea")
let day = moment().format("MMMM Do, YYYY");

for (let i = 0; i < textArea.length; i++) {
    let currentHour = moment().format("HH");
    if (currentHour > i + 9) {
        $(textArea[i]).addClass("past")
    }else if(currentHour < i + 9){
        $(textArea[i]).addClass("future")
    }else{
        $(textArea[i]).addClass("present")
    }
}
$("#current-time").text("Today is " + day)
const save9 = $("#9");
const save10 = $("#10");
const save11 = $("#11");
const save12 = $("#12");
const save13 = $("#13");
const save14 = $("#14");
const save15 = $("#15");
const save16 = $("#16");
const save17 = $("#17");
let toDo = {}

renderLastTask();

function renderLastTask(){ 
    let task = JSON.parse(localStorage.getItem("to-do"))
    for (let time in task) {
        $("#" + time).siblings("textarea").val(task[time])

    }
}

save9.on("click", function(event){
    event.preventDefault();
    let time = 9
    let task = $(textArea[0]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save10.on("click", function(event){
    event.preventDefault();
    let time = 10
    let task = $(textArea[1]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save11.on("click", function(event){
    event.preventDefault();
    let time = 11
    let task = $(textArea[2]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save12.on("click", function(event){
    event.preventDefault();
    let time = 12
    let task = $(textArea[3]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save13.on("click", function(event){
    event.preventDefault();
    let time = 13
    let task = $(textArea[4]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save14.on("click", function(event){
    event.preventDefault();
    let time = 14
    let task = $(textArea[5]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save15.on("click", function(event){
    event.preventDefault();
    let time = 15
    let task = $(textArea[6]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save16.on("click", function(event){
    event.preventDefault();
    let time = 16
    let task = $(textArea[7]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})
save17.on("click", function(event){
    event.preventDefault();
    let time = 17
    let task = $(textArea[8]).val()
    toDo[time] = task
    localStorage.setItem("to-do", JSON.stringify(toDo))
})



