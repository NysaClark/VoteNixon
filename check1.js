// 9. loop that creates several divs at once
for(let i = 0; i < 9; i++){
    let square = document.createElement("div");
    square.className = "square";
    square.id = i;
    square.addEventListener("mouseover", function(){
        if(this.style.background != "green"){
            this.style.background = "white";
        }
    });
    square.addEventListener("mouseout", function(){
        if(this.style.background != "green"){
            this.style.background = "#001D4F";
        }
    })
    square.addEventListener("click", function(){
        if(this.style.background != "green"){
            this.style.background = "green"
        }else{
            this.style.background = "#001D4F"
        }
    })
    main.appendChild(square);
}

// checks if pixel art is completed correctly
function check(){
    let points = 0;
    if(document.getElementById("0").style.background == "green"){
        points++;
    }
    if(document.getElementById("2").style.background == "green"){
        points++;
    }
    if(document.getElementById("4").style.background == "green"){
        points++;
    }
    if(document.getElementById("6").style.background == "green"){
        points++;
    }
    if(document.getElementById("8").style.background == "green"){
        points++;
    }
    
    if(document.getElementById("1").style.background !== "green"){
        points++;
    }
    if(document.getElementById("3").style.background !== "green"){
        points++;
    }
    if(document.getElementById("5").style.background !== "green"){
        points++;
    }
    if(document.getElementById("7").style.background !== "green"){
        points++;
    }

    if(points == 9){
        document.getElementById("done").innerHTML = "Check Complete!";
        body.addEventListener("mousemove", function(){
            done.removeEventListener("click", check);
            window.location.href = "index2.html";
        })
    }
}

done.addEventListener("click", check);