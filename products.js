var productArray = [
	{
	name: "Rope Bird House",
	description: "Luxury penthouse in the sky for wayward avians",
	price: "Priceless",
	url:  "birdfeed.jpg"},
	{
	name: "Kentucky Derby Hat",
	description: "Fine twine chapeau",
	price: "Contact for price",
	url:  "hat.jpg"},
	{
	name: "Designer Fashion Mannequin",
	description: "Hemphead",
	price: "$15.00",
	url:  "head.jpg"},
	{
	name: "Designer Shoes",
	description: "The finest open toed fashion accessory",
	price: "$34.99",
	url:  "shoes.jpg"},
	{
	name: "rope",
	description: "what is",
	price: "relative",
	url:  "stringtheory.gif"},
	{
	name: "Fine Braded Digits",
	description: "Custom, Hand-crafted, Made-to-order, Rope numerals to satisfy your every need",
	price: "$350",
	url:  "numbers.gif"},
	{
	name: "Pure Rope",
	description: "The purest rope known to man. Discovered in the ruins Angkor Wat",
	price: "៛57.31",
	url:  "rope.jpg"},
	{
	name: "Rope + Coins",
	description: "A circle of rope with money in it",
	price: "$0.57",
	url:  "coinrope.jpg"},];




for(i=0; i< productArray.length; i++){
	var card=document.getElementById("product"+i);
	console.log(card);
	card.innerHTML = "<h2>" + productArray[i].name + "</h2>" + "<p>" + productArray[i].description + "</p>"
	+ "<img src='" + productArray[i].url + "'" + "<p> Price: " + productArray[i].price+ "</p>";
}


