
let dataCalc = {};
function calc() {
    
    let popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
        popupCalc = document.querySelector('.popup_calc'),
        popupCalcProfile = document.querySelector('.popup_calc_profile'),
        popupCalcProfileEnd = document.querySelector('.popup_calc_end'),
        body1 = document.querySelector('body'),
        balconIcons = document.querySelector('.balcon_icons'),
        balconyType = document.querySelectorAll('.balcony_type'),
        balconyTypeImage = document.querySelectorAll('.balcony_type_image'),
        width = document.getElementById('width'),
        height= document.getElementById('height'),
        selectTypeGlazes = document.getElementById('view_type'),
        cold = document.getElementsByName('checkbox-test')[0],
        warm = document.getElementsByName('checkbox-test')[1],
        coldWarm = document.getElementsByName('checkbox-test'),
        labelWarm = document.querySelectorAll('span[class="label"]')[1],
        labelCold = document.querySelectorAll('span[class="label"]')[0];
        labelWarm = labelWarm.textContent;
        labelCold = labelCold.textContent;
    let objectCalc = {};
        dataCalc = objectCalc;
    console.log(objectCalc);
    let w = width,
		h = height,
        t;
    let heightWidth = (elem)=>{
        elem.addEventListener('input',() => {
            w.value = w.value.replace(/[^0-9]/, '');
            h.value = h.value.replace(/[^0-9]/, '');
        });
    }
    heightWidth(width);
    heightWidth(height);

    // табы формы балкона и размеры
    let showBalconyType = (a) => {
        for(let i = a; i<balconyTypeImage.length;i++){
            balconyTypeImage[i].classList.remove('show');
            balconyTypeImage[i].classList.add('hide');
            balconyTypeImage[i].style.margin = 'auto';
        }
        for (let i = a; i<balconyType.length;i++){
            balconyType[i].classList.remove('do_image_more');
        
        }
    }
    showBalconyType(1);

    let HidebalconyType = (b) => {
        if(balconyTypeImage[b].classList.contains('hide')){
            balconyTypeImage[b].classList.remove('hide');
            balconyTypeImage[b].classList.add('show');
        }
        if(balconyTypeImage[b].classList.contains('show')) {
            balconyType[b].classList.add('do_image_more');
        }
    }
    balconIcons.addEventListener('click',(elem) => {
        let target = event.target;
        elem.preventDefault();
        if(target && target.classList.contains('balcony_type')|| target.parentNode.classList.contains('balcony_type')){
            for(let i =0; i<balconyType.length;i++){
                if(target == balconyType[i] || target.parentNode == balconyType[i]){
                    objectCalc.formBalcony = balconyType[i].alt;
                    showBalconyType(0);
                    HidebalconyType(i); 
                }
                      
            }
        }
    });
    // калькулятор 
    let buttonCalcClick = (elem) => {
        elem.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    let closeCalc = (elem) => {
        popupCalc.style.display = 'none';
        popupCalcProfile.style.display = 'none';
        popupCalcProfileEnd.style.display = 'none';
        document.body.style.overflow = '';
        w.value = '';
        h.value = '';
        cold.checked ='';
        warm.checked = '';   
    }
    body1.addEventListener('click',(event) => {
        let target = event.target;
        if (target && target.classList.contains('popup_calc_btn')){
            buttonCalcClick(popupCalc);
        }
        if (target && target.classList.contains('popup_calc_button')){
            if ((w.value || h.value) && (w.value != 0 && h.value != 0)) {
                buttonCalcClick(popupCalcProfile);
                popupCalc.style.display = 'none';
                objectCalc.width = w.value;
                objectCalc.height = h.value;
                
            }else {
                alert('укажите размеры');
            }if(balconyType[0].classList.contains('do_image_more')){
                objectCalc.formBalcony = balconyType[0].alt;
            }
        }
        let checkedTypeGlasses = (elem) => {
            if (cold.checked){
                objectCalc.typeGlasses = labelCold;
            }else{
                objectCalc.typeGlasses = labelWarm;
            }
        };
        if (target && target.classList.contains('popup_calc_profile_button')){
            if(cold.checked || warm.checked) {
                checkedTypeGlasses(cold);
                checkedTypeGlasses(warm);
                buttonCalcClick(popupCalcProfileEnd);
                popupCalcProfile.style.display = 'none';
                objectCalc.selectType = t;
                objectCalc.typeGlasses;
            }else {
                alert('выберите профиль окна');
            }
        }
        if (target && target.classList.contains('typeGlass')|| selectTypeGlazes.options[0].value) {
            t = selectTypeGlazes.options[selectTypeGlazes.selectedIndex].value;
        }
        if (target && target.classList.contains('close_x')){
            closeCalc(target);
        }  
    });
}
export default calc;
export { dataCalc };