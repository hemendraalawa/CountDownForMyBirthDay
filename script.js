let endDate = "07 AUGUST 2024 12:00 AM"; // ye enddate hai

document.getElementById("enddate").innerText = endDate; //yha se hm document ka inner text change kr sakte hai yani date ko change kr sakte hai

let inputs = document.querySelectorAll("input"); // yha par hmne jitne bhi input tags the unhe select kr liya

function clock() {
  let end = new Date(endDate); // ye hmari end date store hui hai
  let now = new Date(); // yha hmari currunt date hai jo system me dikh rhi hai
  let diff = (end - now) / 1000; // output ms me hai isliye miliseconds ko seconds me badlne ke liye 1000 se devide kiya hai
  // console.log(diff);
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); // ms ko days me badla
  inputs[1].value = Math.floor((diff / 3600) % 24); // ab jitne din bache hai uske bad kitne hours remind hai unke ms ko hours me badlne ke liye
  inputs[2].value = Math.floor((diff / 60) % 60); // ab jitne hours ke bachne bad kitne minutes bche hai
  inputs[3].value = Math.floor(diff % 60); //ab jitne minutes ke bachne bad kitne second bche hai
}

clock(); // function instant call

// 1 day = 24hrs
// 1 hr = 60 mins
// 60 mins = 3600 sec

// is function ka kam har ek second me clock() name ke function ko run krna hai taki time change ho to display par dikhe refresh krne ki jarurat na ho
setInterval(function () {
  clock();
}, 1000);
