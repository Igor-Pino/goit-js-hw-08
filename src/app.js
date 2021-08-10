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


const galleryContainer = document.querySelector('.js-gallery')

const lightboxImage = document.querySelector('.lightbox__image')

const lightboxEl = document.querySelector('.lightbox')
const lightbox__buttonEl = document.querySelector('.lightbox__button')

galleryContainer.addEventListener('click', onGalleryContainerClick)


function onGalleryContainerClick(e){
lightboxEl.classList.add('is-open')
galleryItems.map(image => {
  if (e.target.src === image.preview) {
    lightboxImage.src = image.original
  }
})

lightboxImage.classList.add('lightbox__image')

}



lightbox__buttonEl.addEventListener('click', ()=>{lightboxEl.classList.remove('is-open');
lightboxImage.src = " ";
})

window.addEventListener('keydown', (e)=>{
  if(e.code !=='Escape') {
    return
  }
  lightboxEl.classList.remove('is-open')
})







const items = galleryItems.map(image => {
  const createGalleryItem = document.createElement('li')
  createGalleryItem.classList.add('gallery__item')

  const createThumb = document.createElement('div')
  createThumb.classList.add('gallery__link')
 
  const createItem = document.createElement('img');
  createItem.classList.add('gallery__image')
  createItem.src = image.preview;
  createItem.alt = image.description;
  
  createThumb.append(createItem)

  createGalleryItem.append(createThumb)

  return createGalleryItem

})

galleryContainer.append(...items)






