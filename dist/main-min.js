"use strict";const myError=e=>{throw new Error(e)};let menu_btn=document.getElementById("menu"),mobile_nav=document.getElementById("mobile-nav"),menu_header=document.querySelector("#mobile-nav aside header");const hide_nav=()=>{setTimeout(()=>{menu_btn.style.cssText="display: inline !important"},300),mobile_nav.style.cssText="left: -100%; opacity: 0; pointer-events: none;"},show_nav=()=>{menu_btn.style.cssText="display: none !important",mobile_nav.style.cssText="left: 0; opacity: 100; pointer-events: auto;"};menu_btn.addEventListener("click",()=>{menu_btn.style.cssText="display: none !important",mobile_nav.style.cssText="left: 0; opacity: 100; pointer-events: auto;"}),menu_header.addEventListener("click",()=>{setTimeout(()=>{menu_btn.style.cssText="display: inline !important"},300),mobile_nav.style.cssText="left: -100%; opacity: 0; pointer-events: none;"});let search_prodcut_btn=document.getElementById("search_prodcut_btn");