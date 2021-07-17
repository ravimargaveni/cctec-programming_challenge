let userListContainerEl = document.getElementById('userList');



function createAndAppendSearchResult(result) {
    let {
        name,
        location,
        email,
        picture
    } = result;

    let {
        title,
        first,
        last
    } = name;
    let {
        street,
        city,
        state,
        country,
        postcode
    } = location;
    let streetNo = street.number;
    let streetName = street.name;

    let {
        medium
    } = picture;
    let userName = title + " " + first + " " + last;
    let address = streetNo + ", " + streetName + ", " + city + ", " + state + ", " + country + ", " + postcode;

    let uesrListItemEl = document.createElement("li");
    uesrListItemEl.classList.add("d-flex", "user-item", "ml-auto", "mr-auto");
    userListContainerEl.appendChild(uesrListItemEl);

    let imageEl = document.createElement("img");
    imageEl.classList.add("img");
    imageEl.src = medium;
    uesrListItemEl.appendChild(imageEl);

    let hLineEl = document.createElement("div");
    hLineEl.classList.add("vr-line");
    uesrListItemEl.appendChild(hLineEl);

    let hLine = document.createElement("hr");
    hLine.classList.add("h-line");
    uesrListItemEl.appendChild(hLine);


    let userDetailsContainerEl = document.createElement("div");
    userDetailsContainerEl.classList.add("user-details");
    uesrListItemEl.appendChild(userDetailsContainerEl);

    let nameEl = document.createElement("h1");
    nameEl.textContent = userName;
    nameEl.classList.add("name");
    userDetailsContainerEl.appendChild(nameEl);

    let emailEl = document.createElement("p");
    emailEl.textContent = email;
    userDetailsContainerEl.appendChild(emailEl);

    let addressEl = document.createElement("p");
    addressEl.textContent = address;
    userDetailsContainerEl.appendChild(addressEl);
}

let url = "https://randomuser.me/api/?results=10";
let options = {
    method: "GET"
};
fetch(url, options).then(function(response) {
    return response.json();
}).then(function(jsonData) {

    let {
        results
    } = jsonData;

    for (let result of results) {

        createAndAppendSearchResult(result);
    }
});