
//https://www.britannica.com/science/entropy-physics
//https://machinelearningmastery.com/what-is-information-entropy/
//https://rosettacode.org/wiki/Entropy

function entropy(str) {
    const len = str.length;

    // Build a frequency map from the string.
    const frequencies = Array.from(str)
        .reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {})

    // Sum the frequency of each character.
    return Object.values(frequencies)
        .reduce((sum, f) => sum - f / len * Math.log2(f / len), 0)
}

function warnUser(e) {
    // console.log('value ' + e.target.value);
    if (e.target.value.includes('@')) {
        document.getElementById('userwarn').style.visibility = 'visible';
    } else {
        document.getElementById('userwarn').style.visibility = 'hidden';
    }
}

function warnPassword(e) {
    // console.log('value ' + e.target.value);
    const pwStrength = document.getElementById('pwstrength');
    const pwText = document.getElementById('passwordwarn');
    const strength = entropy(e.target.value);

    pwStrength.style.backgroundImage = '';

    if (strength <= 3) {
        pwText.style.color = 'red';
        pwText.innerText = "This password is too weak";
        pwText.style.visibility = 'visible';
        pwStrength.style.backgroundColor = 'red';
    }

    if ( strength > 3 && strength <= 3.5) {
        pwText.style.color = 'orangered';
        pwText.innerText = "Password is a bit too weak.";
        pwText.style.visibility = 'visible';
        pwStrength.style.backgroundColor = 'orange';
    }

    if ( strength > 3.5) {
        pwText.style.color = 'green';
        pwText.innerText = "Strong password";
        pwStrength.style.backgroundColor = 'green';
    }

    if ( strength > 4) {
        pwText.style.color = 'green';
        pwText.innerText = "Great Password!"
        pwStrength.style.backgroundImage = 'radial-gradient( green, lightgreen, green)';
    }

}

function clearPwWarn(){
    const pwText = document.getElementById('passwordwarn');
    pwText.style.visibility = 'hidden';
}



function initIndex() {
    console.log("init");
    document.getElementById('username').addEventListener('keyup', warnUser, false);
    document.getElementById('password').addEventListener('keyup', warnPassword, false);
    document.getElementById('password').addEventListener('blur', clearPwWarn, false);

}

