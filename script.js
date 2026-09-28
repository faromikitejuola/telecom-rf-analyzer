function calculateRF() {

    const frequencyInput =
        document.getElementById("frequency");

    const unit =
        document.getElementById("unit");

    const result =
        document.getElementById("rfResult");


    let frequency =
        Number(frequencyInput.value);


    if (frequency <= 0 || isNaN(frequency)) {

        result.textContent =
            "Please enter a valid frequency.";

        return;
    }



    if (unit.value === "kHz") {

        frequency *= 1000;

    } else if (unit.value === "MHz") {

        frequency *= 1000000;

    } else if (unit.value === "GHz") {

        frequency *= 1000000000;

    }


    const speedOfLight = 299792458;

    const wavelength =
        speedOfLight / frequency;


    result.innerHTML = `
        Frequency:
        ${frequency.toLocaleString()} Hz
        <br><br>

        Wavelength:
        ${wavelength.toFixed(4)} metres
    `;
}


const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const contactResult =
            document.getElementById("contactResult");


        contactResult.textContent =
            "Message received! We will connect this form to a database later.";

        contactResult.style.color =
            "green";


        contactForm.reset();

    }
);

