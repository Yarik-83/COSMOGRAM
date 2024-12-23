const inputFileUpload = document.querySelector("#upload-file");
const form = document.getElementById("upload-select-image");
const btnSubmit = document.querySelector("#upload-submit"); //-Де Їх оголошувати?
export const descript = form.querySelector(".text__description");
export const hashTag = form.querySelector(".text__hashtags");

// Функція дзля загрузки файла
export function uploadFile() {
  if ((inputFileUpload.filelist = 1)) {
    document.querySelector(".img-upload__overlay").classList.remove("hidden");
    document.body.classList.add("modal-open");
  }
}

//CB Функція дзля закриття вікна
export function uploadClosed() {
  document.querySelector(".img-upload__overlay").classList.add("hidden");
  document.body.classList.remove("modal-open");
  inputFileUpload.value = "";
  hashTag.value = "";
  descript.value = "";
}

// Функція зля закриття вікна (Escape)
document.addEventListener("keydown", escapeFormClosed);

export function escapeFormClosed(event) {
  if (
    event.code === "Escape" &&
    document.activeElement !== descript && //Пришлось експортить змінну.Це норм?
    document.activeElement !== hashTag
  ) {
    uploadClosed();
  }
}

// Коментар
descript.addEventListener("input", validateComment);
function validateComment(e) {
  descript.setAttribute("maxlength", "140");
  console.log(descript.value);
  if (descript.value.length > 139) {
    descript.setCustomValidity("Трошки коротче)))");
    descript.reportValidity();
  } else {
    descript.setCustomValidity("");
  }
}

// Хеш_тег
hashTag.addEventListener("change", validateInput);

function validateInput() {
  hashTag.removeAttribute("required");
  const arrHashtags = this.value.split(" ").filter((el) => el.trim() !== "");
  const setHashtegs = new Set(arrHashtags);
  console.log(arrHashtags);
  console.log(setHashtegs);
  if (arrHashtags.length > 5) {
    hashTag.setCustomValidity("Максимум 5 хеш-тегів");
    return;
  } else if (arrHashtags.length !== setHashtegs.size) {
    hashTag.setCustomValidity("Хеш-теги не мають повторюватися!");
    return;
  } else {
    arrHashtags.forEach((element) => {
      if (element.charAt(0) !== "#") {
        return hashTag.setCustomValidity("Хеш-тег має починатися з '#'!");
      } else if (testInput(element)) {
        return hashTag.setCustomValidity("# і тільки букви та цифри!");
      } else if (element.length < 2 || element.length > 20) {
        return hashTag.setCustomValidity(
          "Хеш-тег має містити від 2 до 20 символів!"
        );
      } else {
        hashTag.setCustomValidity("");
      }
    });
  }
}

function testInput(el) {
  return !/^#[/a-zа-я0-9]+$/i.test(el);
}

//Форма
form.addEventListener("submit", function (event) {
  if (hashTag.checkValidity()) {
    alert("Форма відправленна");
  } else if (!hashTag.checkValidity()) {
    alert("false");
  }
  event.preventDefault();
});

form.addEventListener("focus", function (e) {
  if (!e.target.checkValidity()) {
    hashTag.setCustomValidity(""); // Як прибрать повідомлення при фокусі
  }
});

// // //Button submit
// btnSubmit.onsubmit, function (event) {
//   alert('Форма відправлена!')
//   event.preventDefault();
//   // if (!uploadForm.checkValidity()) {
//   //   //hashTag.setCustomValidity("bla-bla")
//   //
// };

//!/^#(?![\d+_@.-]+$)[a-zа-я0-9]{1,19}$/i

// hashTag.addEventListener("change", checkInput);//-Де Їх оголошувати?
// hashTag.removeAttribute("required");
// hashTag.setAttribute("pattern",'/^#[a-zа-я0-9]{1,19}$/i');
// function checkInput(e) {
//   const arrHashtags = e.target.value.trim().split(" ");
//   arrHashtags.forEach((element) => {
//     if (arrHashtags.length > 5) {
//       hashTag.setCustomValidity("Максимум 5 хеш-тегів");
//       console.log("Максимум 5 хеш-теги");
//     } else if (testInput(element)) {
//       hashTag.setCustomValidity("Не валідний хеш-тег");
//       console.log("Не валідний хеш-тег");
//     } else {
//       hashTag.setCustomValidity("");
//     }
//   });
// }

// if (arrHashtags.length > 5) {
//   hashTag.setCustomValidity("Максимум 5 хеш-тегів");
// } else {
//   arrHashtags.forEach((element) => {
//     if (element.charAt(0) !== "#") {
//       hashTag.setCustomValidity("Хеш-тег має починатися з '#'");
//     } else if (testInput(element)) {
//       hashTag.setCustomValidity("# і тільки букви та цифри");
//     } else if (element.length < 2 || element.length > 20) {
//       hashTag.setCustomValidity("Хеш-тег має містити від 2 до 20 символів");
//     } else {
//       hashTag.setCustomValidity("");

//     }
//   });
// }
