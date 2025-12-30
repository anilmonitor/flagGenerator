let apiUrl = "https://countriesnow.space/api/v0.1/countries/flag/images";
let imgid = document.querySelector("#imgid");
let country = document.querySelector("#country");

async function getCountry() {
  let Count = await axios(apiUrl);
  let Country = Count.data.data;
  for (let i = 0; i < Country.length; i++) {
    let option = document.createElement("option");
    country.appendChild(option);

    option.innerText = Country[i].name;
    option.value = Country[i].name;
  }
}

getCountry();

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let span = document.querySelector("span");
  span.innerText = "";

  if (country.value === "Select a country") {
    console.log("Please select a country!!");
    span.innerText = "Please select a country!!";
  }

  if (!(country.value === "Select a country")) {
    imgid.alt = "Loading flag...";
  }

  let apiurl = await axios(apiUrl);
  let allObject = apiurl.data.data;

  let findFlag = allObject.find((oneObj) => {
    return oneObj.name === country.value;
  });

  if (findFlag) {
    imgid.src = findFlag.flag;
    imgid.style.border = "4px solid #ffffff";
    imgid.style.height = "150px";
  }
});
