var sideBar = document.getElementById("SideBar");

function hamBurger() {
    event.currentTarget.classList.toggle("change");
    sideBar.classList.toggle("change");
    // console.log(screen.orientation)
}


document.addEventListener('DOMContentLoaded', () => {
    // console.log(screen.orientation); 
    screen.orientation.addEventListener("change", (event) => {
        // console.log("Triggered");
        var ham = document.getElementById("HamButton");
        ham.classList.remove("change");
        // console.log(ham)
        sideBar.classList.remove("change") ;
    })
})