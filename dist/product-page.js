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
let first_lg_img = document.getElementById("first-lg-img");
let second_lg_img = document.getElementById("second-lg-img");
let first_sm_img = document.getElementById("first-sm-img");
let second_sm_img = document.getElementById("second-sm-img");
let sm_imgs = document.querySelectorAll(".sm-img");
let lg_imgs = document.querySelectorAll(".lg-img");
sm_imgs.forEach(img => {
    img.addEventListener('click', () => {
        sm_imgs.forEach(image => {
            image.classList.remove('active');
        });
        lg_imgs.forEach(image => {
            image.classList.add('d-none');
            if (image.getAttribute('data-number') == img.getAttribute('data-number')) {
                image.classList.remove('d-none');
            }
        });
        img.classList.add('active');
    });
});
let add_cart = document.getElementById('add_cart');
let add_cart_id = add_cart.getAttribute('data-id');
add_cart.addEventListener('click', () => {
    add_to_cart(`/product/${add_cart_id}`);
});
const add_to_cart = (API_link) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(API_link, { method: 'put' });
        const data = yield response.json();
        window.location.href = `${data.link}`;
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=product-page.js.map