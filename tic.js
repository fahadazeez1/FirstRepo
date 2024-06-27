const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8]
]


let boxes = document.querySelectorAll(".box")
const checkwinner=()=>{
  for( let pattern of win){
   let p1=boxes[pattern[0]].innerText
   let p2=boxes[pattern[1]].innerText
   let p3=boxes[pattern[2]].innerText
  if(p1!="" && p2 !="" && p3 !="")  {
    
    if(p1==p2 && p2==p3){
      i=0
      document.querySelector(".heading").innerText=`the player ${p1} wins`
      
      
      boxes.forEach((box)=>{
        box.disabled=true
      })
      
 
      
    }
    
      
    }
  }
  } 

let i =0
let turno = true

let btn = document.querySelector(".btn")
boxes.forEach((box) =>
{ 
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O"
      turno = false
      document.querySelector(".heading").innerText="Turn X"
    i=i+1
    }

    else {
      box.innerText = "X"
      turno = true  
     i=i+1
      document.querySelector(".heading").innerText="Turn O"
    } 
    box.disabled=true
    checkwinner()
    
    if (i==9) {
      document.querySelector(".heading").innerText="its Draw !!"
    }
  })
  
})

const ngame =()=>{
  boxes.forEach((box)=>{
    box.innerText=""
    box.disabled=false
    i=0
    document.querySelector(".heading").innerText="lets play the game"
  })
}
let bt =document.querySelector(".rst")
bt.addEventListener("click",()=>{
 ngame()
})
