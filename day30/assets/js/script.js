var optionStyleBtn = document.querySelectorAll("button");
console.log(optionStyleBtn);
var fontColor = document.querySelector(".font-color");

var fontStyle = function(aCommandName, aShowDefaultUI, aValueArgument){
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}

optionStyleBtn.forEach((button)=>{
    button.addEventListener("click", function(){
        fontStyle(button.id,false,null)
    })
})

var divContent = document.querySelector(".textarea");

var charCountDisplay = document.querySelector(".char");
var wordCountDisplay = document.querySelector(".word");

divContent.addEventListener('input', function() {
    var content = divContent.innerText;
    // Đếm số từ
    var wordCount = countWords(content);
    wordCountDisplay.innerHTML = `Số kí tự : ` + wordCount;

    // Đếm số ký tự (bao gồm cả khoảng trắng)
    var charCount = countCharacters(content)
    charCountDisplay.innerHTML = `Số từ : ` + charCount;
});
function countCharacters(str) {
    return str.replace(/\s/g, '').length;
}
function countWords(str) {
    const words = str.split(/\s+/).filter(function(word) {
        return word.length > 0;
    });
    return words.length;
}

console.log(fontColor);
fontColor.addEventListener("change", function(e){
    console.log(this);
    fontStyle(fontColor.id, false, fontColor.value);
})
