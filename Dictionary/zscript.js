let disp = document.getElementsByClassName("container")[0]
let query = document.getElementById("qu")
let submit = document.getElementById("submit")

let word = "fuck"
let result;
let truedata = { "partOfSpeech": [], "synonyms": [], "antonyms": [], "definitionobj": [], }
let dispdata = []
let text
let interimdefs = []
let a
let b = ``


myDisplay = (result) => {
    meanings = result[0].meanings
    meanings.forEach((element, index) => {
        truedata.synonyms.push(element.synonyms)
        truedata.antonyms.push(element.antonyms)
        truedata.definitionobj.push(element.definitions)
        truedata.partOfSpeech.push(element.partOfSpeech)
        dispdata.push([{}])

    });

    meanings.forEach((element, index) => {
        interimsyn = truedata.synonyms[index]
        interimant = truedata.antonyms[index]
        truedata.definitionobj[index].forEach(element => {
            interimdefs.push(element.definition)
        });

        dispdata[index].partOfSpeech = truedata.partOfSpeech[index]
        dispdata[index].synonyms = interimsyn.join(',  ')
        dispdata[index].antonyms = interimant.join(',  ')
        dispdata[index].definitions = interimdefs
        interimdefs = []
    });

}

print = (dispdata) => {

    dispdata.forEach((element, index) => {
        dispdata[index].definitions.forEach((element, index) => {
            b = b + `<div class="definitionset">${index + 1} : ${element}</div>`
        });

        a = disp.innerHTML
        if (dispdata[index].synonyms == '') {
            dispdata[index].synonyms = 'None'
        }
        if (dispdata[index].antonyms == '') {
            dispdata[index].antonyms = 'None'
        }
        disp.innerHTML = a + `<div class="set"><div class="partofspeech"><b>${index + 1}) PART OF SPEECH : ${dispdata[index].partOfSpeech}</b><p></p></div>
        <div class="definitions"><b>DEFINITIONS : </b><p>${b} </p></div>
        <div class="synonyms"><b> SYNONYMS : </b><p>${dispdata[index].synonyms}</p></div>
        <div class="antonyms"><b> ANTONYMS : </b><p>${dispdata[index].antonyms}</p></div></div>`
        
        b = ``
    });

}

async function getText(word) {
    let file = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let myObject = await fetch(file);
    let myText = await myObject.json();
    myDisplay(myText);
    print(dispdata)
}

submit.addEventListener("click", ()=>{
    disp.innerHTML = ``;
    a = ``
    b = ``
    word = query.value
    getText(word)
})







