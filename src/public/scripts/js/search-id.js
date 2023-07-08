"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let ids_str = document.getElementById('data').getAttribute('data-objects');
let ids = ids_str.split(',');
let add_submit = document.getElementById('add_product_btn');
let id_input = document.getElementById('product_id');
let gender_input = document.getElementById('gender_input');
let category_input = document.getElementById('category_input');
let product_des_input = document.getElementById('product_des');
let size_input = document.getElementById('size_input');
let taken_id = document.getElementById('taken_id');
let invalid_gender = document.getElementById('invalid_gender');
let invalid_category = document.getElementById('invalid_category');
let invalid_des = document.getElementById('invalid_des');
let invalid_size = document.getElementById('invalid_size');
let valid_id = false;
let valid_cat = false;
let valid_gender = false;
let valid_des = false;
let valid_size = false;
let search_btn = document.getElementById('search_id');
let find_id_input = document.getElementById('find_id_input');
let id_not_found = document.getElementById('id_not_found');
const get_products = (API_link) => __awaiter(void 0, void 0, void 0, function* () {
    let response = yield fetch(API_link, { method: 'POST' });
    let data = yield response.json();
    id_input.onblur = () => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].product_id == id_input.value) {
                taken_id.classList.remove('d-none');
                valid_id = false;
                break;
            }
            else {
                valid_id = true;
                taken_id.classList.add('d-none');
            }
        }
    };
    search_btn.addEventListener('click', (e) => {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].product_id);
            console.log(find_id_input.value);
            if (data[i].product_id == find_id_input.value) {
                id_not_found.classList.add('d-none');
                window.location.href = `/settings/${find_id_input.value}`;
                break;
            }
            else {
                id_not_found.classList.remove('d-none');
            }
        }
    });
});
get_products('/settings');
gender_input.onblur = () => {
    if (gender_input.value == 'male' || gender_input.value == 'female' || gender_input.value == 'kids') {
        invalid_gender.classList.add('d-none');
        valid_gender = true;
    }
    else {
        valid_gender = false;
        invalid_gender.classList.remove('d-none');
    }
};
category_input.onblur = () => {
    if (category_input.value == 'shoes' || category_input.value == 'clothes') {
        invalid_category.classList.add('d-none');
        valid_cat = true;
    }
    else {
        valid_cat = false;
        invalid_category.classList.remove('d-none');
    }
};
product_des_input.onblur = () => {
    if (product_des_input.value.split(' ').length < 7) {
        invalid_des.classList.remove('d-none');
        valid_des = false;
    }
    else {
        invalid_des.classList.add('d-none');
        valid_des = true;
    }
};
size_input.onblur = () => {
    if (size_input.value == 'U22' || size_input.value == 'kids' || size_input.value == 'adult' || size_input.value == 'u22') {
        invalid_size.classList.add('d-none');
        valid_size = true;
    }
    else {
        invalid_size.classList.remove('d-none');
        valid_size = false;
    }
};
let visits_input = document.getElementById('visits_input');
add_submit.addEventListener('click', (e) => {
    visits_input.value = 0;
    if (size_input.value == 'u22') {
        size_input.value = 'U22';
    }
    if (!valid_id || !valid_cat || !valid_gender || !valid_des || !valid_size) {
        e.preventDefault();
    }
});
//# sourceMappingURL=search-id.js.map