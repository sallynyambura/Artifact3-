// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";
function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
}
  
function upRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = 0; i < pHeight; i++) {
      rLine += "<p>";
      for (var j = 0; j <= i; j++) {
        if (j % 2) {
          rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
        } else {
          rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
      }
      rLine += "</p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}
  
function downRight(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = pHeight; i > 0; i--) {
      rLine += "<p>";
      for (var j = 0; j < i; j++) {
        if (j % 2) {
          rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
        } else {
          rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
      }
      rLine += "</p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
}
  
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (var i = pHeight; i > 0; i--) {
      rLine += "<p>";
      for (var k = 0; k < i - 1; k++) {
        if (k % 2) {
          rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
        } else {
          rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
      }
      rLine += "</p>";
    }
    document.getElementById("upLeft").innerHTML = rLine;
}

