function introduction(string) {
    if (string === "Aki") {
        return "Hi, my name is Aki.";
    } else if (string === "Samip") {
        return "Hi, my name is Samip.";
    }
}
let name, language

function introductionWithLanguage(name, language) {
    console.log(`"Hi, my name is ${name} and I am learning to program in ${language}."`);
    if (name === "Aki") {
        return "Hi, my name is Aki and I am learning to program in Ember.js.";
    } else if (name === "Samip") {
        return "Hi, my name is Samip and I am learning to program in React.";
    }
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`"Hi, my name is ${name} and I am learning to program in ${language}."`);
    if (name === "Gracie" && language === "JavaScript") {
        return "Hi, my name is Gracie and I am learning to program in JavaScript.";
    } else if (name === "Gracie", language == "Python") {
        return "Hi, my name is Gracie and I am learning to program in Python.";
    }
}