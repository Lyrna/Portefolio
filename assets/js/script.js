//Smooth vers les ancres
document.querySelectorAll('a[href^="#ancre"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//les 9 projets
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let p5 = document.getElementById("p5");
let p6 = document.getElementById("p6");
let p7 = document.getElementById("p7");
let p8 = document.getElementById("p8");
let p9 = document.getElementById("p9");


//les 4 boutons de tri par langage
let htmlOnly = document.querySelector("p button:first-child");
let cssOnly = document.querySelector("p button:nth-child(2)");
let jsOnly = document.querySelector("p button:nth-child(3)");
let phpOnly = document.querySelector("p button:nth-child(4)");

htmlOnly.addEventListener("click", function() {
	p1.style.display = "flex";
	p2.style.display = "flex";
	p3.style.display = "flex";
	p4.style.display = "flex";
	p5.style.display = "flex";
	p6.style.display = "flex";
	p7.style.display = "flex";
	p8.style.display = "flex";
	p9.style.display = "flex";
});

cssOnly.addEventListener("click", function() {
	p1.style.display = "flex";
	p2.style.display = "flex";
	p3.style.display = "flex";
	p4.style.display = "flex";
	p5.style.display = "flex";
	p6.style.display = "flex";
	p7.style.display = "flex";
	p8.style.display = "none";
	p9.style.display = "flex";
});

jsOnly.addEventListener("click", function() {
	p1.style.display = "none";
	p2.style.display = "flex";
	p3.style.display = "none";
	p4.style.display = "flex";
	p5.style.display = "flex";
	p6.style.display = "none";
	p7.style.display = "flex";
	p8.style.display = "flex";
	p9.style.display = "flex";
});

phpOnly.addEventListener("click", function() {
	p1.style.display = "none";
	p2.style.display = "none";
	p3.style.display = "flex";
	p4.style.display = "none";
	p5.style.display = "none";
	p6.style.display = "none";
	p7.style.display = "none";
	p8.style.display = "none";
	p9.style.display = "none";
});


////BOUTON SHOW ALL
//je sélectionne les catégories cards qui m'intéressent (category est un tableau de length = 9 car j'ai 9 cartes)
let categories = document.querySelectorAll('div.row[id^="p"]');

//je créé un chemin vers mon bouton all
let showAll = document.querySelector("button.showall");

//au clic sur le bouton tout afficher
showAll.addEventListener("click", function(){
	//pour tous les i des catégories
	for(var i of categories){
	//je display tout tout tout
	i.style.display="flex";
	}
});
