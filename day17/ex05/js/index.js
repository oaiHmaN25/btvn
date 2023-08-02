var n = 5;
    number = 1;
    trinangle = '';
for(var i = 1; i <= n ; i++){
    for(var j = 0; j <i;  j++ ){
        trinangle += number + ' ';
        number++;
    }
    trinangle += '\n';

}
console.log(trinangle);