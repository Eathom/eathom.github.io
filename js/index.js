window.onscroll = function() {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
           document.getElementById("toTopButton").style.display = "block";
        } else {
            document.getElementById("toTopButton").style.display = "none";
        }
}

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}