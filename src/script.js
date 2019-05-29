
window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    // модальные окна 
    // let popup = document.querySelector(".popup"),
	// 	popupEngineer = document.querySelector(".popup_engineer"),
	// 	body = document.querySelector("body"),
    //     closeFormStrong = document.querySelectorAll('popup_close, strong'),
    //     divBigImage = document.createElement('div');

    //     body.appendChild(divBigImage);
    //     divBigImage.classList.add('overlay', 'bigImage');
        
    // closeFormStrong.forEach((elem) => {
    //     elem.classList.add('close_x');
    // });
	// let buttonClick = (elem) => {
	// 	elem.style.display = "block";
	// 	document.body.style.overflow = "hidden";
	// }
    // let closeFormBody = (modCloseBtn) => {
	// 	popup.style.display = "none";
    //     popupEngineer.style.display ='none';
    //     divBigImage.style.display ='none';
	// 	document.body.style.overflow = "";
	// }
    // let imageClick = (elem) =>{
    //     divBigImage.style.display = 'block';
    //     document.body.style.overflow = "hidden";
    //     divBigImage.innerHTML = `<img src='${elem.parentNode.href}' style='top:50%; left:50%; transform:translate(-50%, -50%); position:relative'>`;
    // }

	// body.addEventListener("click", (event) => {
	// 	let target = event.target;
        
	// 	if (target && target.classList.contains("header_btn")) {
	// 		event.preventDefault();
	// 		buttonClick(popupEngineer);
	// 	}
	// 	if (target && target.classList.contains("phone_link")) {
	// 		event.preventDefault();
	// 		buttonClick(popup);
	// 	}
    //     if(target && target.classList.contains('image_small') || target.classList.contains('lupa')){
    //         event.preventDefault();
    //         imageClick(target);
    //     }
	// 	if (target && target.classList.contains('close_x') || target.classList.contains("popup_engineer") || target.classList.contains('popup')||
    //         target.classList.contains('bigImage')) {
	// 		closeFormBody(target);
	// 	}
	// });
	// setTimeout(function velcom() {
	// 	buttonClick(popup);
	// }, 60000);
// калькулятор стоимости

    // let popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
    //     popupCalc = document.querySelector('.popup_calc'),
    //     popupCalcProfile = document.querySelector('.popup_calc_profile'),
    //     popupCalcProfileEnd = document.querySelector('.popup_calc_end'),
    //     body1 = document.querySelector('body'),
    //     balconIcons = document.querySelector('.balcon_icons'),
    //     balconyType = document.querySelectorAll('.balcony_type'),
    //     balconyTypeImage = document.querySelectorAll('.balcony_type_image'),
    //     width = document.getElementById('width'),
    //     height= document.getElementById('height'),
    //     selectTypeGlazes = document.getElementById('view_type'),
    //     cold = document.getElementsByName('checkbox-test')[0],
    //     warm = document.getElementsByName('checkbox-test')[1],
    //     coldWarm = document.getElementsByName('checkbox-test'),
    //     labelWarm = document.querySelectorAll('span[class="label"]')[1],
    //     labelCold = document.querySelectorAll('span[class="label"]')[0];
    //     labelWarm = labelWarm.textContent;
    //     labelCold = labelCold.textContent;
    // let objectCalc = {};
    // console.log(objectCalc);
    // console.log(selectTypeGlazes);
    // let w = width,
	// 	h = height,
    //     t;
    // let heightWidth = (elem)=>{
    //     elem.addEventListener('input',() => {
    //         w.value = w.value.replace(/[^0-9]/, '');
    //         h.value = h.value.replace(/[^0-9]/, '');
    //     });
    // }
    // heightWidth(width);
    // heightWidth(height);

    // // табы формы балкона и размеры
    // let showBalconyType = (a) => {
    //     for(let i = a; i<balconyTypeImage.length;i++){
    //         balconyTypeImage[i].classList.remove('show');
    //         balconyTypeImage[i].classList.add('hide');
    //         balconyTypeImage[i].style.margin = 'auto';
    //     }
    //     for (let i = a; i<balconyType.length;i++){
    //         balconyType[i].classList.remove('do_image_more');
        
    //     }
    // }
    // showBalconyType(1);

    // let HidebalconyType = (b) => {
    //     if(balconyTypeImage[b].classList.contains('hide')){
    //         balconyTypeImage[b].classList.remove('hide');
    //         balconyTypeImage[b].classList.add('show');
    //     }
    //     if(balconyTypeImage[b].classList.contains('show')) {
    //         balconyType[b].classList.add('do_image_more');
    //     }
    // }
    // balconIcons.addEventListener('click',(elem) => {
    //     let target = event.target;
    //     elem.preventDefault();
    //     if(target && target.classList.contains('balcony_type')|| target.parentNode.classList.contains('balcony_type')){
    //         for(let i =0; i<balconyType.length;i++){
    //             if(target == balconyType[i] || target.parentNode == balconyType[i]){
    //                 objectCalc.formBalcony = balconyType[i].alt;
    //                 showBalconyType(0);
    //                 HidebalconyType(i); 
    //             }
                      
    //         }
    //     }
    // });
    // // калькулятор 
    // let buttonCalcClick = (elem) => {
    //     elem.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // }
    // let closeCalc = (elem) => {
    //     popupCalc.style.display = 'none';
    //     popupCalcProfile.style.display = 'none';
    //     popupCalcProfileEnd.style.display = 'none';
    //     document.body.style.overflow = '';
    //     w.value = '';
    //     h.value = '';
    //     cold.checked ='';
    //     warm.checked = '';   
    // }
    // body1.addEventListener('click',(event) => {
    //     let target = event.target;
    //     if (target && target.classList.contains('popup_calc_btn')){
    //         buttonCalcClick(popupCalc);
    //     }
    //     if (target && target.classList.contains('popup_calc_button')){
    //         if ((w.value || h.value) && (w.value != 0 && h.value != 0)) {
    //             buttonCalcClick(popupCalcProfile);
    //             popupCalc.style.display = 'none';
    //             objectCalc.width = w.value;
    //             objectCalc.height = h.value;
                
    //         }else {
    //             alert('укажите размеры');
    //         }if(balconyType[0].classList.contains('do_image_more')){
    //             objectCalc.formBalcony = balconyType[0].alt;
    //         }
    //     }
    //     let checkedTypeGlasses = (elem) => {
    //         if (cold.checked){
    //             objectCalc.typeGlasses = labelCold;
    //         }else{
    //             objectCalc.typeGlasses = labelWarm;
    //         }
    //     };
    //     if (target && target.classList.contains('popup_calc_profile_button')){
    //         if(cold.checked || warm.checked) {
    //             checkedTypeGlasses(cold);
    //             checkedTypeGlasses(warm);
    //             buttonCalcClick(popupCalcProfileEnd);
    //             popupCalcProfile.style.display = 'none';
    //             objectCalc.selectType = t;
    //             objectCalc.typeGlasses;
    //         }else {
    //             alert('выберите профиль окна');
    //         }
    //     }
    //     if (target && target.classList.contains('typeGlass')|| selectTypeGlazes.options[0].value) {
    //         t = selectTypeGlazes.options[selectTypeGlazes.selectedIndex].value;
    //     }
    //     if (target && target.classList.contains('close_x')){
    //         closeCalc(target);
    //     }  
    // });
    // form форма   проверка инпутов 
    // let mesagge = {
    //     loadind:'Загрузка...',
    //     success:'Спасибо! Скоро мы с вами свяжемся',
    //     failure:'Что-то пошло не так...'
    // };

    // let form = document.querySelectorAll('.form'),
    //     input = document.getElementsByTagName("input"),
    //     inputNumbers = document.querySelectorAll('input[name="user_phone"]'),
    //     statusMessage = document.createElement('div');
    //     let dataCalc = {};
    //     dataCalc = objectCalc;
    //     console.log(dataCalc);
    //     console.log(inputNumbers);
 
    //     for (let i = 0; i< inputNumbers.length;i++){
    //         let inputNumbersall = inputNumbers[i];
    //         inputNumbersall.addEventListener('input', function(){
    //             this.value = this.value.replace(/[^0-9]/, '');
    //         })
    //     }
    //     let sendForm = (elem) => {
    //         elem.addEventListener('submit',(event) => {
    //             event.preventDefault();
    //             elem.appendChild(statusMessage);
                
    //             let formData = new FormData(elem);
    //             if (dataCalc) {
	// 			for (let key in dataCalc) {
	// 				formData.append(key, dataCalc[key]);
	// 			}
	// 		}
    //             let postData = (data) => {
    //                 return new Promise(function(resolve,reject){
    //                     let request = new XMLHttpRequest();

    //                     request.open('POST','server.php');

    //                     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //                     request.onreadystatechange = () => {
    //                         if(request.readyState < 4) {
    //                             resolve()
    //                             // statusMessage.classList.add('loading');
    //                         }else if (request.readyState === 4 && request.status === 200){
    //                             resolve()
    //                             // statusMessage.classList.remove('loading');
    //                             // statusMessage.classList.add('success');
    //                         }else {
    //                             reject()
    //                             // statusMessage.classList.add('failure');
    //                         }
    //                     }
    //                     request.send(data);
    //                 });    
    //             }
    //             let clearInput = () => {
    //                 for(let i =0; i<input.length;i++){
    //                     input[i].value = '';
    //                 }
    //             }
    //             let formDel = (dataCalc) => {
    //                 dataCalc = {};
    //                 return dataCalc;
    //             }
    //             postData(formData).then(() => statusMessage.innerHTML = mesagge.loadind).then(() => statusMessage.innerHTML = mesagge.success)
    //             .catch(() => statusMessage.innerHTML = mesagge.failure) 
    //             .then(clearInput)
    //             .then(formDel(dataCalc));
    //         });
    //     };
    //     form.forEach(function(elem){
    //         sendForm(elem);
    //     });
    // // tabs one табы с окнами

    // let glazing = document.querySelectorAll(".glazing_slider")[0],
	// 	tabContent = document.querySelectorAll(".glazing_type"),
	// 	tab = document.querySelectorAll(".glazing_block"),
    //     act = document.querySelectorAll('.act');//  класс внутри тега <а> для добавления классов active no_active
	// 	console.log(glazing);
    //     act[0].classList.add('active');

	// let hideTabContent = (a) => {
	// 	for (let i = a; i < tabContent.length; i++) {
	// 		tabContent[i].classList.remove("show");
	// 		tabContent[i].classList.add("hide");
	// 	}
		
	// 	for (let i = a; i < act.length;i++){
    //         act[i].classList.remove('active');
    //         act[i].classList.add('no_active');
    //     }
	// }
	// hideTabContent(1);

	// let showTabContent = (b) => {
	// 	if (tabContent[b].classList.contains("hide")) {
	// 		tabContent[b].classList.remove("hide");
	// 		tabContent[b].classList.add("show");
	// 	}
		
	// 	if (act[b].classList.contains('no_active')) {
    //         act[b].classList.remove('no_active');
    //         act[b].classList.add('active');
    //     }
	// }
	// glazing.addEventListener("click",(elem) =>  {
	// 	let target = elem.target;

	// 	if (target && target.classList.contains("glazing_block") || target.parentNode.classList.contains("glazing_block")) {
	// 		for(let i =0; i<tab.length;i++){
	// 			if(target == tab[i] || target.parentNode == tab[i]){
	// 				hideTabContent(0);
	// 				showTabContent(i);
	// 			}
	// 		}
	// 	}
	// });
    // // tabs two табы с отделкой

    
    // let sliderDecoration = document.querySelector('.decoration_slider'),
    //     decorationContent = document.querySelectorAll('.cont_dec'),
    //     furnishActive = document.querySelectorAll('.furnishActive');

    // let hideFurnish = (a) => {
    //     for (let i = a; i<decorationContent.length;i++){
    //         decorationContent[i].classList.remove('show');
    //         decorationContent[i].classList.add('hide');
    //     }

    //     for(let i = a; i< furnishActive.length;i++){
    //         furnishActive[i].classList.remove('after_click');
    //         furnishActive[i].classList.add('no_click');
    //     }
        
    // }
    // hideFurnish(1);
    // let showfurnish = (b) =>{
    //     if(decorationContent[b].classList.contains('hide')){
    //         decorationContent[b].classList.remove('hide');
    //         decorationContent[b].classList.add('show');
            
    //     }
    //     if (furnishActive[b].classList.contains('no_click')){
    //         furnishActive[b].classList.remove('no_click');
    //         furnishActive[b].classList.add('after_click');
    //     }
    // }
    // sliderDecoration.addEventListener('click',(elem) => {
    //     let target = event.target;
    //     if (target && target.classList.contains('furnishActive')|| target.parentNode.classList.contains('furnishActive')){
    //         for (let i = 0; i < furnishActive.length;i++){
    //             if(target == furnishActive[i] || target.parentNode == furnishActive[i]){
    //                 hideFurnish(0);
    //                 showfurnish(i);
    //             }
    //         }
    //     }
    // });
    // timer 
    // let deadLine = "2019-12-18";

    // let getTimeRemaning = (endtime) => {
    //     let t = Date.parse(endtime) - Date.parse(new Date()),
    //     days = Math.floor((t /(1000 * 60 * 60 * 24))),
    //     seconds = Math.floor((t/1000)%60),
    //     minutes = Math.floor((t/1000/60)%60),
    //     hours = Math.floor((t/(1000*60*60)));
    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };

    // }
    // let setClock = (id, endtime) => {
    //     let timer = document.getElementById(id),
    //         days = timer.querySelector('#days');
    //         console.log(days.textContent);
    //         let hours = timer.querySelector('#hours');
    //         console.log(hours.textContent);
    //         let minutes = timer.querySelector('#minutes');
    //         console.log(minutes.textContent);
    //         let seconds = timer.querySelector('#seconds'),
    //         timeInterval = setInterval(updateClock, 1000);
    //     function updateClock(){
    //         let t = getTimeRemaning(endtime);
    //         if (t.hours < 10){
    //             t.hours = '0' + t.hours;
    //         }
    //             if (t.minutes < 10) {
    //                 t.minutes = '0' + t.minutes;
    //             }
    //                 if (t.seconds < 10){
    //                     t.seconds = '0' + t.seconds;
    //                 }
    //         days.textContent = t.days;
    //         hours.textContent = t.hours;
    //         minutes.textContent = t.minutes;
    //         seconds.textContent = t.seconds;
            
    //         if(t.total <= 0){
    //             clearInterval(timeInterval);
    //         days.textContent = '00';
    //         hours.textContent = '00';
    //         minutes.textContent = '00';
    //         seconds.textContent = '00';
    //         }
    //     }
    // }
    // setClock('timer',deadLine);
});



	
    
      
    


