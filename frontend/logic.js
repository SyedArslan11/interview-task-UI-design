const counters = document.querySelectorAll('.sub-data');


const countUp = () =>{
    counters.forEach((count)=>{
        // console.log(count)
        count.innerHTML = "0";
        
        const updateCounter = () => {
            const target = +count.getAttribute("data-target");
            const c = +count.innerHTML
            const increment = target / 100

            if( c < target ){
                count.innerHTML = `${Math.ceil(c + increment)}`

                setTimeout(updateCounter,7)
            }

        }

        updateCounter()
        
    })
}

