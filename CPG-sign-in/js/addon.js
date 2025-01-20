document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded");

    const shampooSaved = sessionStorage.getItem("shampoo");
    const nailSaved = sessionStorage.getItem("nailpaint");
    const teethSaved = sessionStorage.getItem("teethbrush");
    const analSaved = sessionStorage.getItem("analgland");
    const noseSaved = sessionStorage.getItem("nosebalm");
    const pawSaved = sessionStorage.getItem("nailbalm");

    console.log(shampooSaved);

    if (shampooSaved !== '') {
        const shampooRadio = document.querySelectorAll('input[name="shampoo"]');

        for (const chosenShampoo of shampooRadio) {
            if (chosenShampoo.value === shampooSaved) {
                chosenShampoo.checked = true;
                break;
            }
        }
    }
    if (nailSaved !== '') {
        const nailRadio = document.querySelectorAll('input[name="nailpaint"]');
        for (const chosenNail of nailRadio) {
            if (chosenNail.value === nailSaved) {
                chosenNail.checked = true;
                break;
            }
        }
    }

    if (teethSaved !== '') {
        const teethRadio = document.querySelectorAll('input[name="teethbrush"]');
        for (const chosenTeeth of teethRadio) {
            if (chosenTeeth.value === teethSaved) {
                chosenTeeth.checked = true;
                break;
            }
        }
    }

    if (analSaved !== '') {
        const analRadio = document.querySelectorAll('input[name="analgland"]');
        for (const chosenAnal of analRadio) {
            if (chosenAnal.value === analSaved) {
                chosenAnal.checked = true;
                console.log(chosenAnal.value);
                break;
            }
        }
    }

    if (noseSaved !== '') {
        const noseRadio = document.querySelectorAll('input[name="nosebalm"]');
        for (const chosenNose of noseRadio) {
            if (chosenNose.value === noseSaved) {
                chosenNose.checked = true;
                break;
            }
        }
    }

    if (pawSaved !== '') {
        const pawRadio = document.querySelectorAll('input[name="nailbalm"]');
        for (const chosenPaw of pawRadio) {
            if (chosenPaw.value === pawSaved) {
                chosenPaw.checked = true;
                break;
            }
        }
    }
})

function checkShampooSelection() {
    const shampooRadio = document.querySelectorAll('input[name="shampoo"]');
    for (const chosenShampoo of shampooRadio) {
        if (chosenShampoo.checked) {
            sessionStorage.setItem("shampoo", chosenShampoo.value);
            break;
        }
    }
}

function checkNailSelection() {
    const nailRadio = document.querySelectorAll('input[name="nailpaint"]');
    for (const chosenNail of nailRadio) {
        if (chosenNail.checked) {
            sessionStorage.setItem("nailpaint", chosenNail.value);
            break;
        }
    }
}

function checkTeethSelection() {
    const teethRadio = document.querySelectorAll('input[name="teethbrush"]');
    for (const chosenTeeth of teethRadio) {
        if (chosenTeeth.checked) {
            sessionStorage.setItem("teethbrush", chosenTeeth.value);
            break;
        }
    }
}

function checkAnalSelection() {
    const analRadio = document.querySelectorAll('input[name="analgland"]');
    for (const chosenAnal of analRadio) {
        if (chosenAnal.checked) {
            sessionStorage.setItem("analgland", chosenAnal.value);
            console.log(chosenAnal.value);
            break;
        }
    }
}

function checkNoseBalm() {
    const noseRadio = document.querySelectorAll('input[name="nosebalm"]');
    for (const chosenNose of noseRadio) {
        if (chosenNose.checked) {
            sessionStorage.setItem("nosebalm", chosenNose.value);
            break;
        }
    }
}

function checkPawBalm() {
    const pawRadio = document.querySelectorAll('input[name="nailbalm"]');
    for (const chosenPaw of pawRadio) {
        if (chosenPaw.checked) {
            sessionStorage.setItem("nailbalm", chosenPaw.value);
            break;
        }
    }
}

function backToIndex() {
    console.log("back button clicked");
    checkShampooSelection();
    checkNailSelection();
    checkPawBalm();
    checkNoseBalm();
    checkTeethSelection();
    checkAnalSelection();
    console.log(sessionStorage.getItem("shampoo"));
    window.location.href = "index.html";
}

function toSubmitPage() {
    console.log("forward clicked");
    const form = document.getElementById("addonform");
    checkShampooSelection();
    checkNailSelection();
    checkPawBalm();
    checkNoseBalm();
    checkTeethSelection();
    checkAnalSelection();
    console.log(sessionStorage.getItem("shampoo"));
    window.location.href = form.action;
}