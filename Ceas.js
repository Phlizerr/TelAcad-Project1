let ceas = document.querySelector("#main");

//reglam afisarea ceasului
function myTime(){
const date = new Date();
let options = {hour: "2-digit", minute:"2-digit", second:"2-digit", hour12:"false"};
let dat = new Intl.DateTimeFormat("en-EU", options).format(date);
ceas.innerHTML = dat;
}
setInterval(myTime, 100);