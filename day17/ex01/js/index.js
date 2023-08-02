var distance = 126,
    distancel1 = 1,
    distancel2 = 5,
    moneyl1 = 15000,
    moneyl2 = 13500,
    moneyl3 = 11000;

if( 0< distance  && distance <= 1){
    money = moneyl1 * distance; 
    console.log(`So tien taxi : ${money}` );
} else if(1< distance && distance <= 5 ){
    money = moneyl2 * (distance - 1) + moneyl1 * distancel1;
    console.log(`So tien taxi : ${money}` );
} else if ( distance > 5){
    if(distance <= 120){     
        money = moneyl3 * (distance - distancel2) + moneyl2 * (distancel2 - distancel1)+  moneyl1 * distancel1;   
       console.log(`So tien taxi : ${money}` );
    } else{
        money= (moneyl3 * (distance - distancel2) + moneyl2 * (distancel2 - distancel1) +  moneyl1 * distancel1)*(1-0.1); 
        console.log(`So tien taxi : ${money}` );
    }
} 
