let form = document.querySelector("#form");

document.querySelector("#submit").addEventListener("click", (e)=>{
    
    let val = ""
    let users  = form.querySelectorAll(".user")
   let random = Math.floor(Math.random() * (users.length))
    users.forEach((item, index) => {
       if( (index) === random ){
          val = item.value
       }

    })
    
 document.querySelector("#show").innerHTML  = val

})

document.querySelector("#add").addEventListener("click", (e)=>{
        let newInput = document.createElement("input")
       newInput.size="9"
        newInput.placeholder = "Username..."
        newInput.classList.add("user")
        form.appendChild(newInput)
    })