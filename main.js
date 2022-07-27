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
        var result_text = document.getElementById("animal_span");
        var accu_text = document.getElementById("confi_span");
        result_text.innerHTML = results[0].label;
        accu_text.innerHTML = Math.round(results[0].confidence);
        var img_placement = document.getElementById("picture");
        if (result_text.innerHTML =="Background Noise"){
            img_placement.src = "ear.png";
        }
        else if (result_text.innerHTML == "Bird Tweeting"){
            img_placement.src = "birdie.png";
        }
        else if (result_text.innerHTML == "Cat Meowing"){
            img_placement.src = "cat.png";
        }
        else if (result_text.innerHTML == "Dog Barking"){
            img_placement.src = "dog barking.webp";
        }
        else if (result_text.innerHTML == "Lion Roar"){
            img_placement.src = "lion.png"
        }
        else{
            img_placement.src = "rooster.webp"
        }
    }
}
