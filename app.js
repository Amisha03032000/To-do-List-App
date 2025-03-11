
let idForm = document.getElementById("itemForm");
let inputValue = document.querySelector("#itemInput");
let button = document.querySelector("button");
let itemList = document.querySelector("#itemList");

idForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let receivedText = inputValue.value;
    console.log("item=" + receivedText);


    addNewItem(receivedText);
});

function addNewItem(receivedText){

    let liElement = document.createElement("li");
    liElement.innerHTML=`${receivedText}<button class="remove-btn">X</button>`;

    //itemList= parentElement
    //console.log("length of children" +  itemList.children[0].innerText);
    // console.log(" last" + itemList.firstElementChild.innerText);
    // console.log(" last" + itemList.lastElementChild.innerText);
    // console.log(" next sibling " + itemList.nextElementSibling.innerText);
    // console.log(" previous = " + itemList.previousElementSibling.innerText);

    itemList.appendChild(liElement);
}


itemList.addEventListener("click", (e)=> {
    let getElement = e.target;

    if(getElement.tagName === "BUTTON"){
        console.log("pafren" + e.target.parentElement);
        itemList.removeChild(getElement.parentElement);
    }
    console.log("get =" + getElement.tagName);


    if(getElement.tagName === "LI"){
        let getListName = getElement.innerText;
        let response = prompt("Edit :", getListName);

        getElement.innerText =response.trim();
        //innercontnet get the ineer tecxt as well        
        //itemList.removeChild(getElement.parentElement);
        
        let removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.innerText = "X";
            getElement.appendChild(removeBtn);
    }

})





