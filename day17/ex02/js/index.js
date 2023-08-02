var soDien = 511,
    money ;

if(0 < soDien && soDien <= 50){
    money = 1678 * soDien;
    console.log(`Tien dien: ${money} vnd`);
} else if(50< soDien && soDien <= 100){
    money = 1678 *(soDien - 50) + 1678 * 50;
    console.log(`Tien dien: ${money} vnd` );
} else if (100 < soDien && soDien <= 200){
    money = 2014 *(soDien - 100) + 1734 * 50 + 1678 * 50;
    console.log(`Tien dien: ${money} vnd`);
} else if( 200 < soDien && soDien <= 300){
    money = 2536 * (soDien - 200) + 2014 * 100 + 1734 * 50 + 1678 * 50;
    console.log(`Tien dien: ${money} vnd`);
} else if(300 < soDien && soDien <= 400){
    money = 2834 * (soDien- 300) + 2536 * 100 + 2014 * 100 + 1734 * 50 + 1678 * 50;
    console.log(`Tien dien: ${money} vnd`);
} else if(400 < soDien){
    money = 2927*(soDien-400) + 2834 * 100 + 2536 * 100 + 2014 * 100 + 1734 * 50 + 1678 * 50;
    console.log(`Tien dien: ${money} vnd`);
}