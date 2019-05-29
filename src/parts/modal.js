function modalImage (){
    
    let popup = document.querySelector(".popup"),
		popupEngineer = document.querySelector(".popup_engineer"),
		body = document.querySelector("body"),
        closeFormStrong = document.querySelectorAll('popup_close, strong'),
        divBigImage = document.createElement('div');

        body.appendChild(divBigImage);
        divBigImage.classList.add('overlay', 'bigImage');
        
    closeFormStrong.forEach((elem) => {
        elem.classList.add('close_x');
    });
	let buttonClick = (elem) => {
		elem.style.display = "block";
		document.body.style.overflow = "hidden";
	}
    let closeFormBody = (modCloseBtn) => {
		popup.style.display = "none";
        popupEngineer.style.display ='none';
        divBigImage.style.display ='none';
		document.body.style.overflow = "";
	}
    let imageClick = (elem) =>{
        divBigImage.style.display = 'block';
        document.body.style.overflow = "hidden";
        divBigImage.innerHTML = `<img src='${elem.parentNode.href}' style='top:50%; left:50%; transform:translate(-50%, -50%); position:relative'>`;
    }

	body.addEventListener("click", (event) => {
		let target = event.target;
        
		if (target && target.classList.contains("header_btn")) {
			event.preventDefault();
			buttonClick(popupEngineer);
		}
		if (target && target.classList.contains("phone_link")) {
			event.preventDefault();
			buttonClick(popup);
		}
        if(target && target.classList.contains('image_small') || target.classList.contains('lupa')){
            event.preventDefault();
            imageClick(target);
        }
		if (target && target.classList.contains('close_x') || target.classList.contains("popup_engineer") || target.classList.contains('popup')||
            target.classList.contains('bigImage')) {
			closeFormBody(target);
		}
	});
	setTimeout(function velcom() {
		buttonClick(popup);
	}, 60000);
}
// module.exports = modalImage;
export default modalImage;