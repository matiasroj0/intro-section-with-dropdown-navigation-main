const features = document.querySelector(".features");
const company = document.querySelector(".company");

const featuresList = document.querySelector(".dropdown-features-list");
const companyList = document.querySelector(".dropdown-company-list");

const featuresArrowUp = document.querySelector(".feature-arrow-up");
const featuresArrowDown = document.querySelector(".feature-arrow-down");
const companyArrowUp = document.querySelector(".company-arrow-up");
const companyArrowDown = document.querySelector(".company-arrow-down");

const imgMobile = document.querySelector(".hero-img-mobile");


if (window.matchMedia("(max-width: 800px)").matches) {
    sideNavElements();
    featuresList.style.display = "none";
    companyList.style.display = "none";
}

function sideNavElements(){
    features.addEventListener("click", ()=>{
        if(featuresList.style.display == "none") {
            featuresList.style.display = "initial";
            featuresArrowDown.classList.add("hidden")
            featuresArrowUp.classList.remove("hidden")
        } else {
            featuresList.style.display = "none";
            featuresArrowDown.classList.remove("hidden");
            featuresArrowUp.classList.add("hidden");
        }
    })
    company.addEventListener("click", ()=>{
        if(companyList.style.display == "none") {
            companyList.style.display = "initial";
            companyArrowDown.classList.add("hidden")
            companyArrowUp.classList.remove("hidden")
        } else {
            companyList.style.display = "none";
            companyArrowDown.classList.remove("hidden");
            companyArrowUp.classList.add("hidden");
        }
    })
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
    imgMobile.classList.add("opacity");
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    imgMobile.classList.remove("opacity");
}