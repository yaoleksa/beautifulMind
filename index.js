const root = document.getElementById('root');
const abstract = document.createElement('p');
const p = document.createElement('p');
const generator = () => {
    let wordList = '';
    let alphabet = 'АБВГДЖЗИІЇЙКЛМНОПРСТУФХЦШЩЮЯЬ';
    let l = alphabet.length + 1;
    let word = '';
    let desiredWord = '';
    let counter = 0;
    let rl = null;
    for(let i = 0; i < 10; i += 0){
        rl = parseInt(Math.random() * l);
        word += alphabet[rl];
        if(word.length == 3){
            counter++;
            wordList += `${counter} ${word} \n`;
            word = '';
        }
        if('Х' == alphabet[rl] && desiredWord.length == 0){
            desiredWord += alphabet[rl];
        }
        if('У' == alphabet[rl] && desiredWord.length == 1){
            desiredWord += alphabet[rl];
        }
        if('Й' == alphabet[rl] && desiredWord.length ==2){
            desiredWord += alphabet[rl];
            counter++;
            wordList += `${counter} ${desiredWord} \n`;
            break;
        }
    }
    p.innerText = wordList;
    abstract.innerText = `Congratulations! Program running randomizer ${counter} times and has yield ХУЙ. \n` +
                         'As you can see ХУЙ it\'s not always about rude. In that case ХУЙ it\'s about \n' +
                         'proggramming and intellect';
}
generator();
root.appendChild(abstract);
root.appendChild(p);