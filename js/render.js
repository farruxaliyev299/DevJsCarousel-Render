let container = document.querySelector("#how-works .container");

let renderBtn = document.querySelector(".render");

let renderObj = {
    image: `<img src="./assets/images/work-items/hw-create.svg" width="100%" class="desktop-img">`,
    category: "Test category",
    header: "Slightly long header",
    description: "Very very much bigger and seemingly longer description text"
}

renderBtn.addEventListener("click",(e)=>{
    let renderItem = 
    `<div class="how-works-item row">
        <div class="left col-lg-6 col-12">
            ${renderObj.image}
        </div>
        <div class="right col-lg-6 col-12 d-flex">
            <div class="text-content">
                <h3 class="orange">${renderObj.category}</h3>
                <h2>${renderObj.header}</h2>
                <h4>
                    ${renderObj.description}
                </h4>
            </div>
        </div>
    </div>`

    container.innerHTML += renderItem;
})

