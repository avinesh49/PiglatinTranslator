var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/pig-latin.json";

function getTranslatedUrl(text){
	return url+"?"+"text="+text;
}

function clickEventHandler(){
	var inputText = txtInput.value;

	fetch(getTranslatedUrl(inputText))
	.then(response => response.json())
	.then(json => {
		var translatedtext = json.contents.translated;
		output.innerText = translatedtext;
		})
}

btnTranslate.addEventListener("click",clickEventHandler);
