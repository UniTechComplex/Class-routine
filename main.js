
window.addEventListener("load", () => {
  clock();

  function clock() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    const hourTime = hour > 12 ? hour - 12 : hour;
    const ampm = hour < 12 ? "AM" : "PM";

    const monthList = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();
    const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

    const date = `${dayOfWeek}, ${monthList[month]} ${day}, ${year}`;
    const time = `${hourTime}:${minute}:${second} ${ampm}`;
    const date2 = `${date}`
    const time2 = `Time ${time}`;

    document.getElementById("date").innerHTML = date2;
    document.getElementById("time").innerHTML =time2;
    
    
}
 setInterval(()=>  {clock()},1000)
 
 const note =document.getElementById('note');
 const table =document.getElementById('table')
 note.style.display='none';
 

const today = new Date();

const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });
//subject data
let s1 =document.querySelector('#s1'); 
let s2 =document.querySelector('#s2'); 
let s3 =document.querySelector('#s3');
let s4 =document.querySelector('#s4');
let s5 =document.querySelector('#s5');
let s6 =document.querySelector('#s6');

//subject name 
const ban ='Bangla';
const eng ='English';
const ict= 'ICT';
const phy ='Physics';
const che ='Chemistry';
const bio = 'Biology';
const math ='H.Math';

//Note if college is off
 


//condition 
if (dayOfWeek==='Sunday') {
  s1.innerHTML=ban;
  s2.innerHTML=che;
  s3.innerHTML=phy;
  s4.innerHTML=bio;
  s5.innerHTML=math;
  s6.innerHTML='';
  console.log(dayOfWeek);
  
}
else if (dayOfWeek==='Monday') {
   s1.innerHTML=ict;
  s2.innerHTML=che;
  s3.innerHTML=eng;
  s4.innerHTML=bio;
  s5.innerHTML=math;
  s6.innerHTML='';
  console.log(dayOfWeek);
 
}
else if (dayOfWeek==='Tuseday') {
   s1.innerHTML=ict;
  s2.innerHTML=ban;
  s3.innerHTML=che;
  s4.innerHTML=bio;
  s5.innerHTML=phy;
  s6.innerHTML='';
  console.log(dayOfWeek);
 
} else if (dayOfWeek==='Wednesday') {
   s1.innerHTML=eng;
  s2.innerHTML=bio;
  s3.innerHTML=math;
  s4.innerHTML=phy;
  s5.innerHTML=ict;
  s6.innerHTML=che;
  console.log(dayOfWeek);
 
} else if (dayOfWeek==='Thursday') {
   s1.innerHTML=ban;
  s2.innerHTML=phy;
  s3.innerHTML=eng;
  s4.innerHTML=math;
  s5.innerHTML=che;
  s6.innerHTML=bio;
  console.log(dayOfWeek);
 

}
else {
 table.style.display='none';
 note.style.display='flex';
}
});
