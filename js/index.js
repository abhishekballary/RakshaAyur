window.addEventListener("scroll",()=>{
    var scroll=document.querySelector(".scroll_top")
    scroll.classList.toggle("act",window.scrollY>100)
})
function scrolltoTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}



let btn=document.querySelector(".btn-colp")

class UI{
    nav_bar(){
        let menu=document.querySelector(".menu")
            let div=`<div class="remove">X</div>
            <ul class="navbar-nav "> 
            <li class="nav-item hm"><a href="index.html#abt" class="nav-link text-white">About us</a></li>
            <li class="nav-item"><a href="index.html#Bestsales" class="nav-link text-white">Best Arrival</a></li>
            <li class="nav-item"><a href="index.html#NewArrival" class="nav-link text-white">New Arrival</a></li>
            <li class="nav-item"><a href="index.html#HomeCare" class="nav-link text-white">Home Care</a></li>
            <li class="nav-item"><a href="index.html#HealthCare" class="nav-link text-white">Health Care</a></li>
            <li class="nav-item"><a href="index.html#FoodCare" class="nav-link text-white">Food Care</a></li>
            <li class="nav-item"><a href="index.html#PoojaStore" class="nav-link text-white">Pooja Store</a></li>
            <li class="nav-item"><a href="index.html#AgriCare" class="nav-link text-white">Agri Care</a></li>
    
        </ul>`
        menu.innerHTML=div
        ui.display_menu()        
    }
    display_menu(){
        let menu=document.querySelector(".menu")
        let remo=document.querySelector(".remove")
        remo.addEventListener("click",function(){
            if(menu.style.display=="block"){
        
                menu.style.display="none"
            }else{
                menu.style.display="block"
                menu.style.position="fixed"
                menu.style.zIndex="10"
                menu.style.margin="0"
            }
        })
    if(menu.style.display=="block"){  
        menu.style.display="none"
    }else{
        menu.style.display="block"
        menu.style.position="fixed"
        menu.style.zIndex="10"
        menu.style.margin="0"
    }

    }

}
let ui=new UI()
btn.addEventListener("click",ui.nav_bar)




