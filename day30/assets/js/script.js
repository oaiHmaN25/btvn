var optionStyleBtn = document.querySelectorAll("button");
var btnPdf = document.querySelector(".pdf");
// console.log(optionStyleBtn);
var fontColor = document.querySelector(".font-color");
var divContent = document.querySelector(".textarea");
var charCountDisplay = document.querySelector(".char");
var wordCountDisplay = document.querySelector(".word");
var btnTxt = document.querySelector(".txt");
var fileName = document.querySelector(".filename");
var content = divContent.innerText;
var btnNew = document.querySelector(".new-text")
var fontStyle = function(aCommandName, aShowDefaultUI, aValueArgument){
    document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
}

optionStyleBtn.forEach((button)=>{
    button.addEventListener("click", function(){
        fontStyle(button.id,false,null)
    })
})



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
});

btnTxt.addEventListener("click", function download(){
    var content = divContent.innerText;

    // Tạo Blob từ nội dung
    var blob = new Blob([content], { type: 'text/plain' });
    downloadFile(blob,fileName.value);
})

function downloadFile(blob,filename){
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    document.body.removeChild(a);
}
btnPdf.addEventListener("click", function () {
    // console.log(`ok`);
    
    var opt = {
        margin:       1,
        filename:     fileName.value,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf(content,opt)
})
btnNew.addEventListener("click",function(){
    // console.log(`ok`);
    divContent.innerHTML = "";
    fileName.value = "untitled"
    charCountDisplay.innerHTML = "Số kí tự : 0"; 
    wordCountDisplay.innerHTML = "Số từ : 0"
})