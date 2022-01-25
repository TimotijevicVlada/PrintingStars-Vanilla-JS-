//Square logic
const square = document.getElementsByClassName("square")[0];
const squareRows = 3;
const squareColumns = 8;

for (let i = 0; i <= squareRows; i++) {
    for (let j = 0; j <= squareColumns; j++) {
        if (i == 0 || j == 0 || i == squareRows || j == squareColumns) {
            square.innerHTML += "*";
        } else {
            square.innerHTML += "&nbsp; ";
        }
    }
    square.innerHTML += "<br>";
}


//Romb logic
const romb = document.getElementsByClassName("romb")[0];
const rowsCols = 4;

//Loops for first 3 triangles
for (let k = 0; k <= rowsCols; k++) {
    for (let l = k; l <= rowsCols; l++) {
        romb.innerHTML += "&nbsp; ";
    }
    for (let l = 1; l < k; l++) {
        if (l == 1) {
            romb.innerHTML += "*";
        } else {
            romb.innerHTML += "&nbsp; ";
        }
    }
    for (let l = 1; l <= k; l++) {
        if (l == k) {
            romb.innerHTML += "*";
        } else {
            romb.innerHTML += "&nbsp; ";
        }
    }
    
    romb.innerHTML += "<br>";
}

//Loops for second 3 triangles
for (let m = 1; m <= rowsCols; m++) {
    for (let n = -1; n < m; n++) {
        romb.innerHTML += "&nbsp; ";
    }
    for (let n = m; n < rowsCols - 1; n++) {
        if (n == m) {
            romb.innerHTML += "*";
        } else {
            romb.innerHTML += "&nbsp; ";
        }
    }
    for (let n = m; n <= rowsCols - 1; n++) {
        if (n == rowsCols - 1) {
            romb.innerHTML += "*";
        } else {
            romb.innerHTML += "&nbsp; ";
        }
    }

    romb.innerHTML += "<br>";
}
