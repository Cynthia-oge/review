const persons = [
  {
    id: 1,
    Author: "Susan Joel",
    Job: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1678896405790-905b183511ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime dicta magni ea! Deleniti est porro laudantium sint cum id culpa esse pariatur, reiciendis quibusdam?",
  },
  {
    id: 2,
    Author: "Cynthia Aniehe",
    Job: "Tech Enthusiast",
    image:
      "https://scontent.flos2-1.fna.fbcdn.net/v/t39.30808-6/335619467_887182629248896_3233058129878669141_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF7zBUC1AvgURQctbbGbhy78HFgp9GuMcPwcWCn0a4xw1TxhX0YAA7YH7oRAw_LsOYpkroL689WsiCxXOta5T9I&_nc_ohc=MmC7XcLlGK4AX-aHaTf&_nc_zt=23&_nc_ht=scontent.flos2-1.fna&oh=00_AfCtBxLEPusNWyKFOhaSVFfB-tVdEtNyvEOQVf8OGOYFwg&oe=6421F82C",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime dicta magni ea! Deleniti est porro laudantium sint cum id culpa esse pariatur, reiciendis quibusdam?",
  },
  {
    id: 3,
    Author: "Charity Hope",
    Job: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1678956446924-a574c39ae7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime dicta magni ea! Deleniti est porro laudantium sint cum id culpa esse pariatur, reiciendis quibusdam?",
  },
  {
    id: 4,
    Author: "Emma Josh",
    Job: "Back-End Developer",
    image:
      "https://media.istockphoto.com/id/1324786380/photo/young-handsome-smiling-man-in-brown-shirt-and-glasses-feeling-confident-isolated-on-gray.jpg?b=1&s=170667a&w=0&k=20&c=7yoJXyEpncSC4wXBuuDeRgelV1lfAEqWmzCuu3JfRqg=",
    Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime dicta magni ea! Deleniti est porro laudantium sint cum id culpa esse pariatur, reiciendis quibusdam?",
  },
];

let image = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener('DOMContentLoaded', function(){
    showPerson()
})

function showPerson() {
  let item = persons[currentItem];
  image.src = item.image;
  author.textContent = item.Author;
  job.textContent = item.Job;
  info.textContent = item.Text;
}

nextBtn.addEventListener('click', function(){
   currentItem++;
  //  to make the item to start at zero after get to the last item
  if(currentItem > persons.length-1){
    currentItem = 0;
  }
   showPerson(currentItem)
})

prevBtn.addEventListener('click', function(){
  currentItem--;
  // to make it start at the last item in the array
  if(currentItem == 0){
    currentItem = persons.length-1;
  }
  showPerson(currentItem)
})


randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * persons.length);
  showPerson(currentItem)
  console.log(currentItem)
})