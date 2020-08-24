document.addEventListener("click",function(e){
    if(e.target.classList.contains("order"))
    { let pp=document.querySelector(".pp")     
       let item=e.target.nextSibling.parentElement.nextElementSibling.firstElementChild.innerHTML
       let html=`<span class="pop_remove"> X</span>
       <form  onsubmit="return postToGoogle();" action="" target="_self">
       <div class="popup_cont">
       <div class="info">
         <h4 style=margin-bottom:0.4rem >Thank you for your intersted in: <span >${item}</span></h4>
         <p style=margin-bottom:0.3rem>Pranam! For us it is not just about selling a product but establishing a relationship with our customers. Please enter the below details and allow us to serve you better. We will contact you to ensure your order is processed and questions if any are answered</p>
       </div>
       <div class="orde_form">
         <input type="hidden" name="entry.884968384" id="order_prdct" value="${item}" class="qnty">
         <input type="text" name="entry.1966057375" id="quantity" class="qnty" placeholder="Quantity"><br>   
         <input type="number" name="entry.1623498990" class="num" id="mobile_no" required placeholder="Mobile No"><br>
         <input type="text" name="entry.323971090" class="qnty" id="otherprdct" placeholder="Any other product you are interested in?"><br><br>
         <span style="text-align:center">Lets use Swadeshi, Healthy and Natural Products</span>
       </div>
       <button type="submit" class="subm">Submit</button>
       </div>
       </form>`
       pp.innerHTML=html
       pp.style.display="block"
      
    }
    else if(e.target.classList.contains("pop_remove"))
    {  let pp=document.querySelector(".pp")
        pp.style.display="none"
    }
})