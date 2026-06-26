const textArea = document.querySelector("textarea");
const playBtn = document.querySelector("button");
let selectVoice = document.querySelector("select");

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  voices.forEach((voice, i) => {
    selectVoice.options[i] = new Option(voice.name, i);
  });
};

selectVoice.addEventListener("change", () => {
  speech.voice = voices[selectVoice.value];
});

playBtn.addEventListener("click", (e) => {
  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance();

  speech.text = textArea.value;
  speech.voice = voices[selectVoice.value];

  window.speechSynthesis.speak(speech);
});
