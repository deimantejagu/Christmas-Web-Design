var people = [
  {
    "name": "Linas",
    "surename": "Malocas",
    "year": "2003-05-12",
    gifts: [
      "Masina"
    ],
    "PhoneNumber": "+37064512265",
    "email": "labas@gmail.com",
  },
  {
    "name": "Saulius",
    "surename": "Calocas",
    "year": "1998-12-25",
    gifts: [
      "Masina", 
      "Vienaragis"
    ],
    "PhoneNumber": "+37000000000",
    "email": "vakaras@gmail.com",
  },
  {
    "name": "Dalius",
    "surename": "Kalibis",
    "year": "2013-01-30",
    gifts: [
      "Masina", 
      "Vienaragis", 
      "Sauna"
    ],
    "PhoneNumber": "+370458755562",
    "email": "liudas@gmail.com",
  },
  {
    "name": "Monika",
    "surename": "Armonika",
    "year": "2020-10-08",
    gifts: [
      "Masina",
      "Vienaragis",
      "Sauna",
      "Saldainiai",
      "Masina",
      "Vienaragis",
      "Sauna",
      "Saldainiai",
      "Masina",
      "Vienaragis",
      "Sauna",
      "Saldainiai",
      "Masina",
      "Vienaragis",
      "Sauna",
      "Saldainiai"
    ],
    "PhoneNumber": "+37084566658",
    "email": "babuska@gmail.com",
  }
];

var currentIteration = 0;
var nextButton = document.getElementById("nextBtn");
var prevButton = document.getElementById("prevBtn");
var dataItems = document.querySelectorAll(".dataField");

updateList();
initialiseButtonsLogic();

//Functions START HERE
function updateList() {
  dataItems.forEach(function(item) {
    if (item.id == "gifts") {
      document.getElementById(item.id).innerHTML = people[currentIteration][
        item.id
      ].join("<br/>");
    } else {
      document.getElementById(item.id).innerHTML =
        people[currentIteration][item.id];
    }

    if(currentIteration == (people.length - 1)){
      nextButton.style.visibility = 'hidden';
    } else {
      nextButton.style.visibility = 'visible';
    }

    if(currentIteration == 0){
      prevButton.style.visibility = 'hidden';
    } else {
      prevButton.style.visibility = 'visible';
    }

    if(item.id == "email") {
      document.getElementById(item.id).href = "mailto:" + people[currentIteration][item.id];
    }
  });
}

function initialiseButtonsLogic() {
  nextButton.addEventListener("click", function() {
    if((currentIteration + 1) < people.length){
      currentIteration++;
    } 
  
    updateList();
  });
  
  prevButton.addEventListener("click", function() {
    if(currentIteration > 0){
      currentIteration--;
    }
    
    updateList();
  });
}
