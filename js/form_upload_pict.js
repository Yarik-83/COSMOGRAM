const inputFileUpload = document.querySelector("#upload-file");
const form = document.getElementById("upload-select-image");
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
  if (descript.value.length > 140) {
    descript.setCustomValidity("Трошки коротче)))");
    descript.reportValidity();
  } else {
    descript.setCustomValidity("");
  }
}

// Хеш_тег
hashTag.addEventListener("change", validateHashTags);
hashTag.removeAttribute('required');
function validateHashTags() {
  const arrayValue = hashTag.value.split(" ");
  const arrHashtags = [];
  const setHashtags = new Set();
  const regex = /^#[a-z]*[а-я]*[0-9]*/gi;

  for (let el of arrayValue) {
    if (el.trim() !== "") {
      arrHashtags.push(el);
    }
  }

  if (arrHashtags.length > 5) {
    hashTag.setCustomValidity("Максимум 5 хеш-тегів");
  } else {
    for (let ht of arrHashtags) {
      if (ht[0] !== "#") {
        hashTag.setCustomValidity("Хеш-тег має починатися з '#'!");
        break;
      } else if (ht.match(regex).join("") !== ht) {
        hashTag.setCustomValidity("# і тільки букви та цифри!");
        break;
      } else if (ht.length < 2 || ht.length > 20) {
        hashTag.setCustomValidity("Хеш-тег має містити від 2 до 20 символів!");
        break;
      } else if (setHashtags.has(ht.toLowerCase())) {
        hashTag.setCustomValidity("Хеш-теги не мають повторюватися!");
        break;
      } else {
        hashTag.setCustomValidity("");
      }
      setHashtags.add(ht.toLowerCase());
    }
    hashTag.reportValidity();
  }
}

//Форма
form.addEventListener("submit", function (event) {
  if (hashTag.checkValidity()) {
    alert("Форма відправленна");
  }

  event.preventDefault();
});
