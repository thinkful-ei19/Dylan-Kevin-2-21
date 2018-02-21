function decode(word){
    const cipher = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };
        if(word[0]=== 'a'){
            return word[cipher.a];
        }
        else if(word[0]=== 'b'){
            return word[cipher.b];
        }
        else if(word[0]=== 'c'){
            return word[cipher.c];
        }
        else if(word[0]=== 'd'){
            return word[cipher.d];
        }
        else {
            return ' ';
        }
}
// let log = decode('craft block argon meter bells brown croon droop');
// console.log(log);

function decodeWords(string) {
    let split = string.split(' ');
    let splitMap = split.map(newWord => {
        let answer = '';
        let letter = decode(newWord);
        answer += letter;
        return answer;
    });
    return splitMap.join('');
}

let test = decodeWords('craft block argon meter bells brown croon droop');
console.log(test);