function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MyMoneyBox: $${saveCoins}`)
}

moneyBox(100)
moneyBox(50)

function myMoneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MyMoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
const myMoney = myMoneyBox();
myMoney(100)
myMoney(50)
myMoney(50)


const moneyBoxAna = myMoneyBox();

moneyBoxAna(10)
moneyBoxAna(70)
moneyBoxAna()