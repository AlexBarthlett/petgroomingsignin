function goToNextPage() {
    console.log("clicked");

    const form = document.getElementById("clientinfo");

    if (form.checkValidity()) {
        const client_name = document.getElementById("name").value;
        const pet_name = document.getElementById("dogname").value;
        const phone_number = document.getElementById("phone").value;

        sessionStorage.setItem("phone_number", phone_number,);
        sessionStorage.setItem("client_name", client_name,);
        sessionStorage.setItem("pet_name", pet_name,);

        console.log(sessionStorage.getItem("phone_number"));
        console.log(sessionStorage.getItem("client_name"));
        console.log(sessionStorage.getItem("pet_name"));

        window.location.href = form.action;
    }
    else {
        alert('Please fill out all fields.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const sessionClientName = sessionStorage.getItem("client_name");
    const sessionPetName = sessionStorage.getItem("pet_name");
    const sessionPhoneNumber = sessionStorage.getItem("phone_number");

    if (sessionClientName !== '') {
        const client_name = document.getElementById("name");
        client_name.value = sessionClientName;
    }
    if (sessionPetName !== '') {
        const pet_name = document.getElementById("dogname");
        pet_name.value = sessionPetName;
    }
    if (sessionPhoneNumber !== '') {
        const phone_number = document.getElementById("phone");
        phone_number.value = sessionPhoneNumber;
    }
});