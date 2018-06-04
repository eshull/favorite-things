$(function(){

  $("#formOne").submit(function(event) {
    event.preventDefault();

    var favoriteThings = [];

    var animal = $("#animal").val();
    var food = $("#food").val();
    var place = $("#place").val();
    var color = $("#color").val();
    var car = $("#car").val();
    var newArray = [];


    favoriteThings.push(animal, food, place, color, car);
    newArray.push(favoriteThings[1], favoriteThings[2], favoriteThings[4] );




    alert(newArray);



// favoriteThings.push(food);
// favoriteThings.push(animal);
// favoriteThings.push(animal);
// favoriteThings.push(animal);
// favoriteThings.push(animal);


    alert(favoriteThings);

  });

});
