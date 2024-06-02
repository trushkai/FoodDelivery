const header = document.getElementById("header");
const firstBlock = document.querySelector(".section_banner");
const firstBlockHeight = firstBlock.clientHeight;
let scrollStarted = 0;
window.addEventListener('scroll', headerScrollHandler);
function headerScrollHandler() {
    const scrollTop = window.scrollY;
    if (scrollTop >= firstBlockHeight) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    };
    scrollStarted = scrollTop;};
const screenHeight = document.documentElement.clientHeight;
const servicesTypes = document.querySelectorAll('.services-type');
const foodCardsBox = document.querySelector('.food_cards');
function scrolling() {
    for (let i = 0; i < servicesTypes.length; i++) { 
        const servicesType = servicesTypes[i];

        if (isPartiallyVisible(servicesType)) {
            servicesType.classList.add("services-type--active"); 
        } else { 
            servicesType.classList.remove("services-type--active");
        }};
    if (isPartiallyVisible(foodCardsBox)) {
        foodCardsBox.classList.add("food_cards--active");}};
function isPartiallyVisible(element) {
    const elementBoundary = element.getBoundingClientRect();
    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;
    return (top + height >= 0) && (height + screenHeight > bottom);}
window.addEventListener("scroll", scrolling);
const menu = document.querySelector(".menu");
const burgerBtn = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger__line");
burgerBtn.addEventListener('click', () => {
    menu.classList.toggle("menu--open");
    burgerLines.forEach(line => {
        line.classList.toggle("burger__line--active");});});