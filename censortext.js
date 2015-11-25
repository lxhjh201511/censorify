/**
 * Created by xiaohui on 2015/11/25.
 */
var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr){
    for (idx in customCensoredWords){
        inStr=inStr.replace(censoredWords[idx],"****");
    }
    for (idx in customCensoredWords){
        inStr=instr.replace(customCensoredWords[idx],"****");
    }
    return inStr;
}
function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensorWords(){
    return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredWords=getCensorWords;
