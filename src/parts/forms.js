
    import calc, { dataCalc } from './calc';

function forms () {
    let mesagge = {
        loadind:'Загрузка...',
        success:'Спасибо! Скоро мы с вами свяжемся',
        failure:'Что-то пошло не так...'
    };

    let form = document.querySelectorAll('.form'),
        input = document.getElementsByTagName("input"),
        inputNumbers = document.querySelectorAll('input[name="user_phone"]'),
        statusMessage = document.createElement('div');
 
        for (let i = 0; i< inputNumbers.length;i++){
            let inputNumbersall = inputNumbers[i];
            inputNumbersall.addEventListener('input', function(){
                this.value = this.value.replace(/[^0-9]/, '');
            })
        }
        let sendForm = (elem) => {
            elem.addEventListener('submit',(event) => {
                event.preventDefault();
                elem.appendChild(statusMessage);
                
                let formData = new FormData(elem);
                if (dataCalc) {
				for (let key in dataCalc) {
					formData.append(key, dataCalc[key]);
				}
			}
                let postData = (data) => {
                    return new Promise(function(resolve,reject){
                        let request = new XMLHttpRequest();

                        request.open('POST','server.php');

                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                        request.onreadystatechange = () => {
                            if(request.readyState < 4) {
                                resolve()
                                // statusMessage.classList.add('loading');
                            }else if (request.readyState === 4 && request.status === 200){
                                resolve()
                                // statusMessage.classList.remove('loading');
                                // statusMessage.classList.add('success');
                            }else {
                                reject()
                                // statusMessage.classList.add('failure');
                            }
                        }
                        request.send(data);
                    });    
                }
                let clearInput = () => {
                    for(let i =0; i<input.length;i++){
                        input[i].value = '';
                    }
                }
                let formDel = (dataCalc) => {
                    dataCalc = {};
                    return dataCalc;
                }
                postData(formData).then(() => statusMessage.innerHTML = mesagge.loadind).then(() => statusMessage.innerHTML = mesagge.success)
                .catch(() => statusMessage.innerHTML = mesagge.failure) 
                .then(clearInput)
                .then(formDel(dataCalc));
            });
        };
        form.forEach(function(elem){
            sendForm(elem);
        })
}
// module.exports = forms;
export default forms;