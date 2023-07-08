
// fetch(`/settings`, {method: 'POST'}) 
// .then((response) => response.json())
// .then((data) => {console.log(data);})
// .catch((error) => {console.log(error);})






let ids_str: str = (document.getElementById('data') as HTMLSpanElement).getAttribute('data-objects')! 
let ids = ids_str.split(',');
let add_submit = <HTMLButtonElement> document.getElementById('add_product_btn');
let id_input = <HTMLInputElement> document.getElementById('product_id');
let gender_input = <HTMLInputElement> document.getElementById('gender_input');
let category_input = <HTMLInputElement> document.getElementById('category_input');
let product_des_input = <HTMLInputElement> document.getElementById('product_des');
let size_input = <HTMLInputElement> document.getElementById('size_input');
let taken_id = <HTMLParagraphElement> document.getElementById('taken_id');
let invalid_gender = <HTMLParagraphElement> document.getElementById('invalid_gender');
let invalid_category = <HTMLParagraphElement> document.getElementById('invalid_category');
let invalid_des = <HTMLParagraphElement> document.getElementById('invalid_des');
let invalid_size = <HTMLParagraphElement> document.getElementById('invalid_size');
let valid_id: bool = false;
let valid_cat:bool = false;
let valid_gender:bool = false;
let valid_des: bool = false;
let valid_size: bool = false;



// search for id
let search_btn = <HTMLButtonElement> document.getElementById('search_id');
let find_id_input = <HTMLInputElement> document.getElementById('find_id_input');
let id_not_found = <HTMLParagraphElement> document.getElementById('id_not_found');

// TODO: make the method GET and use the middle wear in the server to make to respnoses 1 with the json obj and 1 to render
// * middle wear is to make a function and define it in the app.method ex: app.get('/example', middlewear, (res, req) => {})
const get_products = async (API_link: str) => {
  let response = await fetch(API_link, {method: 'POST'})
  let data = await response.json()
  id_input.onblur = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].product_id == id_input.value) {
        taken_id.classList.remove('d-none')
        valid_id = false;
        break;
      }else {
        valid_id = true
        taken_id.classList.add('d-none')
      }
      
    }
  }
  search_btn.addEventListener('click', (e: Event) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].product_id);
      console.log(find_id_input.value);
      if (data[i].product_id == find_id_input.value) {
        id_not_found.classList.add('d-none')
        window.location.href = `/settings/${find_id_input.value}`
        break;
      }else {
        id_not_found.classList.remove('d-none')
      }
    }
  })
}
get_products('/settings')




gender_input.onblur = () => {
  if (gender_input.value == 'male' || gender_input.value == 'female' || gender_input.value == 'kids') {
    invalid_gender.classList.add('d-none')
    valid_gender = true;
  }else {
    valid_gender = false
    invalid_gender.classList.remove('d-none')
  }
}
category_input.onblur = () => {
  if (category_input.value == 'shoes' || category_input.value == 'clothes') {
    invalid_category.classList.add('d-none')
    valid_cat = true;
  }else {
    valid_cat = false
    invalid_category.classList.remove('d-none')
  }
}
product_des_input.onblur = () => {
  if (product_des_input.value.split(' ').length < 7) {
    invalid_des.classList.remove('d-none')
    valid_des = false;
  }else {
    invalid_des.classList.add('d-none')
    valid_des = true;
  }
}
size_input.onblur = () => {
  if (size_input.value == 'U22' || size_input.value == 'kids' || size_input.value  == 'adult' || size_input.value  == 'u22') {
    invalid_size.classList.add('d-none')
    valid_size = true
  }else {
    invalid_size.classList.remove('d-none')
    valid_size = false
  }
}





let visits_input = <HTMLInputElement> document.getElementById('visits_input');

add_submit.addEventListener('click', (e: Event) => {
  visits_input.value = 0;
  if (size_input.value == 'u22') {
    size_input.value = 'U22';
  }
  if (!valid_id || !valid_cat || !valid_gender || !valid_des || !valid_size) {
    e.preventDefault()
  }
})






