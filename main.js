Webcam.set({
    width: 530,
    height: 500,
    image_format: "png",
    png_quality: 90
}); 
Webcam.attach("#camera");
function takesnap(){
    Webcam.snap(function (data_uri){
        document.getElementById("output").innerHTML = "<img id='captured_image' src =" + data_uri + ">";
    });
}

console.log("ml5.version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1gcYv3uST/", model_loaded);

function model_loaded() {
    console.log("model loaded.");
}