



export function generatePhotos(arr){
    const el = arr.map((el) => {
      return generatePhoto(el);
    });
  }


  function generatePhoto(el) {
    const pictures = document.querySelector(".pictures");
    const element = document.querySelector("#picture");
    const content = element.cloneNode(true).content;
    const picture = content.querySelector('.picture');
    picture.setAttribute('id',el.id);
    const fragment = new DocumentFragment()
     fragment.append(content);
     fragment.querySelector("img").src = el.url;
     fragment.querySelector(".picture__likes").textContent = el.likes;
     fragment .querySelector(".picture__comments").textContent = el.comments.length;
   
  
    return pictures.append(fragment );
  }