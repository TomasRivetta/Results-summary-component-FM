const ul = document.querySelector(".container-elements-list")

fetch('data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            ul.innerHTML += `
            <li>
        
                <div class="container-info__secundaria-element" style="background:var(${element.background})">
        
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
        })
    })