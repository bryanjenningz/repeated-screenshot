const input = document.querySelector('#interval-input');
const submitButton = document.querySelector('#start-button');
const cancelButton = document.querySelector('#stop-button');

const state = {
  clearIntervalId: null,
  intervalTime: 1000
};

const takeScreenshot = () => {
  const downloadImage = dataUrl => {
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'screenshot.jpg');
    downloadLink.setAttribute('href', dataUrl);
    downloadLink.dispatchEvent(new MouseEvent('click'));
  };

  chrome.runtime.sendMessage({}, downloadImage);
};

input.addEventListener('change', () => {
  state.intervalTime = Number(input.value) > 0 ? Number(input.value) * 1000 : 1000;
});

submitButton.addEventListener('click', () => {
  state.clearIntervalId = setInterval(takeScreenshot, state.intervalTime);
});

cancelButton.addEventListener('click', () => {
  clearInterval(state.clearIntervalId);
});
