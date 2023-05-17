const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateTime () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm =  "AM";

    h = h<10 ? h = "0" +h : h;
    m = m<10 ? m = "0" +m : m;
    s = h<10 ? s = "0" +s : s;
    if(h > 12){
        h = h-12;
        ampm = "PM";
    }
    hourEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;
    ampm.textContent = ampm;
    setTimeout(()=> {
        updateTime()
    },1000)
}
updateTime();

