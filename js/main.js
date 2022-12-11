const checar = document.querySelector(".form-radio");
const inputRadio = document.querySelector("#labelConcepto");
const contentConcepto = document.querySelector(".concepto");
let html = "";
checar.addEventListener("click", function(e){
    
    if(e.target.classList.contains("instalacion")){        
        console.log(checar);
        html = ``;
        contentConcepto.innerHTML = html;
    }

    if(e.target.classList.contains("cambioDomicilio")){
        console.log(typeof contentConcepto );
        html = ``;
        contentConcepto.innerHTML = html;
    }

    if(e.target.classList.contains("especificar")){
        console.log(checar);
        html += `
        <div class="inputEspecifica">
            <label id="labelEspecificar" for="concepto">Especificar:</label>
            <input type="text" name="especificar" id="especificar" />
        </div>
        `;
        contentConcepto.innerHTML = html;
    }
});