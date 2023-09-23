// function mul(){
//     var n1=document.getElementById("number1").value;
//     var n2=document.getElementById("number2").value;
//     if(n1==="" || n2===""){
//         document.getElementById("output").innerText="Enter both numbers to check";
//     }
//     else{
//         var rev=0;
//         rev=n1*n2;
//     document.getElementById("output").innerText=rev;
//     }
    
// }
// function div(){
//     var n1=document.getElementById("number1").value;
//     var n2=document.getElementById("number2").value;
//     if(n1==="" || n2===""){
//         document.getElementById("output").innerText="Enter both numbers to check";
//     }
//     else{
//         var rev=0;
//         rev=n1/n2;
//     document.getElementById("output").innerText=rev;
//     }
    
// }
function dat() {
    var date = new Date();
    var day = date.getDate();
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var formattedDate = day + " " + month + " " + year;
    document.getElementById("date").innerText = formattedDate;
}
function tim() {
    var date = new Date();
    var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dayOfWeek = daysOfWeek[date.getDay()];
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours().toString().padStart(2, "0");
    var minutes = date.getMinutes().toString().padStart(2, "0");
    var seconds = date.getSeconds().toString().padStart(2, "0");
    var timeZone ="GMT+0530(Indian Standard Time)";
    var formattedDate = `${dayOfWeek} ${month} ${day} ${year} ${hours}:${minutes}:${seconds} ${timeZone}`;
    document.getElementById("time").innerText = formattedDate;
}

//console.log(tim());

