var image = ["Family.jpeg", "Father.jpeg", "Mother.jpeg", "Me.jpeg", "Brother.jpeg"];
var names = ["Family", "Kunwar Sethi (Dad)", "Tarnpreet Kaur Sethi (Mom)", "Naisha Stehi (Me)", "Viraj Kunwar Sethi (Bro)"];
var i = 0; 
function update() {
    if (i == 5) {
        i=0;
    }
    var updatedImage= image[i];
    var updatedName= names[i];
    document.getElementById("imgfam").src = updatedImage;
    document.getElementById("name").innerHTML = updatedName;
    i++;
}