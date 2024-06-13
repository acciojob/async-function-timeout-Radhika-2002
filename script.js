//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async ()=>{
	const text = document.getElementById("text").value;
	const delay = document.getElementById("delay").value;
	if(!text || isNaN(delay)){
		alert("Please fill in all fields and provide a value delaya and text.");
		return;
	}
	await delayFunction(delay);
	document.getElementById("output").innerText=text;
});
function delayFuction(delay) {
	return new Promise((resolve, reject)=>{
		setTimeout(resolve, delay);
	});
};
