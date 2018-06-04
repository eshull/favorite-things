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


    $('.results ul').append("<li>" + favoriteThings[0] +  "</li>");
    $('.results ul').append("<li>" + favoriteThings[1] +  "</li>");
    $('.results ul').append("<li>" + favoriteThings[2] +  "</li>");
    $('.results ul').append("<li>" + favoriteThings[3] +  "</li>");
    $('.results ul').append("<li>" + favoriteThings[4] +  "</li>");
    $('.results ul').append("<li>" + newArray[1] +  "</li>");

    alert(newArray);



// favoriteThings.push(food);
// favoriteThings.push(animal);
// favoriteThings.push(animal);
// favoriteThings.push(animal);
// favoriteThings.push(animal);


    alert(favoriteThings);

  });

});
