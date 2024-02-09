const startButton = document.getElementById('start');
startButton.addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        processAudio(stream);
    } catch (error) {
        console.error('Error accessing the microphone', error);
    }
});

function processAudio(stream) {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.fftSize = 2048;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkAudio = () => {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
        }
        let average = sum / bufferLength;

        // Simple check for "blow" - adjust threshold as needed
        if (average > 60) { // Threshold value, may need adjustment
            blowOutCandle('candle1');
        }

        requestAnimationFrame(checkAudio);
    };

    checkAudio();
}

function blowOutCandle(candleId) {
    const candle = document.getElementById(candleId);
    candle.src = 'images/cake2.png'; // Assuming 'cake2.png' is the extinguished candle

    // Wait for a short period to simulate the candle being blown out, then start the hearts raining
    setTimeout(createHearts, 500); // Adjust delay as necessary
}


function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heartsContainer.appendChild(heart);
    }
}

// Ensure DOM is fully loaded before executing
document.addEventListener('DOMContentLoaded', createHearts);

