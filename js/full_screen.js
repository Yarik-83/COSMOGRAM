import { array } from "./data.js";
import { descript } from "./form_upload_pict.js";
import { hashTag } from "./form_upload_pict.js";






// Відкриття вікна повноекранного перегляду
const bigPicture = document.querySelector(".big-picture");
const listComments = document.querySelector(".social__comments");

export function handleClick(event) {
 
  if (event.target.closest(".picture")) {
    document.body.classList.add("modal-open");
    document.querySelector(".social__comment-count").classList.add("hidden");

    const picture = event.target.closest(".picture");
    const element = array.find((el) => el.id === +picture.id);

    bigPicture.classList.remove("hidden");
    bigPicture.querySelector("img").src = element.url;
    bigPicture.querySelector(".likes-count").textContent = element.likes;
    bigPicture.querySelector(".comments-count").textContent =
      element.comments.length;
    bigPicture.querySelector(".social__caption").textContent =
      element.description;

    const arrComments = element.comments;
    const template = document.querySelector(".social__template");
    const fragment = new DocumentFragment();

    for (let comment of arrComments) {
      const content = template.cloneNode(true).content;

      fragment.append(content);
      fragment.querySelector(".social__picture").src = comment.avatar;
      fragment.querySelector(".social__picture").alt = comment.name;
      fragment.querySelector(".social__text").textContent = comment.message;
      fragment.querySelector(".social__comment").classList.add("remove");
      listComments.append(fragment);
    }
  }
}

//Закриття вікна повноекранного перегляду 
export function pictureClosed() {
  document.body.classList.remove("modal-open");
  bigPicture.classList.add("hidden");
  const li = document.querySelectorAll(".remove");

  for (let el of li) {
    el.remove()
  }
 }

//  Функція зля закриття вікна (Escape) 
export function pressEscape(cb){
  return document.addEventListener("keydown", function (event) {
    if (event.code === "Escape" && document.activeElement !== descript && document.activeElement !== hashTag) {
      cb()
    };
  })
}
