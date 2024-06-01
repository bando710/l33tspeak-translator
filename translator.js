const leetspeakToEnglish = {
    '4': 'a', '@': 'a', '8': 'b', '(': 'c', '<': 'c', '3': 'e', '6': 'g', '9': 'g',
    '1': 'i', '!': 'i', '0': 'o', '5': 's', '$': 's', '7': 't', '+': 't', '2': 'z'
};

const englishToLeetspeak = Object.fromEntries(Object.entries(leetspeakToEnglish).map(([key, value]) => [value.toUpperCase(), key]));

function translateLeetspeakToEnglish(text) {
    return text.split('').map(char => leetspeakToEnglish[char.toLowerCase()] || char).join('');
}

function translateEnglishToLeetspeak(text) {
    return text.toLowerCase().split('').map(char => englishToLeetspeak[char.toUpperCase()] || char).join('');
}

document.getElementById('translator-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const text = document.getElementById('text').value;
    const direction = document.getElementById('direction').value;
    let result;
    
    if (direction === 'toEnglish') {
        result = translateLeetspeakToEnglish(text).toLowerCase();
    } else {
        result = translateEnglishToLeetspeak(text).toLowerCase();
    }
    
    document.getElementById('result').innerText = result;
});