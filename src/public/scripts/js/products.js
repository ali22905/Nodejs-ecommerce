"use strict";
let filter_head = document.querySelectorAll('.filter-head');
filter_head.forEach(filter => {
    filter.addEventListener('click', () => {
        filter.nextElementSibling.firstElementChild.classList.toggle('show');
        filter.firstChild.nextElementSibling.classList.toggle('active');
    });
});
let card_descriptions = document.querySelectorAll('.card-description');
card_descriptions.forEach(card_description => {
    let description_arr = card_description.getAttribute('data-des').split(' ');
    let short_des_arr = [];
    for (let i = 0; i < 7; i++) {
        short_des_arr.push(description_arr[i]);
    }
    card_description.prepend(document.createTextNode(`${short_des_arr.join(' ')} ...`));
});
let home_btn = document.getElementById('home_btn');
home_btn.addEventListener('click', () => {
    window.location.href = '/home';
});
let category_link_clothes = document.getElementById('category-link-clothes');
let category_link_shoes = document.getElementById('category-link-shoes');
let category_link_all = document.getElementById('category-link-all');
let size_link_U22 = document.getElementById('size-link-U22');
let size_link_adult = document.getElementById('size-link-adult');
let size_link_kids = document.getElementById('size-link-kids');
let size_link_all = document.getElementById('size-link-all');
let gender_link_male = document.getElementById('gender-link-male');
let gender_link_female = document.getElementById('gender-link-female');
let gender_link_all = document.getElementById('gender-link-all');
let gender_title = document.getElementById('gender_title');
let current_dir = document.getElementById('current_dir');
window.onload = () => {
    let searchArr = window.location.search.split(',');
    let searchArr2 = [];
    let searchArr3 = [];
    for (let i = 0; i < searchArr.length; i++) {
        searchArr2.push(...searchArr[i].split('='));
    }
    for (let i = 0; i < searchArr2.length; i++) {
        searchArr3.push(...searchArr2[i].split('&'));
    }
    for (let i = 0; i < searchArr3.length; i++) {
        if (searchArr3[i] == 'clothes') {
            category_link_clothes.classList.add('active');
        }
        if (searchArr3[i] == 'shoes') {
            category_link_shoes.classList.add('active');
        }
        if (searchArr3[i] == 'U22') {
            size_link_U22.classList.add('active');
        }
        if (searchArr3[i] == 'adult') {
            size_link_adult.classList.add('active');
        }
        if (searchArr3[i] == 'kids') {
            size_link_kids.classList.add('active');
        }
        if (searchArr3[i] == 'male') {
            gender_link_male.classList.add('active');
            gender_title.innerHTML = "MEN<span>'s</span>";
            current_dir.innerHTML = "MEN";
        }
        if (searchArr3[i] == 'female') {
            gender_link_female.classList.add('active');
            gender_title.innerHTML = "WOMEN<span>'s</span>";
            current_dir.innerHTML = "WOMEN";
        }
    }
    if (gender_link_female.classList.contains('active') && gender_link_male.classList.contains('active')) {
        gender_link_female.classList.remove('active');
        gender_link_male.classList.remove('active');
        gender_link_all.classList.add('active');
        gender_title.innerHTML = "WOMEN<span>'s</span> , MEN<span>'s</span>";
        current_dir.innerHTML = "WOMEN - MEN";
    }
    if (category_link_shoes.classList.contains('active') && category_link_clothes.classList.contains('active')) {
        category_link_shoes.classList.remove('active');
        category_link_clothes.classList.remove('active');
        category_link_all.classList.add('active');
    }
    if (size_link_kids.classList.contains('active') && size_link_U22.classList.contains('active') && size_link_adult.classList.contains('active')) {
        size_link_kids.classList.remove('active');
        size_link_U22.classList.remove('active');
        size_link_adult.classList.remove('active');
        size_link_all.classList.add('active');
    }
    let curr_location = window.location.search.split('&');
    let curr_location2 = [];
    for (let i = 0; i < curr_location.length; i++) {
        curr_location2.push(...curr_location[i].split('?'));
    }
    for (let i = 0; i < curr_location2.length; i++) {
        if (curr_location[i] == 'category=clothes') {
            category_link_clothes.href = `${window.location.pathname}?${curr_location2.join('&')}`;
            let new_location = [...curr_location];
            category_link_shoes.href = `${window.location.pathname}?${new_location.splice(i, 1, 'category=shoes').join('&')}`;
        }
        else if (curr_location[i] == 'category=shoes') {
            let new_location = [...curr_location];
            category_link_clothes.href = `${window.location.pathname}?${new_location.splice(i, 1, 'category=clothes').join('&')}`;
            category_link_shoes.href = `${window.location.pathname}?${curr_location2.join('&')}`;
        }
        else if (curr_location[i] == 'category=clothes,shoes' || curr_location[i] == 'category=shoes,shoes') {
            let new_location = [...curr_location];
            category_link_clothes.href = `${window.location.pathname}?${new_location.splice(i, 1, 'category=clothes').join('&')}`;
            category_link_shoes.href = `${window.location.pathname}?${new_location.splice(i, 1, 'category=shoes').join('&')}`;
        }
    }
};
//# sourceMappingURL=products.js.map