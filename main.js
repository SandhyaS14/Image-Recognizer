Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
}); 
camera = document.getElementById("camera");
Webcam.attach(camera);
function takesnap(){
    Webcam.snap(function (data_uri){
        document.getElementById("output").innerHTML = "<img id='captured_image' src =" + data_uri + ">";
    });
}

console.log("ml5.version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eRjVQEkd8/model.json", model_loaded);

function model_loaded() {
    console.log("model loaded.");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, getResult);
}

function getResult(error, results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("objectname").innerHTML = results[0].label;
        document.getElementById("objectaccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}