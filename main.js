// Main id's for temeperature values
let idValues = ['fhr', 'cls', 'klv'];

function emptyEverything() {
    for (let i = 0; i < idValues.length; i++) {
        document.getElementById(idValues[i]).value = '';
    }
}

// Listen for input on fahrenheit
document.getElementById('fhr').addEventListener('input', function(e) {
    // Get Fahrenheit value
    let fhr = e.target.value;

    // Materialize update inputs
    $(document).ready(function() {
        Materialize.updateTextFields();
        });
            
    // If Fahrenheit is empty, empty other two
    if (fhr == '') {

        emptyEverything();
    
    } else {

        // Show only two decimal places
        document.getElementById('cls').value = ((fhr - 32) * (5/9)).toFixed(2);
        document.getElementById('klv').value = (((fhr - 32) * (5/9) + 273)).toFixed(2);
    
    }

});

// Listen for input on celsius
document.getElementById('cls').addEventListener('input', function(e) {
    // Get celsius value
    let cls = e.target.value;
    
    // Materialize update inputs
    $(document).ready(function() {
        Materialize.updateTextFields();
        });

    if (cls == '') {

        emptyEverything();

    } else {
        document.getElementById('fhr').value = (cls * (9/5) + 32).toFixed(2);
        document.getElementById('klv').value = (cls + 273);
    }
});

// Listen for input on kelvin
document.getElementById('klv').addEventListener('input', function(e) {
    // Get kelvin value
    let klv = e.target.value;

    // Materialize update inputs
    $(document).ready(function() {
        Materialize.updateTextFields();
        });
        
    if (klv == '')  {

        emptyEverything();

    } else {
        document.getElementById('fhr').value = ((klv - 273) * (9/5) + 32).toFixed(2);
        document.getElementById('cls').value = (klv - 273).toFixed(2);
    }
});