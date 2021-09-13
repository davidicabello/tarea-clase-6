const $addFamilyMemberButton = document.querySelector('#mostrar-integrantes');

$addFamilyMemberButton.onclick = function () {
    const $familyMembers = Number(document.querySelector('#cantidad-integrantes').value);
    addFamilyMemebrs($familyMembers);
    return false;
}

function addFamilyMemebrs(input) {
    for (let i = 0; i < input; i++) {
        const newLabel = document.createElement('label');
        const newInput = document.createElement('input');
        const $integrantes = document.querySelector('#integrantes')
        newLabel.textContent = 'Edad del integrante ';
        newInput.type = 'number';
        newInput.id = 'integrantes-edad';
        $integrantes.appendChild(newLabel);
        $integrantes.appendChild(newInput);
    }
    const $newButton = document.querySelector('#new-button');
    const newButton = document.createElement('button');
    newButton.textContent = 'Calcular';
    newButton.type = 'submit';
    newButton.id = 'calcular-newbutton';
    $newButton.appendChild(newButton)
    $newButton.onclick = function () {
        let agesFinal = inputAgesOutcome();
        let $averageAge = document.querySelector('#average');
        $averageAge.innerText = calculateAverageAge(agesFinal).toFixed(2);
        let $minorAge = document.querySelector('#youngest');
        $minorAge.innerText = findYoungest(agesFinal);
        let $oldestAge = document.querySelector('#oldest');
        $oldestAge.innerText = findOldest(agesFinal);
    }
}


///mayor edad,la menor edad y el promedio del grupo familiar.

function inputAgesOutcome() {
    let familyMembersAges = document.querySelectorAll('#integrantes-edad')
    let ages = [];
    for (let i = 0; i < familyMembersAges.length; i++) {
        ages.push(Number(familyMembersAges[i].value));

    } return ages;
}


function calculateAverageAge(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return Number((sum / input.length));
}

function findYoungest(input) {
    let minorNumber = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < minorNumber) {
            minorNumber = input[i];
        }
    }
    return minorNumber;
}

function findOldest(input) {
    let biggerNumber = input[0];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > biggerNumber) {
            biggerNumber = input[i];
        }
    }
    return biggerNumber;
}