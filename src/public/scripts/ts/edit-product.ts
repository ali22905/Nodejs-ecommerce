



let product_name = (document.getElementById('product_name_span') as HTMLSpanElement).getAttribute('data-product_name')!
let price = (document.getElementById('price_span') as HTMLSpanElement).getAttribute('data-price')!
let img1 = (document.getElementById('img1_span') as HTMLSpanElement).getAttribute('data-img1')!
let img2 = (document.getElementById('img2_span') as HTMLSpanElement).getAttribute('data-img2')!
let availability = (document.getElementById('availability_span') as HTMLSpanElement).getAttribute('availability_name')!

let product_name_input = <HTMLInputElement> document.getElementById('product_name')
let price_input = <HTMLInputElement> document.getElementById('product_price')
let img1_input = <HTMLInputElement> document.getElementById('product_img1')
let img2_input = <HTMLInputElement> document.getElementById('product_img2')
let availbilty_input = <HTMLInputElement> document.getElementById('product_availbilty')

window.onload = () => {
  product_name_input.value = product_name;
  price_input.value = price;
  img1_input.value = img1;
  img2_input.value = img2;
  availbilty_input.value = availability;
}








