// "use strict";

// const cats = require('./cats');

const createDomString = (catz) => {
	 var catString = '';
    for(var i=0; i<catz.length; i++){
        var myCat = "";
		myCat += `<div class="cat-card">`;
		myCat += `<div class="image-container">`;
		myCat +=   `<img src="${catz[i].imageUrl}">`;
		myCat +=   `</div>`;
		myCat +=   `<div class="description-container">`;
		myCat +=     `<h3> ${catz[i].name} </h3>`;
		myCat +=     `<p> Color: ${catz[i].color} </p>`;
		myCat +=     `<p> Skills: ${catz[i].specialSkill} </p>`;
		if(catz[i].numberOfToes >= 10){
			myCat +=     `<p class="disabled-cat"> Toes: ${catz[i].numberOfToes} </p>`;
		} else {
			myCat += `<p>Toes: ${catz[i]. numberOfToes}</p>`;
		}
		
		myCat +=   `</div>`;
		myCat += `</div>` ;
        catString += myCat;
    }
    printToDom(catString);
};

const printToDom = (string) => {
	$('#catHolder').html(string);
};


$('#catInput').keypress((event) => {
	console.log(event);
	if(event.key === 'Enter'){
		let txt = $('#catInput').val();
		console.log($('#catInput').val());
		$.get(`https://random-dogs-api.herokuapp.com/cats/${txt}`, (cats) =>{
			console.log("cats", cats);
			createDomString(cats.cats);
			$('.search').toggleClass('hidden');
		});
	}

});

 $(`#submitButton`).click((event) => {
 	console.log("submit", event);
	let txt = $('#catInput').val();
 	$.get(`https://random-dogs-api.herokuapp.com/cats/${txt}`, (cats) =>{
 		console.log("cats");
 		createDomString(cats.cats);
 		$('.search').toggleClass('hidden');
 	});
 });

 $('.disableButton').click(() => {
   $('.disabled-cat').parent().parent().addClass('hidden');
});

 const hide = () => {
  $('.disableButton').removeClass('hidden');
};

// module.exports = {};