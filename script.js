"use strict";

const minus2 = document.querySelectorAll(".minus-2");
const boxes = document.querySelectorAll(".box");
const activeBox = document.querySelectorAll(".active__box");

minus2.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((box) => box.classList.remove("active__box"));
    const parentEl = box.parentElement;
    parentEl.classList.add("active__box");
  });
});
