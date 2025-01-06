const inputFileUpload = document.querySelector("#upload-file");
const form = document.getElementById("upload-select-image");
const descript = form.querySelector(".text__description");
const hashTag = form.querySelector(".text__hashtags");
const picture = document.querySelector(".img-upload__preview").children[0];
const zoomValue = form.querySelector(".scale__control--value");

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
  picture.style.transform = "";
  inputFileUpload.value = "";
  picture.style.filter = "";
  zoomValue.value = '100%';
  descript.value = "";
  hashTag.value = "";
  reloadSlider();
}

// Функція зля закриття вікна (Escape)
document.addEventListener("keydown", escapeFormClosed);
export function escapeFormClosed(event) {
  if (
    event.code === "Escape" &&
    document.activeElement !== descript &&
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
hashTag.removeAttribute("required");
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

// Zoom pictuers
export function imgAddZoom() {
  const stepZoom = 25;
  document.querySelector(".img-upload__scale").addEventListener("click", (e) => {
   
      if (e.target.tagName === 'BUTTON'){
        const imgZoomValue = +zoomValue.value.slice(0, -1);

        if (e.target.closest('.scale__control--bigger') && imgZoomValue < 100) {
          const summ = imgZoomValue + stepZoom;
          zoomValue.value = `${summ}%`;
           btnZoomClick(summ, picture);
        } else if (e.target.closest('.scale__control--smaller') &&imgZoomValue > 25){
          const summ = imgZoomValue - stepZoom;
          zoomValue.value = `${summ}%`;
           btnZoomClick(summ, picture);
        }
      }
    });
}

function btnZoomClick(summ, el) {
  switch (summ) {
    case 100:
      el.style.transform = "";
      break;
    case 75:
      el.style.transform = "scale(0.75)";
      break;
    case 50:
      el.style.transform = "scale(0.50)";
      break;
    case 25:
      el.style.transform = "scale(0.25)";
      break;
  }
}

//effect
function reloadSlider() {
  const slider = document.getElementById("slider");
  const sliderContainer = document.querySelector(".effect-level__slider");
  if (slider) {
    slider.remove();
    const sliderNew = document.createElement("div");
    sliderNew.id = "slider";
    sliderContainer.appendChild(sliderNew);
  }
}


export function imgAddEffect() {
  const effectListWrap = document.querySelector(".effects__list");
  effectListWrap.addEventListener("click", (e) => {
    if (e.target.closest(".effects__radio")) {
      const value = e.target.value;
      picture.className = "img-upload__preview";
      picture.style.filter = "";
      reloadSlider();
      const slider = document.getElementById("slider");
      switch (value) {
        case "chrome":
          noUiSlider.create(slider, {
            start: [100],
            step: 0.1,
            range: {
              min: [0],
              max: [1],
            },
            connect: "lower",
          });
          break;
        case "sepia":
          noUiSlider.create(slider, {
            start: [100],
            step: 0.1,
            range: {
              min: [0],
              max: [1],
            },
            connect: "lower",
          });
          break;
        case "marvin":
          noUiSlider.create(slider, {
            start: [100],
            step: 1,
            range: {
              min: [0],
              max: [100],
            },
            connect: "lower",
          });
          break;
        case "phobos":
          noUiSlider.create(slider, {
            start: [100],
            step: 0.1,
            range: {
              min: [0],
              max: [3],
            },
            connect: "lower",
          });
          break;
        case "heat":
          noUiSlider.create(slider, {
            start: [100],
            step: 0.1,
            range: {
              min: [1],
              max: [3],
            },
            connect: "lower",
          });
          break;
      }

      if (value !== "none") {
        slider.noUiSlider.on("update", function (values, handle) {
          const handleValue = +values[handle];
          let currentEffect = "";
          const effectList = document.querySelectorAll(".effects__radio");

          for (let radio of effectList) {
            if (radio.checked) {
              currentEffect = radio.value;
            }
          }
          let sliderValue = document.querySelector(".effect-level__value");
          switch (currentEffect) {
            case "chrome":
              picture.style.filter = `grayscale(${handleValue})`;
              sliderValue.value = picture.style.filter;
              break;
            case "sepia":
              picture.style.filter = `sepia(${handleValue})`;
              sliderValue.value = picture.style.filter;
              break;
            case "marvin":
              picture.style.filter = `invert(${Math.round(handleValue)}%)`;
              sliderValue.value = picture.style.filter;
              break;
            case "phobos":
              picture.style.filter = `blur(${handleValue.toFixed(1)}px)`;
              sliderValue.value = picture.style.filter;
              break;
            case "heat":
              picture.style.filter = `brightness(${handleValue})`;
              sliderValue.value = picture.style.filter;
              break;
          }
        }); //--чи треба ; ?
      }
    } //--де оголошувати глобальні змінні,біля блоку чи в верху?
  });
} //--як краще? завжди    document.getElementById("upload-select-image");
//--чи від ближнього?   form.querySelector(".text__description");

//Форма
form.addEventListener("submit", function (event) {
  if (hashTag.checkValidity()) {
    alert("Форма відправленна");
  }

  event.preventDefault();
});




