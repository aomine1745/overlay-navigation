var btn = document.getElementById('btn');
var sidebar = document.getElementById('sidebar');
btn.addEventListener("click", () => {
	if(btn.classList.contains('active')){
		sidebar.classList.remove('active');
		btn.classList.remove('active');
	}else{
		sidebar.classList.add('active');
		btn.classList.add('active');
	}
});