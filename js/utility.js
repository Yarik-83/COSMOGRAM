



//Функція для отримання числа з діапазону.
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * max) + min;
}


//Функція зля закриття вікна (button)
 export function btnCancel(cb){
  const btn = document.querySelectorAll(".cancel");
  btn.forEach ((el) => el.addEventListener("click",cb));
}


 


