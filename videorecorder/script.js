const videoElement = document.getElementById('videoElement');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
let stream = null;

// Function to start the camera
async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;
    startButton.disabled = true;
    stopButton.disabled = false;
  } catch (error) {
    console.error('Error accessing the camera:', error);
    alert('Unable to access the camera. Please check your permissions or device settings.');
  }
}

// Function to stop the camera
function stopCamera() {
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoElement.srcObject = null;
    stream = null;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
}

// Event listeners
startButton.addEventListener('click', startCamera);
stopButton.addEventListener('click', stopCamera);
