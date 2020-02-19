/*
    Tucker Kent
    kent_a10.js
    19WI_INFO_2124_WW Online Javascript I
    Thoendel
    19 Feb 2020
*/


document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    let changePhoto = document.getElementById("photo"); //declaring variable to set image element to 
    if (changePhoto.getAttribute("src") === "01.jpg"){ //if statement to determine which picture is being displayed
        changePhoto.setAttribute("src", "02.jpg"); //if 01.jpg is displayed then photo changes to 02.jpg
    } else if (changePhoto.getAttribute("src") === "02.jpg"){ //else if to change photo if 02.jps is displayed
        changePhoto.setAttribute("src", "01.jpg"); // changes from 02.jpg to 01.jpg
    }
    let grabH1 = document.getElementsByTagName("h1"); //declaring variable to set h1 element to
    if (grabH1[0].getAttribute("class") != "greenText"){ //if statement to determine if class is already greenText
        grabH1[0].setAttribute("class", "greenText"); //if class is not greenText -- uses setAttribute to set greenText class to h1 element
    } else if (grabH1[0].getAttribute("class") == "greenText"){ //else if to determine if class is greenText
        grabH1[0].setAttribute("class", "bigRed"); //if h1 class is greenText -- changes class attribute to bigRed class
    }
    
    //AND THIS COMMENT
});