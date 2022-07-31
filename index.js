var buttonTransalte = document.querySelector("#btn-translator");
var txt = document.querySelector(".txt-input");
var outputdiv = document.querySelector("#output");

// outputdiv.innerText = "Nishtha"

var serverUrl = "	https://api.funtranslations.com/translate/minion.json";

function getServerURL(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error is :", error);
    alert("Try Again!")
}


function clickHandler() {
    var inputText = txt.value;

    fetch(getServerURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputdiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

buttonTransalte.addEventListener("click", clickHandler);