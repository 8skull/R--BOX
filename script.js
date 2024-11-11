const tropes = [
    "Cowboy/Western", "Medieval", "Fantasy", "Sci-Fi", "Post-Apocalyptic", 
    "Dystopian", "Romance", "Horror", "Mystery", "Thriller", 
    "Adventure", "Historical", "Comedy", "Drama", "Tragedy", 
    "Superhero", "Noir", "Indian", "Spanish", "Swedish", "occult", ""
];

const favorites = [
    "In the underground","Before words were invented", "Traditional gender roles", 
    "Comedy", "Drama", "Tragedy"
];

const gestures = [
    "tensing the interior mouth(asshole)", "Nodding", "Pointing", "Waving", "Shrugging", "Thumbs Up", 
    "Facepalm", "Subtle sacrum jump (15 sec tone in)" "Saluting", "Clapping", "Jazz Hands", "Bow", 
    "Crossed Arms", "Hands on Hips", "Opening Tai Chi", "Step standing like Joel Traore", "Dimah/Harmon baby steps"
];

const emotions = [
    "Happy", "Sad", "Angry", "Surprised", "Confused", 
    "Excited", "Nervous", "Proud", "Jealous", "Bored", 
    "Fearful", "Relieved"
];

const voices = [
    "Kalisa (soft motherly)", "Attenburugh", "Italian american", "J Krishnamurti", "Clear", 
    "Mellow", "High-Pitched", "Deep", "Excited", "Calm", 
    "Monotone", "Squeaky"
];

const referencesMisinterpret = [
    "Tiny step (Todd) plan förberett av en miljon/rutshkanan in i tiny cafe (venue).", 
    "Loud praying - prata till punkt (Samyama).", 
    "As New", 
    "As New", 
    "Talkshow host “We have”", 
    "Calling in* (talkshow host)"
];

const secrets = [
    "Director specific", "Pin loop", 
    "FULL <3 but Q", "-/+", "Empasize the end of sentence"
];

// Function to play bell sound
function playBellSound() {
    const bellSound = document.getElementById('bellSound');
    bellSound.currentTime = 0; // Reset to start
    bellSound.play();
}

// Random Trope Generator
document.getElementById('generatePromptBtn').addEventListener('click', () => {
    const randomTrope = tropes[Math.floor(Math.random() * tropes.length)];
    document.getElementById('randomPrompt').innerText = `Trope: ${randomTrope}`;
    playBellSound(); // Play bell sound
});

// Random Gesture Generator
document.getElementById('generateGestureBtn').addEventListener('click', () => {
    const randomGesture = gestures[Math.floor(Math.random() * gestures.length)];
    document.getElementById('gesturePrompt').innerText = `Gesture: ${randomGesture}`;
    playBellSound(); // Play bell sound
});

// Random Emotion Generator
document.getElementById('generateEmotionBtn').addEventListener('click', () => {
    const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
    document.getElementById('emotionPrompt').innerText = `Emotion: ${randomEmotion}`;
    playBellSound(); // Play bell sound
});

// Random Voice Generator
document.getElementById('generateVoiceBtn').addEventListener('click', () => {
    const randomVoice = voices[Math.floor(Math.random() * voices.length)];
    document.getElementById('voicePrompt').innerText = `Voice: ${randomVoice}`;
    playBellSound(); // Play bell sound
});

// Random Favorite Trope Generator
document.getElementById('generateFavoriteBtn').addEventListener('click', () => {
    const randomFavorite = favorites[Math.floor(Math.random() * favorites.length)];
    document.getElementById('favoritePrompt').innerText = `Favorite Trope: ${randomFavorite}`;
    playBellSound(); // Play bell sound
});

// Random Reference-Misinterpret Generator
document.getElementById('generateReferencesBtn').addEventListener('click', () => {
    const randomReference = referencesMisinterpret[Math.floor(Math.random() * referencesMisinterpret.length)];
    document.getElementById('referencePrompt').innerText = `Reference: ${randomReference}`;
    playBellSound(); // Play bell sound
});

// Random Secrets Generator
document.getElementById('generateSecretsBtn').addEventListener('click', () => {
    const randomSecret = secrets[Math.floor(Math.random() * secrets.length)];
    document.getElementById('secretPrompt').innerText = `Secret: ${randomSecret}`;
    playBellSound(); // Play bell sound
});

// Timer functionality
let timer;
document.getElementById('timerBtn').addEventListener('click', () => {
    const timerWindow = document.getElementById('timerWindow');
    timerWindow.style.display = timerWindow.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('startTimerBtn').addEventListener('click', () => {
    const interval = parseInt(document.getElementById('interval').value) * 60000; // Convert minutes to milliseconds
    const timerMessage = document.getElementById('timerMessage');
    timerMessage.innerText = `Timer started for ${document.getElementById('interval').value} minutes.`;

    clearInterval(timer); // Clear any existing timer
    timer = setInterval(() => {
        const randomTrope = tropes[Math.floor(Math.random() * tropes.length)];
        document.getElementById('randomPrompt').innerText = `Trope: ${randomTrope}`;
        playBellSound();
    }, interval);
});

document.getElementById('closeTimerBtn').addEventListener('click', () => {
    clearInterval(timer);
    document.getElementById('timerMessage').innerText = "Timer stopped.";
    document.getElementById('timerWindow').style.display = 'none';
});
