const search = document.querySelector("#search") ;
const buttons = document.querySelectorAll(".btn") ;
const boxes = document.querySelectorAll(".box") ;

const images = document.querySelectorAll("img") ;

const mode = document.createElement("div") ;
mode.id="model" ;
document.body.appendChild(mode) ;

const model = document.querySelector("#model") ;

images.forEach((image)=>{

    mode.classList.remove("color") ;
    const img = document.createElement("img") ;


    image.addEventListener("click",()=>{

            mode.classList.add("color") ;

            img.src = image.src ;
            img.classList.add("boopa") ;

            while (mode.firstChild){
                mode.removeChild(mode.firstChild) ;
            }

            mode.append(img) ;

    })


})



mode.addEventListener("click",(e)=>{
    mode.classList.remove("color") ;
})


// button class list add 

buttons.forEach((button)=>{

    button.classList.remove("active") ;

    button.addEventListener("click",(event)=>{

        event.preventDefault() ;
        setActiveBtn(event) ;

        const buttonFilter = event.target.dataset.filter ;

        boxes.forEach((box)=>{

            if(buttonFilter=="all"){
                box.style.display="block" ;
            }
            else 
            {
                const boxFilter = box.dataset.item ;

                if(buttonFilter==boxFilter){
                    box.style.display="block" ;
                }
                else
                {
                    box.style.display="none" ;
                }
            }
        })

    })


})


function setActiveBtn(event){

    buttons.forEach((button)=>{

        button.classList.remove("active") ;

    })

    event.target.classList.add("active") ;


}


// photo filtering 

search.addEventListener("keyup",(event)=>{

    const searchText = event.target.value.toLowerCase().trim() ;

    boxes.forEach((box)=>{

        const boxData = box.dataset.item ;

        if(boxData.includes(searchText)){
            box.style.display="block" ;
        }
        else
        {
            box.style.display="none" ;
        }

    })

    // search avtive btn  

    buttons.forEach((button)=>{

        button.classList.remove("active") ;

        const buttonData = button.dataset.filter ;

        if(searchText==buttonData){
            button.classList.add("active") ;
            
        }
        else
        {
            button.classList.remove("active") ;
        }
    })


})
