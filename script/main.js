const durationBtn = document.getElementById("duration")
//prompt

function clikHandler(){
    const neOuration = prompt("Enter Duration: ");
    const result = decument.createElement("p");
    result.innerHTML = "Duration entered is : " + newDuration
    result.id = "duration"

    divContainer.appendChild(result);
}
function clickHandler2 (){
    const newDuration = prompt("Enter Duration: ")
    const result = decument.getElementById("result");
    result.innerHTML = newDuration

}

durationBtn.addEventListener('click', clickHandler2);