"use strict";var specifiedElement=document.getElementById("toggle-btn"),inputElement=document.getElementById("toggle"),listMenu=document.getElementById("listMenu");specifiedElement.addEventListener("click",function(e){console.log("click"),listMenu.classList.contains("active")?listMenu.classList.remove("active"):listMenu.classList.add("active")},!1);