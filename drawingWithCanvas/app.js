window.addEventListener("load", function () {
    const canvas = document.querySelector("canvas");
    //context zorgt ervoor dat je dingen toe kunt voegen aan je canvas
    // zoals een vierkant oid
    const ctx = canvas.getContext("2d");
    //Grootte aanpassen
    //clg canvas en kijk of je de hoogte kan vinden en aanpassen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    //maak drie vierkanten op het scherm met de kleuren blauw, rood en geel
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 200,200);
    ctx.fillStyle = "red";
    ctx.fillRect(60, 60, 200,200);
    ctx.fillStyle = "yellow";
    ctx.fillRect(70, 70, 200,200);

    let painting = false;

    const startPosition = function (e) {
        painting = true;
        console.log(e)
        draw(e)
    }

    const finishedPosition = function () {
        painting = false;
        ctx.beginPath()
    }

    const draw = function (e) {
        if(!painting) return;
        ctx.lineWidth = 0.5;
        ctx.lineCap = "square";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    };

    canvas.addEventListener("mousedown", startPosition);

    canvas.addEventListener("mouseup", finishedPosition);  

    canvas.addEventListener("mousemove", draw);
    });

