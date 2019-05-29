function furnishTabs() {

    let sliderDecoration = document.querySelector('.decoration_slider'),
        decorationContent = document.querySelectorAll('.cont_dec'),
        furnishActive = document.querySelectorAll('.furnishActive');

    let hideFurnish = (a) => {
        for (let i = a; i<decorationContent.length;i++){
            decorationContent[i].classList.remove('show');
            decorationContent[i].classList.add('hide');
        }

        for(let i = a; i< furnishActive.length;i++){
            furnishActive[i].classList.remove('after_click');
            furnishActive[i].classList.add('no_click');
        }
        
    }
    hideFurnish(1);
    let showfurnish = (b) =>{
        if(decorationContent[b].classList.contains('hide')){
            decorationContent[b].classList.remove('hide');
            decorationContent[b].classList.add('show');
            
        }
        if (furnishActive[b].classList.contains('no_click')){
            furnishActive[b].classList.remove('no_click');
            furnishActive[b].classList.add('after_click');
        }
    }
    sliderDecoration.addEventListener('click',(elem) => {
        let target = event.target;
        if (target && target.classList.contains('furnishActive')|| target.parentNode.classList.contains('furnishActive')){
            for (let i = 0; i < furnishActive.length;i++){
                if(target == furnishActive[i] || target.parentNode == furnishActive[i]){
                    hideFurnish(0);
                    showfurnish(i);
                }
            }
        }
    });
}
// module.exports = furnishTabs;
export default furnishTabs;