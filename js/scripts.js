$(function(){

  $("#formOne").submit(function(event) {
    event.preventDefault();

    var favoriteThings = [];

    var animal = $("#animal").val();
    var food = $("#food").val();
    var place = $("#place").val();
    var color = $("#color").val();
    var car = $("#car").val();

    favoriteThings.push(animal + food + place + color + car);
    // favoriteThings.push(food);
    // favoriteThings.push(anim);
    // favoriteThings.push(animal);
    // favoriteThings.push(animal);

    alert(favoriteThings);

  });

});
