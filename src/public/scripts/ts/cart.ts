let card_descriptions2 = document.querySelectorAll('.card-description');

card_descriptions2.forEach(card_description => {
  let description_arr = card_description.getAttribute('data-des')!.split(' ');
  let short_des_arr = []
  for (let i = 0; i < 7; i++) {
    short_des_arr.push(description_arr[i])
  }
  card_description.prepend(document.createTextNode(`${short_des_arr.join(' ')} ...`))
});




let home_btn2 = <HTMLSpanElement> document.getElementById('home_btn');
home_btn2.addEventListener('click', () => {
  window.location.href = '/home'
})





let remove_cart_ps = document.querySelectorAll('.remove_cart');

remove_cart_ps.forEach(product => {
  product.addEventListener('click', () => {
    fetch_data(`/cart/${product.getAttribute('data-product_id')}`)
  })
})



const fetch_data = async (API_link:str) => {
  await fetch(API_link, {method: 'PUT'});
  window.location.reload();
}



