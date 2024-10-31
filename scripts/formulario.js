
const form = document.getElementById('form')
const nameInput = document.getElementById('name')
const mailInput = document.getElementById('mail')
console.log(nameInput)
const valueName = //nameInput.target.value //obtener valor de target
if(valueName.length < 2 || valueName.length > 100 ){
    console.log(valueName, "esta mal")
    alert("")
    //cambiar border aquí
}
