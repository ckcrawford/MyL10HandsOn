$(document).ready(function(){
    $("header").hover(function(){
        $(this).css("color", "red");
    }, function(){
        $(this).css("color", "white");
    });
});

$(document).ready(function(){

    $("i").hover(function(){
        $(this).css("resize","30px");
    }, function(){
        $(this).css("resize", "24px");
    });
});


function loadRepo(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
        results = JSON.parse(this.responseText);
        document.getElementById("repo1").innerHTML = results(0).name;
        }
    }
xhttp.open("GET","https://github.com/ckcrawford/Uno", true);
xhttp.send();
};

