function backToAddOnPage() {
    console.log("Back button clicked");
    window.location.href = "addon.html";
}

function submitForm() {
    console.log("Submit form clicked");
    window.location.href = "thankyou.html";
    //do a window location here for a thank you page to reset session.
}

function setShampooSelection() {
    const shampooText = document.getElementById("shampootext");
    const sessionShampoo = sessionStorage.getItem("shampoo");
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

    shampooText.textContent = textToUse;
}

function setNailSelection() {
    const nailText = document.getElementById("nailstext");
    const sessionNail = sessionStorage.getItem("nailpaint");
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
    nailText.textContent = textToUse;
}

function setTeethSelection() {
    const teethText = document.getElementById("teethtext");
    const sessionTeeth = sessionStorage.getItem("teethbrush");
    let textToUse;

    if (sessionTeeth === "nobrush") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    teethText.textContent = textToUse;
}

function setAnalSelection() {
    const analText = document.getElementById("analtext");
    const sessionAnal = sessionStorage.getItem("analgland");
    console.log(sessionAnal);
    let textToUse;

    if (sessionAnal === "noanal") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    analText.textContent = textToUse;
}

function setNoseSelection() {
    const noseText = document.getElementById("nosetext");
    const sessionNose = sessionStorage.getItem("nosebalm");
    let textToUse;

    if (sessionNose === "nonosebalm") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    noseText.textContent = textToUse;
}

function setPawSelection() {
    const pawText = document.getElementById("pawtext");
    const sessionPaw = sessionStorage.getItem("nailbalm");
    let textToUse;

    if (sessionPaw === "nonailbalm") {
        textToUse = "No";
    }
    else {
        textToUse = "Yes";
    }

    pawText.textContent = textToUse;
}
document.addEventListener("DOMContentLoaded", function() {

setShampooSelection();
setNailSelection();
setTeethSelection();
setAnalSelection();
setPawSelection();
setNoseSelection();
})