import data from "/data.json" assert {type: 'json'};

const ul = document.querySelector(".container-elements-list")

data.forEach(element => {
    ul.innerHTML += `
    <li>

        <div class="container-info__secundaria-element">

            <div class="container-info__secundaria-element--title">
                <img src="${element.icon}" alt="icon ${element.category}">
                <p style="color:var(${element.color});">${element.category}</p>
            </div>

            <div class="container-info__secundaria-element--information">
                <p class="stats-win">${element.score}</p><p class="stats-total">/ 100</p>
            </div>
        </div>

    </li>
    `
});