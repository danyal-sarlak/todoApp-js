

let inputElem = document.querySelector('#writetodo')
let mytasks = document.querySelector('.mytasks')
let titletask = document.querySelector('.task-title')
let todoapp = document.querySelector('.todoapp')
let clearAll = document.querySelector('.btnfour')
//let pointmodal = document.querySelector('.point-modal')


inputElem.addEventListener('keydown', function(e){
    let inputvalue = e.target.value
    if(e.keyCode == 13){
    titletask.style.display = 'none'
    let divElem = document.createElement('div')
    divElem.classList.add('divstyle')
    let line = document.createElement('div')
    line.classList.add('linstyle')
    let tasksdetail = document.createElement('div')
    tasksdetail.classList.add('itemstyle')
    let task = document.createElement('p')
    task.classList.add('taskstyle')
    task.innerHTML = inputvalue
   let checkicone = document.createElement('div')
   checkicone.classList.add('checkstyle')
   let iconpoint = document.createElement('img')
   iconpoint.src = './list.png'
   iconpoint.classList.add('pointstyle')
   tasksdetail.appendChild(checkicone)
   tasksdetail.appendChild(task)
   tasksdetail.appendChild(iconpoint)
   divElem.appendChild(tasksdetail)
   divElem.appendChild(line)
   mytasks.appendChild(divElem)

   iconpoint.addEventListener('click', function(){
    let pointmodal = document.createElement('div')
    pointmodal.classList.add('point-modal-style')
    let editElem = document.createElement('div')
    editElem.classList.add('editstyle')
    let imgedit = document.createElement('img')
    imgedit.src = './pen.png'
    imgedit.classList.add('imgedit')
    let pedit = document.createElement('p')
    pedit.innerHTML = 'Edit'
    let trash = document.createElement('div')
    trash.classList.add('trashstyle')
    let imgdelet = document.createElement('img')
    imgdelet.classList.add('imgdelet')
    imgdelet.src = './delete.png'
    let pdelet = document.createElement('p')
    pdelet.innerHTML = 'Delete'
    editElem.appendChild(imgedit)
    editElem.appendChild(pedit)
    trash.appendChild(imgdelet)
    trash.appendChild(pdelet)
    pointmodal.appendChild(editElem)
    pointmodal.appendChild(trash)
    if (!divElem.querySelector('.point-modal-style')) {
                divElem.appendChild(pointmodal);
            } else {
                let existingModal = divElem.querySelector('.point-modal-style');
                if (existingModal) {
                    divElem.removeChild(existingModal);
                }
            } 
   
   })
  clearAll.addEventListener('click', () => {
    divElem.style.display = 'none'
    titletask.style.display = 'block'
  })
    }
    


    
})

