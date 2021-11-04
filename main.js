document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
    var inp = document.getElementById("input").value;
    var pinp = parseInt(inp);
    var num = Math.floor((Math.random() * 10) + 1);
    if (pinp === num) {
        alert("you win \nThe number was " + num);
    } else {
        alert(" you loose \nThe number was " + num);
    }
}