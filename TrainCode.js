// Function to process a single input string
function processInputString(inputString) {
    // Step 1: Extract the three-letter station code
    const stationCode = inputString.slice(0, 3);

    // Step 2: Find the character index number of the semicolon
    const semicolonIndex = inputString.indexOf(';');

    // Step 3: Extract the human-readable station name
    const stationName = inputString.slice(semicolonIndex + 1);

    // Step 4: Concatenate the two variables to create the final string
    const result = `${stationCode}: ${stationName}`;

    // Display the result in the console
    console.log(result);

    // Display the result in the HTML
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += `<p>${result}</p>`;
}

// Function to handle button click
function handleButtonClick() {
    const selectElement = document.getElementById("inputSelect");
    const selectedValue = selectElement.value;
    processInputString(selectedValue);
}

// Add event listener for the button click
const processButton = document.getElementById("processButton");
processButton.addEventListener("click", handleButtonClick);
