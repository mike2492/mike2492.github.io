const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

let dots = document.querySelector(".dots");
let liste = document.createElement("ul");
dots.appendChild(liste);

for(i = 0; i < slides.length; i++){
	let li = document.createElement("li");
	li.classList.add("dot");
	liste.appendChild(li);	
}

let image = document.querySelector(".banner-img");
let txt = document.querySelector("#banner > p");
let bullets = document.querySelectorAll(".dot");
let index = 0;
let max = slides.length - 1;

if(index === 0){
	bullets[index].classList.add("dot_selected");
}

arrowRight.addEventListener("click", function(){
	if(index >= max){
		index = 0;
		image.src = slides[index]["image"];
		txt.innerHTML = slides[index]["tagLine"];
		bullets[max].classList.remove("dot_selected");
		bullets[index].classList.add("dot_selected");
	}else{
		index++;
		image.src = slides[index]["image"];
		txt.innerHTML = slides[index]["tagLine"];
		bullets[index].classList.add("dot_selected");
		bullets[index-1].classList.remove("dot_selected");
	}

});

arrowLeft.addEventListener("click", function(){
	if(index <= 0){
		index = max;
		image.src = slides[max]["image"];
		txt.innerHTML = slides[max]["tagLine"];
		bullets[max].classList.add("dot_selected");
		bullets[0].classList.remove("dot_selected");
	}
	else if(max >= index){
		index--;
		image.src = slides[index]["image"];
		txt.innerHTML = slides[index]["tagLine"];
		bullets[index].classList.add("dot_selected");
		bullets[index+1].classList.remove("dot_selected");
	}
});



