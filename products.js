var productArray = [
	{
	name: "Rope Bird House",
	description: "This is a rope birdhouse",
	price: "1.00",
	url:  "birdfeed.jpg"},
	{
	name: "rope",
	description: "rope",
	price: "1.00",
	url:  "hat.jpg"},
	{
	name: "rope",
	description: "rope",
	price: "1.00",
	url:  "head.jpg"},
	{
	name: "rope",
	description: "rope",
	price: "1.00",
	url:  "shoes.jpg"},
	{
	name: "rope",
	description: "rope",
	price: "1.00",
	url:  "stringtheory.gif"},
	{
	name: "rope",
	description: "rope",
	price: "1.00",
	url:  "numbers.gif"},
	{
	name: "rope",
	description: "rope",
	price: "1.00",
	url:  "rope.jpg"},
	{
	name: "rope",
	description: "rope",
	price: "1.00",
	url:  "coinrope.jpg"},];




for(i=0; i< productArray.length; i++){
	var card=document.getElementById("product"+i);
	console.log(card);
	card.innerHTML = "<h1>" + productArray[i].name + "</h1>" + "<p>" + productArray[i].description + "</p>"
	+ "<img src='" + productArray[i].url + "'" + "<p> The price is: " + productArray[i].price+ "</p>";
}


