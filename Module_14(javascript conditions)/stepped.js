const price=7000;
if(price >= 5000){
    // 10% discount //
    const discount= price * 10/100;
    const payAmount= price - discount;
    console.log(payAmount);
}
else{
    console.log(price);
}