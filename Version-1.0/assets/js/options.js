document.getElementById("btnCarregar").onclick = function() {
    let comboMotos = document.getElementById("cboMotos");

    let opt0 = document.createElement("option");
    opt0.value = "0";
    opt0.text = "";
    comboMotos.add(opt0, comboMotos.options[0]);

    let opt1 = document.createElement("option");
    opt1.value = "hon";
    opt1.text = "Honda";
    comboMotos.add(opt1, comboMotos.options[1]);

    let opt2 = document.createElement("option");
    opt2.value = "kawa";
    opt2.text = "Kawasaki";
    comboMotos.add(opt2, comboMotos.options[2]);

    let opt3 = document.createElement("option");
    opt3.value = "suz";
    opt3.text = "Suzuki";
    comboMotos.add(opt3, comboMotos.options[3]);

    let opt3 = document.createElement("option");
    opt3.value = "yam";
    opt3.text = "Yamaha";
    comboMotos.add(opt3, comboMotos.options[3]);

};

document.getElementById("btnInfo").onclick = function() {
    let comboMotos = document.getElementById("cboMotos");
    console.log("O indice é: " + comboMotos.selectedIndex);
    console.log("O texto é: " + comboMotos.options[comboMotos.selectedIndex].text);
    console.log("A chave é: " + comboMotos.options[comboMotos.selectedIndex].value);
};

document.getElementById("btnRemoverTodos").onclick = function () {
    let comboMotos = document.getElementById("cboMotos");
    while (comboMotos.length) {
        comboMotos.remove(0);
    }
};