const dipperImage = document.querySelector("img");

dipperImage.onclick = () => {
    const mySrc = dipperImage.getAttribute("src");
    if (mySrc === "images/dipper.jpg") {
        dipperImage.setAttribute("src", "images/dipper.png");
        dipperImage.setAttribute("width", "700");
    } else {
        dipperImage.setAttribute("src", "images/dipper.jpg");
        dipperImage.setAttribute("width", "400");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome, ${myName}! I'm Dipper Pines.`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome back, ${storedName}! I'm Dipper Pines.`;
}

myButton.onclick = () => {
    setUserName();
};
