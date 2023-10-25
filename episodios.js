window.addEventListener("load", () => {
    apiRick(1); 
});

let currentPage = 1;
const totalPages = 3;

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById('pagina').value = currentPage;
        apiRick(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++; 
        document.getElementById('pagina').value = currentPage;
        apiRick(currentPage);
    }
}

function cambiarModo() {
    const body = document.body;
    let modoActual = body.classList.contains("dark-mode") ? "dark-mode" : "light-mode";

    if (modoActual === "light-mode") {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
    }
}

const apiRick=async (pagina)=>{
    let url= "https://rickandmortyapi.com/api/episode?page=" + pagina;
    const api= await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes=document.querySelector("#resultado");
    divRes.innerHTML=""
    data .results.map(item=>{
        divItem=document.createElement(`div`)
        divItem.innerHTML=`
        <div class="card" style="width: 18rem;">
        
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text"><b> Capitulo: </b>${item.episode} </p>
            <p class="card-text"><b> Estrenado: </b>${item.air_date} </p>
        </div>
        </div>
        `;
        divRes.appendChild(divItem);
    });
}
