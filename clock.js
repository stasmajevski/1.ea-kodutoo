var clockContainer;
var myButton = document.getElementById('myButton');
var myTextInput = document.getElementById('myTextInput');

var x = 0;
var y = 0;

var dX = 1;
var dY = 1;




myButton.addEventListener('click', function() {
    document.getElementById('body').style.fontFamily = myTextInput.value;
});

window.onload = function() {
    clockContainer = document.getElementById('dragonfly');
    footer = document.getElementById('footer');
    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function() {
        clockContainer.innerHTML = getCurrentDateTime();
    }, 0);

    clockContainer.addEventListener('click', function() {
        clockContainer.style.color = getRandomColor();
    });

    footer.addEventListener("mouseover", mouseOver);
    footer.addEventListener("mouseout", mouseOut);
};

function fast() {

    if (dX >= 0) {
        dX = dX + 0.5;
        console.log(dX);
    } else if (dX < 0) {
        console.log(dX);
        dX = dX - 0.5;
    }
    if (dX >= 7) {
        alert("Hold your horses");
        dX = 7;
    } else if (dX <= -7) {
        alert("Hold your horses");
        dX = -7;
    }
    //dY = dY + 0.2;
}

function slow() {
    if (dX < 0) {
        dX = dX + 0.5;
        console.log(dX);
    } else if (dX > 0) {
        console.log(dX);
        dX = dX - 0.5;
    }
    if (dX >= 7) {
        alert("Hold your horses!");
        dX = 7;
    } else if (dX <= -7) {
        alert("Hold your horses!");
        dX = -7;
    }
    if (dX == 0) {
        dX = 0.5;
        alert("Move on!");
    }
}


function displayWeekDay() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[d.getDay()];
}

function mouseOver() {
    footer.innerHTML = displayWeekDay();
}

function mouseOut() {
    footer.innerHTML = "Stanislav Majevski";
}

var dragonBorders = document.getElementById("container");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var getCurrentDateTime = function() {



    if (x > dragonBorders.offsetWidth - 280) {
        dX = -dX;
        console.log(dX);
        footer.style.color = getRandomColor();
    } else if (x < 0) {
        dX = -dX;
        footer.style.color = getRandomColor();
        console.log(dX);
    }

    if (y > dragonBorders.offsetHeight - 80) {
        dY = -dY;
        footer.style.color = getRandomColor();
    } else if (y < 0) {
        dY = -dY;
        footer.style.color = getRandomColor();
    }

    x += dX;
    y += dY;

    if (dX < 0) {
        var today = new Date();

        display = today.toLocaleDateString("en-GB");

    } else if (dX > 0) {
        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        display = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    }
    document.getElementById("dragonfly").style.left = x + "px";
    document.getElementById("dragonfly").style.top = y + "px";

    return display;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}
