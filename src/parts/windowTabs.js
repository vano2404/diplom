function windowTabs() {

 let glazing = document.querySelectorAll(".glazing_slider")[0],
		tabContent = document.querySelectorAll(".glazing_type"),
		tab = document.querySelectorAll(".glazing_block"),
        act = document.querySelectorAll('.act');//  класс внутри тега <а> для добавления классов active no_active
        act[0].classList.add('active');

	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
		
		for (let i = a; i < act.length;i++){
            act[i].classList.remove('active');
            act[i].classList.add('no_active');
        }
	}
	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains("hide")) {
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
		
		if (act[b].classList.contains('no_active')) {
            act[b].classList.remove('no_active');
            act[b].classList.add('active');
        }
	}
	glazing.addEventListener("click",(elem) =>  {
		let target = elem.target;

		if (target && target.classList.contains("glazing_block") || target.parentNode.classList.contains("glazing_block")) {
			for(let i =0; i<tab.length;i++){
				if(target == tab[i] || target.parentNode == tab[i]){
					hideTabContent(0);
					showTabContent(i);
				}
			}
		}
	});
}
// module.exports = widnowTabs;
export default windowTabs;
