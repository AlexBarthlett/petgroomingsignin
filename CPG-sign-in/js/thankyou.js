function newSignIn() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

function setSessionShampooSelection() {
    let sessionShampoo = sessionStorage.getItem("shampoo");
    let textToUse;

    switch(sessionShampoo) {
        case "standard":
            textToUse = "Standard";
            break;
        case "blueberryshampoo":
            textToUse = "Blueberry Shampoo";
            break;
        case "darkshampoo":
            textToUse = "Dark Shampoo";
            break;
        case "whiteshampoo":
            textToUse = "White Shampoo";
            break;
        case "lavendershampoo":
            textToUse = "Lavender Shampoo";
            break;
        case "medshampoo":
            textToUse = "Medicated Treatment";
            break;
        case "oatshampoo":
            textToUse = "Oatmeal Shampoo";
            break;
        case "plainshampoo":
            textToUse = "Unscented Shampoo";
            break;
        case "oilshampoo":
            textToUse = "Hot Oil Conditioning Treatment";
            break;
        case "co2shampoo":
            textToUse = "CO2 Treatment";
            break;
        case "hempshampoo":
            textToUse = "Hemp Shampoo";
            break;
        case "mudshampoo":
            textToUse = "Mud Bath Treatment";
            break;
        case "deshedshampoo":
            textToUse = "Deshed Treatment";
            break;
        case "fleashampoo":
            textToUse = "Flea Treatment";
            break;
    }

    sessionStorage.setItem("shampoo", textToUse);
}

function setSessionNailSelection() {
    let sessionNail = sessionStorage.getItem("nailpaint");
    console.log(sessionNail);
    let textToUse;

    if (sessionNail === "nonail") {
        textToUse = "No Nail Polish";
    }
    else {
        switch(sessionNail) {
            case "rednail":
                textToUse = "Yes - Red";
        }
    }

    sessionStorage.setItem("nailpaint", textToUse);
}

function setSessionTeethSelection() {
    let sessionTeeth = sessionStorage.getItem("teethbrush");
    let textToUse;

    if (sessionTeeth === "nobrush") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    sessionStorage.setItem("teethbrush", textToUse);
}

function setSessionAnalSelection() {
    let sessionAnal = sessionStorage.getItem("analgland");
    console.log(sessionAnal);
    let textToUse;

    if (sessionAnal === "noanal") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    sessionStorage.setItem("analgland", textToUse);
}

function setSessionNoseSelection() {
    let sessionNose = sessionStorage.getItem("nosebalm");
    let textToUse;

    if (sessionNose === "nonosebalm") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    sessionStorage.setItem("nosebalm", textToUse);
}

function setSessionPawSelection() {
    let sessionPaw = sessionStorage.getItem("nailbalm");
    let textToUse;

    if (sessionPaw === "nonailbalm") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    sessionStorage.setItem("nailbalm", textToUse);
}
document.addEventListener("DOMContentLoaded", function() {

    setSessionShampooSelection();
    setSessionNailSelection();
    setSessionTeethSelection();
    setSessionAnalSelection();
    setSessionPawSelection();
    setSessionNoseSelection();
})