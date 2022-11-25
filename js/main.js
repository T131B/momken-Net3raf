import { months, governorates, genders } from "./data-set.js";


// Dom element
const searchForm = document.querySelector (".search form");
const searchInput = document.querySelector(".search form input");
const clearSearch = document.querySelector(".search .clear");

const resultsPlaceholder = document.querySelector(".search-result-placeholder");
const results = document.querySelector(".search-result");
const gender  = document.querySelector(".search-result .card.gender .card-body .value");
const governorate  = document.querySelector(".search-result .card.location .card-body .value");
const birthDate  = document.querySelector(".search-result .card.birth-date .card-body .value");

searchForm.onsubmit = (e) =>{
    e.preventDefault();
    const inputVal = searchInput.value;
    // validation input
    if(!inputVal){
        alert("برجاء ادخال رقم قومى");
        return;
    }
    if(inputVal.length < 14 || inputVal.length > 14){
        alert("الرقم المدخل غير صحيح");
        return;
    }
    if (inputVal[0] !== "2" && inputVal[0] !== "3"){
        alert("الرقم المدخل غير صحيح");
        return;
    }
    const centuryCode = inputVal[0];
    const yearPrefix = centuryCode === "2" ? "19" : "20";
    const year =   yearPrefix + inputVal[1] + inputVal[2];
    const month = inputVal[3] + inputVal[4];
    const day = inputVal[5] + inputVal[6];
    const governorateCode = inputVal[7] + inputVal[8];
    const genderCode = inputVal[12] % 2;

    // show result
    resultsPlaceholder.classList.add("d-none");
    results.classList.remove("d-none");

    gender.textContent = genders[genderCode];
   governorate.textContent = governorates[governorateCode];
   birthDate.textContent = day + " " + months[month - 1] + " " + year;
};