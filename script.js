//using local data instead of ajax
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "images\susan.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 2,
        name: "Juan Pachon",
        job: "Web Designer",
        img: "images\Juan.jpg",
        text: "Arcu bibendum at varius vel pharetra. Nullam ac tortor vitae purus faucibus. Purus gravida quis blandit turpis cursus in. Donec ac odio tempor orci dapibus ultrices in iaculis. Turpis nunc eget lorem dolor sed viverra. Sit amet facilisis magna etiam tempor.",
    },
    {
        id: 3,
        name: "Carlos Boozer",
        job: "Back-end Engineer",
        img: "",
        text: "Lectus nulla at volutpat diam ut venenatis tellus. Malesuada proin libero nunc consequat. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.",
    },
    {
        id: 4,
        name: "Liz Mendez",
        job: "UX Specialist",
        img: "",
        text: "Lectus nulla at volutpat diam ut venenatis tellus. Malesuada proin libero nunc consequat. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Aenean sed adipiscing diam donec adipiscing tristique risus. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// setting starting item
let currentItem = 0;

// load intial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson()
});

// current item is a global item, can be accessed form anywhere

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson();
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
});
