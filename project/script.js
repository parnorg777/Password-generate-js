let num = document.querySelector("#passlength")
let passlength = document.querySelector("#length")
let input_1 = document.querySelector("#lettersLw")
let input_2 = document.querySelector("#lettersUp")
let input_3 = document.querySelector("#number")
let input_4 = document.querySelector("#SpSim")
let input_5 = document.querySelector("#DopSim")
let input_6 = document.querySelector("#AllSim")
let password = document.querySelector("#password")
let img = document.getElementById("img")
let mod = document.getElementById("mod")
let copyBut = document.querySelector("#copy")

let arr_1 = ["q","w","e","r","t","y","u","i","o","p","p","a",
    "s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]

let arr_2 = ["Q","W","E","R","T","Y","U","I","O","P","P","A","S","D","F",
    "G","H","J","K","L","Z","X","C","V","B","N","M",]

let arr_3 = ["1","2","3","4","5","6","7","8","9","0",
    "1","2","3","4","5","6","7","8","9","0",]

let arr_4 = ["#","$","%","&","?"]

let arr_5 = ["<",">","*","(",")","-","!","@",":",";","_","/","|"]

function range() {
    num.value = passlength.value
}
function GenPass() {
    let pass = ""
    let sim = num.value
    let arr = []

    clearInterval(t);
    img.src = "images/5757665.png"
    mod.hidden = true
    copyBut.disabled = false
    i = 0

    if(input_1.checked == false && input_2.checked == false && input_3.checked == false &&
    input_4.checked == false && input_5.checked == false) {
        input_1.checked = true
    }
    if(input_1.checked == true) 
        arr = arr.concat(arr_1) 
    if(input_2.checked == true) 
        arr = arr.concat(arr_2)
    if(input_3.checked == true) 
        arr = arr.concat(arr_3)
    if(input_4.checked == true)
        arr = arr.concat(arr_4)
    if(input_5.checked == true)
        arr = arr.concat(arr_5)
    
    for(let i = 0; i < sim; i++) {
        pass += (arr[Math.floor(Math.random() * arr.length)])
    }
    password.value = pass
}

function AllSimvols() {
    if(input_6.checked == true) {
        input_1.checked = true
        input_2.checked = true
        input_3.checked = true
        input_4.checked = true
        input_5.checked = true
    }
    if(input_6.checked == false) {
        input_1.checked = false
        input_2.checked = false
        input_3.checked = false
        input_4.checked = false
        input_5.checked = false
    }
}
function proverka() {
    if(input_1.checked == true && input_2.checked == true && input_3.checked == true &&
    input_4.checked == true && input_5.checked == true) {
        input_6.checked = true
    }
    if(input_1.checked == false || input_2.checked == false || input_3.checked == false ||
    input_4.checked == false || input_5.checked == false) {
        input_6.checked = false
    }
}

let t = 0
function Copy() {
    navigator.clipboard.writeText(password.value);
    img.src = "images/1234.png"
    t = setInterval(Otschet, 500);
    mod.hidden = false
    copyBut.disabled = true
}

let i = 0
function Otschet() {
    i++
    if(i == 6) {
        mod.hidden = true
        copyBut.disabled = false
        clearInterval(t); 
        i = 0
    }
}