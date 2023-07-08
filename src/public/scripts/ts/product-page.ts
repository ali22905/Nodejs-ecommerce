let first_lg_img = document.getElementById("first-lg-img");
let second_lg_img = document.getElementById("second-lg-img");
let first_sm_img = document.getElementById("first-sm-img");
let second_sm_img = document.getElementById("second-sm-img");
let sm_imgs = document.querySelectorAll(".sm-img");
let lg_imgs = document.querySelectorAll(".lg-img");

sm_imgs.forEach(img => {
  img.addEventListener('click', () => {
    sm_imgs.forEach(image => {
      image.classList.remove('active')
    })
    lg_imgs.forEach(image => {
      image.classList.add('d-none')
      if(image.getAttribute('data-number') == img.getAttribute('data-number')){
        image.classList.remove('d-none')
      }
    })
    img.classList.add('active')
  })
})


let add_cart = <HTMLButtonElement> document.getElementById('add_cart');
let add_cart_id = add_cart.getAttribute('data-id')

add_cart.addEventListener('click', () => {
  add_to_cart(`/product/${add_cart_id}`)
})

const add_to_cart = async (API_link:str) => {
  try {
    const response = await fetch(API_link, {method: 'put'})
    const data = await response.json()
    window.location.href = `${data.link}`
  } catch (error) {
    console.log(error);
  }
}





