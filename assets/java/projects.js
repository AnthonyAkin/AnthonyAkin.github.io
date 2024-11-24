var checkboxes = document.getElementsByClassName("checkboxes");
var toggles = document.getElementsByClassName("entry");
var infos = document.getElementsByClassName("entry-info")
// console.log(checkboxes);

for (box of checkboxes) {
    box.addEventListener('click', function(e){
        clicked = true;
        toggleVisibility(e);
    })
}

function toggleVisibility(e) {
    // var check = e.target;
    // check.classList.toggle("hide");
    // console.log(e.target.checked)
    for (project of toggles) {
        // console.log(project.getAttribute("data-type"))
        if (project.getAttribute("data-type") == e.target.value) {
            if (e.target.checked) {
                project.style.display = "flex";
            }
            else {
                project.style.display = "none";
            }
            // project.classList.toggle("hide");
            // console.log(project);
        }
    }
}

function openInfo(x) {
    for (info of infos) {
        info.style.display = "none";
    }
    for (toggle of toggles) {
        toggle.classList.remove("active");
    }
    infos[x - 1].style.display = "block";
    event.currentTarget.classList.add("active");
    
}