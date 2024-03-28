var globalPrimeOrComposite = '';

function check(array) {
    if (array != undefined) {
        return array;
    } else {
        return 1;
    }
}

function deleteLastLine() {
    var logbox = document.getElementById('logbox');
    var children = logbox.childNodes;
    if (children.length > 0) {
        logbox.removeChild(children[children.length - 1]);
    }
}

function appendElem(n) {
    var newElement = document.createElement('h2');
    if (globalPrimeOrComposite == 'P') {
        newElement.innerText = n + ' is a prime number';
    } else if (globalPrimeOrComposite == 'C') {
        newElement.innerText = n + ' is a composite number';
    }
    document.getElementById('logbox').appendChild(newElement);
}

function calculate() {
    var divisibilityValues = [];
    globalPrimeOrComposite = '';
    document.getElementById('ResultLabel').innerHTML = '';
    document.getElementById('divisibility1').innerHTML = '';
    document.getElementById('divisibility2').innerHTML = '';
    document.getElementById('divisibility3').innerHTML = '';
    document.getElementById('divisibility4').innerHTML = '';
    document.getElementById('divisibility5').innerHTML = '';
    document.getElementById('error').innerHTML = 'Errors will be shown here.';
    var input = Math.floor(document.getElementById('input').value);
    for (i = 2; i <= (input - 1); i++) {
        if (input / i == Math.floor(input / i)) {
            divisibilityValues.push(i);
            console.log('x');
        }
    } if (input == 2) {
        globalPrimeOrComposite = "P";
        console.log('p');
        document.getElementById('ResultLabel').innerHTML = 'The number is a prime.';

    }
    if (divisibilityValues[0] != undefined) {
        globalPrimeOrComposite = "C";
        document.getElementById('ResultLabel').innerHTML = 'The number is composite';
        document.getElementById('divisibility1').innerHTML = 'Its divisible by ' + divisibilityValues[0] + '.';
        document.getElementById('divisibility2').innerHTML = 'Its divisible by ' + check(divisibilityValues[1]) + '.';
        document.getElementById('divisibility3').innerHTML = 'Its divisible by ' + check(divisibilityValues[2]) + '.';
        document.getElementById('divisibility4').innerHTML = 'Its divisible by ' + check(divisibilityValues[3]) + '.';
        document.getElementById('divisibility5').innerHTML = 'Its divisible by ' + check(divisibilityValues[4]) + '.';
        console.log('z');
    } else {
        document.getElementById('ResultLabel').innerHTML = 'The number is prime.';
        console.log('wq');
        globalPrimeOrComposite = "P";
    }
    appendElem(input);
}
//document.getElementById('Result').innerHTML = 'The number is composite.';
//document.getElementById('divisibility').innerHTML = 'Its divisible by ' + i + '.';