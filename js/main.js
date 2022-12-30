const adviseIcon = document.getElementById("advise-icon");
const btn = document.getElementById("btn");
const textError = document.getElementById("text-error");
const adviseIconDesktop = document.getElementById("advise-icon-desktop");
const btnDesktop = document.getElementById("btn-desktop");
const textErrorDesktop = document.getElementById("text-error-desktop");


btn.addEventListener("click", () => {
    let valor = document.getElementById("text-email").value;
    console.log(valor);

    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( expr.test(valor) ){
        textError.classList.add("active");
        adviseIcon.classList.add("active");
        alert("Tks!")
    }else {
        textError.classList.remove("active");
        adviseIcon.classList.remove("active");
    } 
})

btnDesktop.addEventListener("click", () => {
    let valor = document.getElementById("text-email-desktop").value;
    console.log(valor);

    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( expr.test(valor) ){
        textErrorDesktop.classList.add("active");
        adviseIconDesktop.classList.add("active");
        alert("Tks!")
    }else {
        textErrorDesktop.classList.remove("active");
        adviseIconDesktop.classList.remove("active");
    } 
})





