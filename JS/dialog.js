let dialogSlider = new Splide('#dialog-slider', {
  type: 'loop',
  start : 0
})

let dialogThumb = new Splide('#dialog-thumbnail', {
  fixedWidth: 100,
  fixedHeight: 100,
  gap       : 10,
  rewind    : true,
  pagination: false,
  isNavigation: true,
  arrows    : false,
})

dialogSlider.sync(dialogThumb);
dialogSlider.mount();
dialogThumb.mount();



let main = new Splide( '#main-slider', {
  type: 'loop',
  start : 0
} )


let thumbnails =   new Splide( '#thumbnail-slider', {
		fixedWidth: 100,
    fixedHeight: 100,
		gap       : 10,
		rewind    : true,
		pagination: false,
    isNavigation: true,
    arrows    : false,
  } )

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();

  const dialog = document.querySelector('dialog');
  const mainSlider = document.querySelector('#main-slider');
  const closeModal = document.querySelector('.close-button img');

  mainSlider.addEventListener('click', () => {
    if(window.innerWidth >= 1200){
      dialog.showModal();
    }
  })

  closeModal.addEventListener('click', () => {
    dialog.close();
  })