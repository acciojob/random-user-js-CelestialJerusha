//your code here
const btn = document.getElementById("btn");
const add = document.getElementById("addBtns");
const container = document.getElementById("container");



btn.addEventListener("click",() => {
	
    fetch('https://randomuser.me/api/')
         .then(response => response.json())
	.then(data => {
         console.log(data);
		//console.log(data.results[0].cell);
		
		container.innerHTML = `
  <img src="${data.results[0].picture.large}" alt="image1">
	<p>${data.results[0].name.first+" "+data.results[0].name.last}</p>
 	<p id="text"></p>
	<div id="addBtns">Additional Info <br>
		 <button>Age</button>
		<button>Email</button>
		<button>Phone</button>
	</div>
		<button id="btn">GET ANOTHER USER</button>
		`;
         })

})