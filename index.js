let names = ["Craig", "Lewis", "George"];
const a = "surprise";


function writeCards(names, a) {
    let results = [];
    for (let i = 0; i < names.length; i++) {
        results.push(`Thank you, ${names[i]}, for the wonderful ${a} gift!`);
    }
    return results;
}

function countDown(){
    let i=10;
    while (i >= 0) {
        console.log(i--);
    }
}