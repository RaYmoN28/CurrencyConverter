const link = "https://open.er-api.com/v6/latest";
const fromCurr = document.querySelector(".stuff select");
const toCurr = document.querySelector(".stuff1 select");
let btn = document.querySelector(".btn");
let list = document.querySelectorAll(".container select");
let exc = document.querySelector(".exchange");
console.log(toCurr)
for (let select of list) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}
const updateFlag = (element) => {
    let currCode = element.value;
    console.log(currCode);
    let country = countryList[currCode];
    let newsrc = `https://flagsapi.com/${country}/flat/64.png`;
    let image = element.parentElement.querySelector("img");
    image.src = newsrc;
}
let updateEXErate = btn.addEventListener("click", async () => {
    let amount = document.querySelector(".numberbox");
    let amtVal = amount.value;
    const URL = `${link}/${fromCurr.value.toLowerCase()}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    exc.innerText = rate;
});