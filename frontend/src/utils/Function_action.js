const OpenHandel = () => {
    let Nav = document.querySelector("nav");
    let OpenBtn = document.querySelector("nav .head span.open");
    let CloseBtn = document.querySelector("nav .head span.close");

    Nav.style.height = "330px";
    OpenBtn.style.display = "none";
    CloseBtn.style.display = "block";
}
const CloseHandel = () => {
    let Nav = document.querySelector("nav");
    let OpenBtn = document.querySelector("nav .head span.open");
    let CloseBtn = document.querySelector("nav .head span.close");

    Nav.style.height = "99px";
    CloseBtn.style.display = "none";
    OpenBtn.style.display = "flex";
}

const ChoseeHandel = (number, id) => {
    let H4 = document.querySelectorAll("section h4");
    H4.forEach((element) => {
        if (id === element.dataset.id) {
            element.classList.remove("active");
            if (+element.dataset.name === number) {
                element.classList.add("active");
            }
        }
    });
}

const ChickHandel = (indexx) => {
    let ChosseBtn = document.querySelectorAll("#check");
    let H4 = document.querySelectorAll("section h4");
    console.log(ChosseBtn[indexx]);
    H4.forEach((ele) => {
        if (
            ele.dataset.id === ChosseBtn[indexx].dataset.id &&
            ele.dataset.name === ChosseBtn[indexx].dataset.name &&
            ele.classList == "active"
        ) {
            ele.style.background = "#88dfbf";
        } else if (
            ele.dataset.id === ChosseBtn[indexx].dataset.id &&
            ele.dataset.name === ChosseBtn[indexx].dataset.name) {
            ele.style.background = "#c2efee";
        }
        if (
            ele.dataset.id === ChosseBtn[indexx].dataset.id &&
            ele.classList == "active" &&
            ele.dataset.name != ChosseBtn[indexx].dataset.name &&
            ele.style.background != "#efc2c2"
        ) {
            ele.style.background = "#efc2c2";
        }
        ChosseBtn[indexx].style.display = "none"
    });
}

export { OpenHandel, CloseHandel, ChoseeHandel, ChickHandel }