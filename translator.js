const leetspeakToEnglish = {
    '4': 'A', '@': 'A', '8': 'B', '(': 'C', '<': 'C', '3': 'E', '6': 'G', '9': 'G',
    '1': 'I', '!': 'I', '0': 'O', '5': 'S', '$': 'S', '7': 'T', '+': 'T', '2': 'Z'
};

const englishToLeetspeak = Object.fromEntries(Object.entries(leetspeakToEnglish).map(([key, value]) => [value, key]));

function translateLeetspeakToEnglish(text) {
    return text.split('').map(char => leetspeakToEnglish[char] || char).join('');
}

function translateEnglishToLeetspeak(text) {
    return text.toUpperCase().split('').map(char => englishToLeetspeak[char] || char).join('');
}

document.getElementById('translator-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const text = document.getElementById('text').value;
    const direction = document.getElementById('direction').value;
    let result;
    
    if (direction === 'toEnglish') {
        result = translateLeetspeakToEnglish(text);
    } else {
        result = translateEnglishToLeetspeak(text);
    }
    
    document.getElementById('result').innerText = result;
});
