var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;
var camera = document.getElementById("camera");
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
Webcam.set({
    height: 250,
    width: 360,
    image_format: 'png',
    image_quality: 90
});