const a = document.getElementById("h1")
const b = document.getElementById("one")
function display(obj) {
  a.append(obj.innerText);
}
function calculate() {
  if (a.innerText=="") {
    a.innerText = "" ;
  }
  else {
    a.innerText = eval(a.innerText)
  }
}

function allClear() {
  a.innerText = ""
}

function delet() {
  if (a.innerText=="") {
    a.innerText==""
  }
  else {
    a.innerText = a.innerText.slice(0,-1)
  }
}

list1 = [1,2,3,4]
list2 = ["hi", "hello", "yoo"]
const name1 = "hajia"

const greet = new Promise((resolve,reject)=>{
  setTimeOut(()=>{
    resolve("success");
  }, 2000)

  setTimeOut(()=>{
    reject("failed");
  },4000)
})

greet.then(response=>{
  console.log(response);
}).catch(error=>{
  console.log(error);
})
