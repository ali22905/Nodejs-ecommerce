// let color_picker = <HTMLInputElement> document.getElementById('exampleColorInput')
// console.log(color_picker.value);


// color_picker.onblur = (e) => {
//   console.log(color_picker.value);
//   console.log(e);
// }

type str = string;
type num = number;
type bool = boolean;
const myError = (err: str) => {throw new Error(err);}





let menu_btn = <HTMLButtonElement> document.getElementById('menu');
let mobile_nav = <HTMLElement> document.getElementById('mobile-nav');
let menu_header = <HTMLHeadElement> document.querySelector('#mobile-nav aside header')

const hide_nav = () => {
  setTimeout(() => {
    menu_btn.style.cssText = 'display: inline !important';
  }, 300)
  mobile_nav.style.cssText = 'left: -100%; opacity: 0; pointer-events: none;';
} 
const show_nav = () => {
  menu_btn.style.cssText = 'display: none !important';
  mobile_nav.style.cssText = 'left: 0; opacity: 100; pointer-events: auto;';
}



menu_btn.addEventListener('click', () => {
  show_nav()
})

menu_header.addEventListener('click', () => {
  hide_nav()
})



// for searching
let search_prodcut_btn = document.getElementById('search_prodcut_btn');







