const $addFamilyMemberButton = document.querySelector('#show-members');
$addFamilyMemberButton.onclick = function () {
    const $familyMembers = Number(document.querySelector('#member-amount').value);
    addFamilyMembers($familyMembers);
    newButton();
    this.disabled =true
    return false;
}



//Funciones 

function addFamilyMembers(amount) {
    for (let i = 0; i < amount; i++) {
        const newLabel = document.createElement('label');
        const newInput = document.createElement('input');
        const $integrantes = document.querySelector('#members');
        newLabel.textContent = 'Edad del integrante ';
        newInput.type = 'number';
        newInput.id = 'member-age';
        $integrantes.appendChild(newLabel);
        $integrantes.appendChild(newInput);
    }
}

function showFinalResults() {
    let agesFinal = getAges();
    let $averageAge = document.querySelector('#average');
    $averageAge.innerText = calculateAverage(agesFinal).toFixed(2);
    let $minorAge = document.querySelector('#youngest');
    $minorAge.innerText = findMinor(agesFinal);
    let $oldestAge = document.querySelector('#oldest');
    $oldestAge.innerText = findBiggest(agesFinal);
}

function newButton() {
    const $newButton = document.querySelector('#new-button');
    const newButton = document.createElement('button');
    newButton.textContent = 'Calcular';
    newButton.type = 'submit';
    newButton.id = 'result-newbutton';
    $newButton.appendChild(newButton);
    $newButton.onclick = function(){
        showFinalResults() 
    }
}

function getAges() {
    let membersAges = document.querySelectorAll('#member-age')
    let ages = [];
    for (let i = 0; i < membersAges.length; i++) {
        ages.push(Number(membersAges[i].value));

    }

    return ages;
}

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}

function findMinor(numbers) {
    let minorNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < minorNumber) {
            minorNumber = numbers[i];
        }
    }

    return minorNumber;
}

function findBiggest(numbers) {
    let biggestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > biggestNumber) {
            biggestNumber = numbers[i];
        }
    }

    return biggestNumber;
}