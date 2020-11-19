// {}
// []
const charCount = document.getElementById('char');
const textArea = document.getElementById('area');
const max = 200;


textArea.onkeyup = () => {
	const counter = textArea.value.length;
	console.log(counter);
	charCount.innerHTML = counter;
	
	if(counter > max){
		textArea.style.color = 'red';
		textArea.value.slice(0,200);
		console.log(textArea.value.slice(0,200));
		return textArea.value.slice(0,200);
	}
	else {
		textArea.style.color = '';
	}
}

const toGGle = ()=> {
    const darK = document.body;
    darK.classList.toggle('dark');
}
toGGle();
