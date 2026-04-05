const button = document.getElementById('side-barbutton');
const fadeout = document.getElementById('fadeout');
let flag = 0;

button.addEventListener('click', () => {
    if (flag == 0) {
        fadeout.style.display = "Block";
        document.body.classList.add("stopscroll");
        flag = 1;
    }
    else {
        fadeout.style.display = "none";
        document.body.classList.remove("stopscroll");
        flag = 0;
    }
})
