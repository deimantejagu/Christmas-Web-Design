var people = [
    {
      "name": "Linas",
      "surename": "Malocas",
      "year": "1252",
      "gift1": "Masina",
      "gift2": "Masina",
      "gift3": "Masina",
      "gift4": "Masina",
      "PhoneNumber": "+37064512265",
      "email": "labas@gmail.com",
    },
    {
      "name": "Saulius",
      "surename": "Calocas",
      "year": "1000",
      "gift1": "Namas",
      "gift2": "Namas",
      "gift3": "Namas",
      "gift4": "Namas",
      "PhoneNumber": "+37000000000",
      "email": "vakaras@gmail.com",
    },
    {
      "name": "Dalius",
      "surename": "Bezdalius",
      "year": "4528",
      "gift1": "Kamstis i uzpakali",
      "gift2": "Suo",
      "gift3": "Suo",
      "gift4": "Suo",
      "PhoneNumber": "+370458755562",
      "email": "liudas@gmail.com",
    },
    {
      "name": "Monika",
      "surename": "Armonika",
      "year": "485",
      "gift1": "Telefonas",
      "gift2": "Telefonas",
      "gift3": "Telefonas",
      "gift4": "Telefonas",
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
    document.getElementById(item.id).innerHTML = people[currentIteration][item.id];

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
