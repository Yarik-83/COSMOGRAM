import { generatePhotos } from "./picture.js";
import { handleClick } from "./full_screen.js";
import { pictureClosed } from "./full_screen.js";
import { pressEscape } from "./full_screen.js";
import { array } from "./data.js";
import { uploadClosed } from "./form_upload_pict.js";
import { uploadFile } from "./form_upload_pict.js";
import { escapeFormClosed } from "./form_upload_pict.js";
import { btnCancel } from "./utility.js";


// Виклик імпортованої функції для загрузки фото
generatePhotos(array);

// Відкриття вікна повноекранного перегляду
const userPictures = document.querySelector(".pictures");
userPictures.addEventListener("click", handleClick);

// Закриття вікна повноекранного перегляду (button)
btnCancel(pictureClosed)

// Закриття вікна повноекранного перегляду (escape)
pressEscape(pictureClosed);

// Вікно загрузка фото
const upload = document.getElementById("upload-file");
document.addEventListener("change", uploadFile);

//Закриття вікна загрузки (button)
btnCancel(uploadClosed)

// Закриття вікна загрузки (escape)
escapeFormClosed(uploadClosed);


















