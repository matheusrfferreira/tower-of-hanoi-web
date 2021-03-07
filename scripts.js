window.addEventListener("resize",() => window.location.reload())

let currentDisk = 0;

let disco1 = window.document.getElementById("disco1")
let disco1Tamanho = disco1.clientWidth

let disco2 = window.document.getElementById("disco2")
let disco2Tamanho = disco2.clientWidth

let disco3 = window.document.getElementById("disco3")
let disco3Tamanho = disco3.clientWidth

let pilhaInicial = window.document.getElementById("pilhaInicial")
let pilhaDoMeio = window.document.getElementById("pilhaDoMeio")
let pilhaFinal = window.document.getElementById("pilhaFinal")


box2 = window.document.getElementById("box2")

rods = [pilhaInicial, pilhaDoMeio, pilhaFinal]
disks = [disco1, disco2, disco3]
sizeOfTheDisks = [disco1Tamanho, disco2Tamanho, disco3Tamanho]

 function addButton() {
   for (let i = 0; i < box2.children.length; i++) {
     rods[i].addEventListener("click", (e) => {
       play(e)
     })
   }
 }
 addButton()

 
function play(e){
    
    
    diskOrRodClicked = e.target 
    console.log(diskOrRodClicked)
    
    if(currentDisk === 0){

        for(let i = 0; i < disks.length; i++){    
            if (diskOrRodClicked === disks[i]){
                currentDisk = diskOrRodClicked.parentElement.lastElementChild
                diskOrRodClicked.parentElement.lastElementChild.remove()
                return
            }
        }
        for(let i = 0; i < rods.length; i++){    
            if ((diskOrRodClicked === rods[i]) && (rods[i].childElementCount > 0)){
                currentDisk = diskOrRodClicked.lastElementChild
                diskOrRodClicked.lastElementChild.remove()
                return
            }
        }
        
    }
    
    if(currentDisk !== 0){
        
        for(let i = 0; i < disks.length; i++){    
            if (diskOrRodClicked === disks[i]){
                diskOrRodClicked = diskOrRodClicked.parentElement
            }
        }
        
        if (diskOrRodClicked.childElementCount > 0) {
            
            for(let i = 0; i < disks.length; i++){
                
                if (currentDisk == disks[i]){
                
                    if (sizeOfTheDisks[i] < diskOrRodClicked.lastElementChild.clientWidth){
                        diskOrRodClicked.appendChild(currentDisk);
                        currentDisk = 0;
                        if(pilhaFinal.childElementCount === disks.length){
                            display()
                        }
                        return;
                    }
                }
            }
            
        }
      
        else {
            diskOrRodClicked.appendChild(currentDisk);
            currentDisk = 0;
        }
    }
}

let modal = document.getElementById("myModal");

let playAgain = document.getElementById("playAgain");
playAgain.onclick = () => {document.location.reload()}

function display(){
    modal.style.display = 'block';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

