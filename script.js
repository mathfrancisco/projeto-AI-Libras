const video = document.getElementById('video');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resultDiv = document.getElementById('result');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(err => {
        console.error("Error accessing webcam:", err);
        alert("Unable to access webcam. Please check permissions.");
    });

startButton.addEventListener('click', () => {
    startRecognition();
});

stopButton.addEventListener('click', () => {
    stopRecognition();
});

function startRecognition() {
    startButton.disabled = true;
    stopButton.disabled = false;

    resultDiv.innerText = "Recording...";

    // Capture frames and send to backend for processing
}

function stopRecognition() {
    startButton.disabled = false;
    stopButton.disabled = true;

    resultDiv.innerText = "Recognition stopped.";
    
    // Stop capturing frames and send final data to backend
}
