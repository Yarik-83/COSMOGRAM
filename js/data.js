import { getRandomInt } from "./utility.js";




const arrayMesage = [
    "Все відмінно!!",
    " Загалом все непогано. Але не всі.",
    " Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.",
    " Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.",
    "Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.",
    "Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?",
  ];
  
  const userName = [
    "Яша",
    "Міша",
    "Юхим",
    "Жорік",
    "Лера",
    "Марфа",
    "Ольга",
    "Світлана",
    "Вартам",
    "Jeck",
    "Параска",
    "Кирил",
    "Chuck",
    "Cерж",
    "LILI",
    "Кела",
    "Антон",
    "Лізка",
    "Мітяй",
    "Афоня",
    "Лера",
    "Жужик",
    "Борода",
  ];
  
  const photoDesc = [
    "Це опис моєї фотки",
    "Мій фейс",
    "Найкраща",
    "Cлавні були часи",
    "Це я з ранку",
    "Якось так",
    "Буває і так",
    "У всій красі",
    "Відпочиваєм",
    "Це краща робота",
    "Вдалий кадр",
    "Бла бла бла",
    "Мій кращий друг",
    "Я )))))))))))))",
    "Абра кадабра",
    "Не вистачає фантазії",
    "Треба встановити Punto Switcher",
    "Та скільки можна?",
    "Було КЛАСНО",
    "Кращий момент",
    "Це СУПЕР",
    "Гарно",
    "ВАУУУУУ",
    "Ну майже",
    "Уррра",
  ];
  
  // Cтворили масив з порожніми елементами і за допомогою fill заповнили його null-ми
  // щоб з ними міг працювати map. Потім методом map з прийнятою cb. функцією заповнили масив обєктами
  export const array = new Array(25).fill(null).map((_, index) => createObject(index));
  
  //CB Функція для створення обєкта
  function createObject(idx) {
    const randomLikes = getRandomInt(15, 200);
  
    return {
      id: idx + 1,
      url: `photos/${idx + 1}.jpg`,
      likes: randomLikes,
      comments: createArrayComent(6),
      description: addRandEl(photoDesc),
    };
  }
  
  //Функція для створення (масиву обєктів -'comments') коментарія для обєкта.
  function createArrayComent(max) {
    const randomCommentsLenght = getRandomInt(1, max);
  
    return new Array(randomCommentsLenght)
      .fill(null)
      .map((_, index) => createComment(index));
  }
  
  // CB Функція для наповнення обєкта 'comments' властивостями
  function createComment(idx) {
    return {
      id: idx,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getMessage(arrayMesage),
      name: addRandEl(userName),
    };
  }
  
  //Функція для додавання рандомного елемента з масиву
  function addRandEl(arr) {
    let num = getRandomInt(0, arr.length - 1);
  
    return arr[num];
  }
  
  // Функці для додавання 'message' в обєкт 'comments'
  function getMessage(arr) {
    const numOfMess = getRandomInt(1, 2);
    let message = [];
  
    if (numOfMess === 1) {
      message.push(arr[getRandomInt(0, arr.length)]);
    } else {
      for (let i = arr.length - 1; i > 0; i--) {
        let tmp = arr[i].trim();
        let rnd = Math.floor(Math.random() * (i + 1));
  
        arr[i] = arr[rnd];
        arr[rnd] = tmp;
      }
  
      message = arr.slice(0, 2);
    }
  
    return message.join(" ");
  }
  
  