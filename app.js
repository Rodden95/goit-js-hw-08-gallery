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
  jsGallery: document.querySelector('ul.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxOverlay: document.querySelector('div.lightbox__overlay'),
  lightboxContent: document.querySelector('div.lightbox__content'),
  lightboxImg: document.querySelector('img.lightbox__image'),
  closeButton: document.querySelector('[data-action="close-lightbox"]'),
}

refs.jsGallery.addEventListener('click', openModalOnClick)
refs.closeButton.addEventListener('click', closeModalOnClick)
refs.lightboxOverlay.addEventListener('click', closeModalOnClickOvelay)
refs.lightbox.addEventListener('keydown', closeModalOnPressEsc)
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
    refs.lightboxImg.src = e.target.dataset.source
    refs.lightbox.classList.toggle('is-open');
    
}
function closeModalOnClick(){

  refs.lightbox.classList.toggle('is-open');
  
}
function closeModalOnClickOvelay(e){
  
  if(e.currentTarget){
    refs.lightbox.classList.toggle('is-open');
  }
}
function closeModalOnPressEsc(e){
  console.log(e.target)
}