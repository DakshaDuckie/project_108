function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tdprPmR_f/model.json", modelReady);
}

function modelReady() {
    console.log("model is loaded");
    console.log("ml5 version is: " + ml5.version);
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}