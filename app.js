const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const refs= {
  gallery: document.querySelector('ul.gallery'),
  jsGallery: document.querySelector('li.gallery__item'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxOverlay: document.querySelector('div.lightbox__overlay'),
  lightboxContent: document.querySelector('div.lightbox__content'),
  lightboxImg: document.querySelector('img.lightbox__image'),
  closeButton: document.querySelector('[data-action="close-lightbox"]'),
  sliderButtonLeft: document.querySelector('.lightbox__button-left'),
  sliderButtonRight: document.querySelector('.lightbox__button-right'),
  
}

refs.gallery.addEventListener('click', openModalOnClick)
refs.closeButton.addEventListener('click', closeModalOnClick)
refs.lightboxOverlay.addEventListener('click', closeModalOnClickOvelay)
refs.gallery.addEventListener('keydown', closeModalOnPressEsc)
refs.sliderButtonLeft.addEventListener('click', prevPhoto)
refs.sliderButtonRight.addEventListener('click', nextPhoto)
refs.gallery.addEventListener('keydown', nextPhoto)
function galleryRender (galleryItems, htmlList){
  let array = [];
    galleryItems.forEach(e => {
      array.push( 
      `<li class="gallery__item">
        <a class="gallery__link" href="#">
          <img class="gallery__image" src="${e.preview}" data-source="${e.original}" alt="${e.description}"></img>
        </a>
      </li>`)
      
    })
    let array2 = array.join(' ')
    htmlList.innerHTML = array2;

}
galleryRender (galleryItems, refs.gallery);
function openModalOnClick(e){
    if(refs.lightboxImg.src){
      refs.lightboxImg.src = '';
    }
    if(e.target.classList != 'gallery__image') return 
    refs.lightboxImg.src = e.target.dataset.source
    
    const currentActiveLight = document.querySelector('div.is-open');
    if (currentActiveLight) {
      refs.lightbox.classList.remove('is-open');
    }
    refs.lightbox.classList.add('is-open');
  return currentActiveLight;
    
    
}
function closeModalOnClick(){

  refs.lightbox.classList.remove('is-open');
  
}
function closeModalOnClickOvelay(e){
    refs.lightbox.classList.remove('is-open');
}
function closeModalOnPressEsc(e){
  
  if(e.key === 'Escape')
  
    refs.lightbox.classList.remove('is-open');
  
}
const array = [];
    galleryItems.forEach(e => {
        array.push(e.original)
    })

  function nextPhoto (){
    for(let e in array){
      if(refs.lightboxImg.src === array[e]){
        if(!array[+e + 1]){
          refs.lightboxImg.src = `${array[0]}`;
        }else{
            refs.lightboxImg.src = `${array[+e+1]}`;
          }
          return;
      }
     }   
    


}

function prevPhoto (){

   for(let e in array){
    if(refs.lightboxImg.src === array[e])
            if(array[+e - 1]){
              refs.lightboxImg.src = `${array[+e - 1]}`;
            }else{
              refs.lightboxImg.src = `${array[array.length - 1]}`;
            }
   }
  }
