const selectElement = document.querySelector('select');
const divElement = document.querySelector('.imagecontainer');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const addBtn = document.querySelector('.addbtn');
const result = document.querySelector('.result');

selectElement.addEventListener('change', function () {
    divElement.innerHTML = '';
    const selectedOption = selectElement.value;
    const img = document.createElement('img');
    if (selectedOption === 'banana') {
        img.src = 'banana.jpeg.jpg'; 
    } else if (selectedOption === 'apple') {
        img.src = 'apple.jpeg.jpg'; 
    }
    divElement.appendChild(img);
});



addBtn.addEventListener('click', () => {
    const a = input1.value
    const b = input2.value
    if(input1.value === "" && input2.value === ""){
        result.textContent = "please provide values"
    } else{
        result.textContent = a * b
    }
    input1.value = ""
    input2.value = ""
})

