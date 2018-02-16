const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


const gotCities = gotCitiesCSV.split(',');
const bestThingSplit = bestThing.split(' ')
function Q1() {
    let kata = document.createElement('span');
    kata.textContent = JSON.stringify(gotCities);
    destination = document.getElementById('1');
    destination.appendChild(kata);
}
Q1();

function Q2() {
    let kata = document.createElement('span');
    kata.textContent = JSON.stringify(bestThingSplit);
    destination = document.getElementById('2');
    destination.appendChild(kata);
}
Q2();

function Q3() {
    let original = gotCitiesCSV.textContent = JSON.stringify(gotCities);
    let replacement = original.replace(/,/gi, ';');
    let kata = document.createElement('span');
    let kataText = document.createTextNode(replacement)
    destination = document.getElementById('3');
    destination.appendChild(kataText);
}
Q3();

function Q4() {
    let original = lotrCitiesArray.textContent = JSON.stringify(lotrCitiesArray)
    let kata = document.createElement('span');
    let kataText = document.createTextNode(original);
    destination = document.getElementById('4');
    destination.appendChild(kataText);
}
Q4();

function Q5() {
    for (let i = 0; i <= 5; i++) {
        let kata = document.createElement('span');
        let kataText = document.createTextNode(lotrCitiesArray[i] + ',' + ' ');
        destination = document.getElementById('5');
        destination.appendChild(kataText);
    }

}
Q5();

function Q6() {
    for (let i = (lotrCitiesArray.length - 1); i >= (lotrCitiesArray.length - 5); i--) {
        let kata = document.createElement('span');
        let kataText = document.createTextNode(lotrCitiesArray[i] + ',' + ' ');
        destination = document.getElementById('6');
        destination.appendChild(kataText);
    }
}
Q6();

function Q7() {
    for (let i = 2; i <= 4; i++) {
        let kata = document.createElement('span');
        let kataText = document.createTextNode(lotrCitiesArray[i] + ',' + ' ');
        destination = document.getElementById('7');
        destination.appendChild(kataText);
    }
}
Q7();

function Q8() {
    let minusRohan = [...lotrCitiesArray]
    minusRohan.splice(2, 1)
    let kata = document.createElement('span');
    let kataText = document.createTextNode(minusRohan + ',' + ' ');
    destination = document.getElementById('8');
    destination.appendChild(kataText);
}
Q8();

function Q9() {
    let minusxyz = [...lotrCitiesArray]
    minusxyz.splice(6, 2)
    let kata = document.createElement('span');
    let kataText = document.createTextNode(minusxyz + ',' + ' ');
    destination = document.getElementById('9');
    destination.appendChild(kataText);
}
Q9();

function Q10() {
    let minusRohan = [...lotrCitiesArray]
    minusRohan.splice(2, 1, "Rohan")
    let kata = document.createElement('span');
    let kataText = document.createTextNode(minusRohan);
    destination = document.getElementById('10');
    destination.appendChild(kataText);
}
Q10();

function Q11() {
    let deadEst = [...lotrCitiesArray]
    deadEst.splice(5, 1, "Deadest Marshes")
    let kata = document.createElement('span');
    let kataText = document.createTextNode(deadEst);
    destination = document.getElementById('11');
    destination.appendChild(kataText);
}
Q11();

function Q12() {
    let bestThing12 = [...bestThing];
    let fucku = bestThing12.slice(0, 14);
    let kata = document.createElement('span');
    let kataText = document.createTextNode(fucku);
    destination = document.getElementById('12');
    destination.appendChild(kataText);
}
Q12();

function Q13() {
    let bestThing13 = [...bestThing];
    let fucku = bestThing13.slice(bestThing.length - 12);
    let kata = document.createElement('span');
    let kataText = document.createTextNode(fucku);
    destination = document.getElementById('13');
    destination.appendChild(kataText);
}
Q13();

function Q14() {
    let bestThing14 = [...bestThing];
    let fucku = bestThing14.slice(23, 38);
    let kata = document.createElement('span');
    let kataText = document.createTextNode(fucku);
    destination = document.getElementById('14');
    destination.appendChild(kataText);
}
Q14();

function Q15() {
    let bestThing15 = bestThing;
    let fucku = bestThing15.substring(bestThing.length - 12);
    let kata = document.createElement('span');
    let kataText = document.createTextNode(fucku);
    destination = document.getElementById('15');
    destination.appendChild(kataText);
}
Q15();

function Q16() {
    let bestThing16 = bestThing;
    let fucku = bestThing16.substring(23, 38);
    let kata = document.createElement('span');
    let kataText = document.createTextNode(fucku);
    destination = document.getElementById('16');
    destination.appendChild(kataText);
}
Q16();

function Q17() {
    let kata = document.createElement('span');
    let kataText = document.createTextNode(bestThing.indexOf('only'));
    destination = document.getElementById('17');
    destination.appendChild(kataText);
}

Q17();

function Q18() {
    let kata = document.createElement('span');
    let kataText = document.createTextNode(bestThing.indexOf('bit'));
    destination = document.getElementById('18');
    destination.appendChild(kataText);
}

Q18();

const doubleVowels = ['aa', 'ee', 'ii', 'oo', 'uu']

function Q19() {
    for (let y = 0; y < gotCities.length; y++) {
        for (let i = 0; i < doubleVowels.length; i++) {
            if (gotCities[y].includes(doubleVowels[i])) {
                let kata = document.createElement('span');
                let kataText = document.createTextNode(gotCities[y] + ',' + ' ');
                destination = document.getElementById('19');
                destination.appendChild(kataText);
            }
        }
    }

}
Q19();

function Q20() {
    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].endsWith('or')) {
            let kata = document.createElement('span');
            let kataText = document.createTextNode(lotrCitiesArray[i] + ',' + ' ');
            destination = document.getElementById('20');
            destination.appendChild(kataText);
        }
    }
}

Q20();

function Q21() {
    for (let i = 0; i < bestThingSplit.length; i++) {
        if (bestThingSplit[i].startsWith('b')) {
            let kata = document.createElement('span');
            let kataText = document.createTextNode(bestThingSplit[i] + ',' + ' ');
            destination = document.getElementById('21');
            destination.appendChild(kataText);
        }
    }
}

Q21();

function Q22() {
    if (lotrCitiesArray.includes('Mirkwood')) {
        let kata = document.createElement('span');
        let kataText = document.createTextNode('Yes');
        destination = document.getElementById('22');
        destination.appendChild(kataText);
    } else {
        let kata = document.createElement('span');
        let kataText = document.createTextNode('No');
        destination = document.getElementById('22');
        destination.appendChild(kataText);
    }
}

Q22();

function Q23() {
    if (lotrCitiesArray.includes('Hollywood')) {
        let kata = document.createElement('span');
        let kataText = document.createTextNode('Yes');
        destination = document.getElementById('23');
        destination.appendChild(kataText);
    } else {
        let kata = document.createElement('span');
        let kataText = document.createTextNode('No');
        destination = document.getElementById('23');
        destination.appendChild(kataText);
    }
}

Q23();

function Q24() {
    let kata = document.createElement('span');
    let kataText = document.createTextNode(lotrCitiesArray.indexOf('Mirkwood'));
    destination = document.getElementById('24');
    destination.appendChild(kataText);
}

Q24();

function Q25() {
    for (i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].includes(' ')) {
            let kata = document.createElement('span');
            let kataText = document.createTextNode(lotrCitiesArray[i]);
            destination = document.getElementById('25');
            destination.appendChild(kataText);
        }
    }
}

Q25();

function Q26() {
    for (i = (lotrCitiesArray.length - 1); i >= 0; i--) {
        let kata = document.createElement('span');
        let kataText = document.createTextNode(lotrCitiesArray[i] + ',' + ' ');
        destination = document.getElementById('26');
        destination.appendChild(kataText);
    }
}

Q26();

function Q27() {
    let lotrCitiesArrayA = [...lotrCitiesArray]
    lotrCitiesArrayA.sort();
    for (let i = 0; i < lotrCitiesArrayA.length; i++) {
        let kata = document.createElement('span');
        let kataText = document.createTextNode(lotrCitiesArrayA[i] + ',' + ' ');
        destination = document.getElementById('27');
        destination.appendChild(kataText);
    }
}

Q27();

function Q28() {
    let lotrCitiesArrayL = [...lotrCitiesArray]
    lotrCitiesArrayL.sort(function (a, b) { return a.length - b.length });
    let kata = document.createElement('span');
    let kataText = document.createTextNode(lotrCitiesArrayL);
    destination = document.getElementById('28');
    destination.appendChild(kataText);
}

Q28();

var lotrCitiesArrayP = [...lotrCitiesArray]
function Q29() {
    var popped = lotrCitiesArrayP.pop();
    let kata = document.createElement('span');
    let kataText = document.createTextNode(lotrCitiesArrayP);
    destination = document.getElementById('29');
    destination.appendChild(kataText);
}

Q29();

function Q30() {
    var lotrCitiesArrayPP = [...lotrCitiesArrayP]
    lotrCitiesArrayPP.push('Harad')
    let kata = document.createElement('span');
    let kataText = document.createTextNode(lotrCitiesArrayPP);
    destination = document.getElementById('30');
    destination.appendChild(kataText);
}
Q30();

var lotrCitiesArrayS = [...lotrCitiesArray]
function Q31() {
    lotrCitiesArrayS.shift()
    let kata = document.createElement('span');
    let kataText = document.createTextNode(lotrCitiesArrayS);
    destination = document.getElementById('31');
    destination.appendChild(kataText);
}
Q31();

function Q32() {
    lotrCitiesArrayS.unshift('Mordor')
    let kata = document.createElement('span');
    let kataText = document.createTextNode(lotrCitiesArrayS);
    destination = document.getElementById('32');
    destination.appendChild(kataText);
}
Q32();


// Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array
// Previous
