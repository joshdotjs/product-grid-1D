// TODO: 
// - Title ellipses
// - Selectable heart icon

const imgs = document.querySelectorAll('.j-img');

imgs.forEach((img, idx) => {
  img.style.backgroundImage = `url('img/ring-${idx + 1}.png')`;
});

const product_grid = document.querySelector('.j-product-1d-grid');
const items = product_grid?.querySelectorAll('.j-item');


console.log('product_grid: ', product_grid);

items?.forEach((item, idx) => {

  const heart = item.querySelector('.j-heart');
  const heart_full = item.querySelector('.j-heart-full');
  const heart_empty = item.querySelector('.j-heart-full');

  item.addEventListener('click', (e) => {

    console.log('clicked');

    if (item.dataset.liked === 'true') {
      item.dataset.liked = 'false';
    } else {
      item.dataset.liked = 'true';
    }
    
  });
});