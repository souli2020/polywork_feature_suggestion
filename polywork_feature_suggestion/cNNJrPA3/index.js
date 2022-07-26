const heartIcon = document.getElementById('heart')
const thumbIcon = document.getElementById('thumb')
const trash = document.querySelector('.trash')
const trashAll = document.querySelector('.trash-right')
  
   heart.addEventListener('click', ()=>{
     if(heart.classList.contains('ri-heart-add-line'))
     {
        heart.classList.remove('ri-heart-add-line')
        heart.classList.add('ri-heart-add-fill')
       }
     else  heart.classList.add('ri-heart-add-line')
     
    })

thumbIcon.addEventListener('click', ()=>{
   if(thumb.classList.contains('ri-thumb-up-line'))
   {
     thumb.classList.remove('ri-thumb-up-line')
     thumb.classList.add('ri-thumb-up-fill')
   }
   else  thumb.classList.add('ri-thumb-up-line')  
})
trash.addEventListener('click', (e)=>{
    document.querySelector('.user-div').remove()
})
trashAll.addEventListener('click', (e)=>{
    e.stopPropagation()
    document.querySelector('.main').innerHTML =`<div class="alert">You have no messages!</div>`
})