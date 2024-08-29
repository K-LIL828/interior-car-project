let change_img=document.getElementsByClassName("change_img")
const images=["intnoir.webp","intgris.webp","introuge.webp","intbleugra.webp","intbigrisnoir.webp","intbirougenoir.webp","Sièges Sport Plus adaptatifs (18 positions, électriques) avec Pack mémoire.webp","siegenoirbasic.webp","siege baquets integraux.webp","Design sans titre (1).png"]
let target_img=document.getElementById("target_img")
let choice1=document.getElementById("choice1")
let choice2=document.getElementById("choice2")
let home=document.getElementById("HOME")

for (let index = 0; index < images.length; index++) {
    change_img[index].addEventListener("click",function(){
        target_img.src=images[index]
        if(index<=5){
            choice1.textContent=change_img[index].textContent
        }
        else if(index>5 && index<9){
            choice2.textContent=change_img[index].textContent
        }
        else{
            choice1.textContent=""
            choice2.textContent=null
        }
        
    })
    
}
home.addEventListener("click",function(){
    choice1.textContent=""
    choice2.textContent=null
    target_img.src=images[9]
})
