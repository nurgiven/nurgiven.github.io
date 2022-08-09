function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("menu").style.visibility = 'hidden'
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("menu").style.visibility = 'visible'
}
function show() {
    const x = document.getElementById("imgShow");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function showText() {
    const x = document.getElementById("show");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

