var a = 1000,
    b = 20,
    c = 30;
if(a>b && a>c){
    if(b>c){
        console.log("Thứ tự tăng dấn: "+a+" "+b+" "+c+" ");
    } else{
        console.log("Thứ tự tăng dấn: "+a+" "+c+" "+b+" ");
    }
}
else if(b>a && b > c){
    if(a>c){
        console.log("Thứ tự tăng dấn: "+b+" "+a+" "+c+" ");
    } else{
        console.log("Thứ tự tăng dấn: "+b+" "+a+" "+c+" ");
    }
} else if(c>a && c > b){
    if(a>b){
        console.log("Thứ tự tăng dấn: "+c+" "+a+" "+b+"");
    } else{
        console.log("Thứ tự tăng dấn: "+c+" "+b+" "+a+"");
    }
}