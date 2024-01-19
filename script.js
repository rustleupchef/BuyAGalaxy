let money = 200;
let Galaxies;
let point = 0;
let Purchased = [];
fetch("https://raw.githubusercontent.com/rustleupchef/BuyAGalaxy/main/Galaxies.csv")
    .then((response) => response.text())
    .then((data) => {
        Galaxies = data.split("\n");
    });
function next() {
    point += 1;
    if (point > Galaxies.length - 2) {
        point = 0;
    }
    let info = Galaxies[point].split("|")[0].split(",");
    document.getElementById("Name").innerHTML = info[0];
    document.getElementById("Pic").src = info[1];
    document.getElementById("Cost").innerHTML = info[2];
    if (Galaxies[point].split("|").length === 2) {
        document.getElementById("Cost").innerHTML = "0";
        document.getElementById("Name").innerHTML += " owned by " + document.getElementById("Identification").value;
    }
}
function purchase() {
    if (money >= parseInt(document.getElementById("Cost").innerHTML)) {
        money -= parseInt(document.getElementById("Cost").innerHTML);
        document.getElementById("Moolah").innerHTML = "$" + money.toString();
        if (parseInt(document.getElementById("Cost").innerHTML) > 0) {    
            document.getElementById("Name").innerHTML += " owned by " + document.getElementById("Identification").value + parseInt(document.getElementById("Cost").innerHTML);
        }
        document.getElementById("Cost").innerHTML = "0";
        if (Galaxies[point].split("|").length < 2) {
            Galaxies[point] += "|0"
        }
    }
}
