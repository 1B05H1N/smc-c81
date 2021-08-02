window.addEventListener("load", function(){
    const pn = document.getElementById("pn");
    const rm = document.getElementById("reminder");

    pn.onfocus = () => rm.innerHTML = "Format: 123-456-7890"
    pn.onblur = () => rm.innerHTML = ""
});