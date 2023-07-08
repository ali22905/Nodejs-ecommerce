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
let card_descriptions2 = document.querySelectorAll('.card-description');
card_descriptions2.forEach(card_description => {
    let description_arr = card_description.getAttribute('data-des').split(' ');
    let short_des_arr = [];
    for (let i = 0; i < 7; i++) {
        short_des_arr.push(description_arr[i]);
    }
    card_description.prepend(document.createTextNode(`${short_des_arr.join(' ')} ...`));
});
let home_btn2 = document.getElementById('home_btn');
home_btn2.addEventListener('click', () => {
    window.location.href = '/home';
});
let remove_cart_ps = document.querySelectorAll('.remove_cart');
remove_cart_ps.forEach(product => {
    product.addEventListener('click', () => {
        fetch_data(`/cart/${product.getAttribute('data-product_id')}`);
    });
});
const fetch_data = (API_link) => __awaiter(void 0, void 0, void 0, function* () {
    yield fetch(API_link, { method: 'PUT' });
    window.location.reload();
});
//# sourceMappingURL=cart.js.map