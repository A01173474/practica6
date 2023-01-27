$(document).ready(function() {
const request =  new XMLHttpRequest();
const endPoint = 'https://api.giphy.com/v1/gifs/search?q=dog&api_key=n9c5DzWY8ugIOAORlu0hcJ6UIMCx5lk2&limit=30';
// Start your code from here

let animals = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
    "bird", "ferret", "turtle", "sugar glider", "chinchilla",
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"
  ];


  function populateButtons(array){
    $("#animal-buttons").empty();

array.forEach(element => {
    
    var a = $("<button>");
    a.text(element)
    a.addClass("animal-button")
    a.attr("data-type",element)
    $("#animal-buttons").append(a);
});
}

// La logica del click de cada boton para hacer la llamda al API
$("#animal-buttons").on("click", ".animal-button", function() {

    $("#animals").empty();
    

})


// La lógica del click de cada imagen para "intercambiar las urls"
$("#animals").on("click", ".animal-image", function(){
    if(state=="still"){
        $(this).attr("src",$(this).attr("data-animate"))
        $(this).attr("data-state","animate");
    }
    else{
        $(this).attr("src",$(this).attr("data-still"))
        $(this).attr("data-state","still");
    }

})


// La lógica del formulario para agregar mas botones a la lista
$("#add-animal").on("click", function(e) {
    e.preventDefault();

})


populateButtons(animals);
});
