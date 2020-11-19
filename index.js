// {}
// []

//Declaring Variables
const charCount = document.getElementById('char');
const textArea = document.getElementById('area');
const max = 200;


//The Onkeyup Event with function
textArea.onkeyup = () => {
	const counter = textArea.value.length;
	console.log(counter);
	charCount.innerHTML = counter;
//The if conditional to check for exceptions	
	if(counter > max){
		textArea.style.color = 'red';
		textArea.value.slice(0,200);
		console.log(textArea.value.slice(0,200));
		return textArea.value.slice(0,200);
		var warningId = document.getElementById('warn');
		warningId.style.display = "block";
	}
	else {
		var warningId = document.getElementById('warn');
		textArea.style.color = '';
		warningId.style.display = "";
	}
}

const toGGle = ()=> {
    const darK = document.body;
    darK.classList.toggle('dark');
}
//Calling the toggle function
toGGle();
