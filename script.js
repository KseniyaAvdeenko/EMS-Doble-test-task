
function openModal(modalId) {
    document.getElementById(modalId).classList.remove('block_hidden')
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('block_hidden')
}


const formInputs = [
    { id: 'emailPhone', type: 'text', name: 'emailPhone', placeholder: 'Email/Телефон', className: 'form__input rounded_10 width_full mb_4 button__text', label: '', labelClassname: '' },
    { id: 'password', type: 'password', name: 'password', placeholder: 'Пароль', className: 'form__input rounded_10 width_full button__text', label: '', labelClassname: '' },
    { id: 'savePassword', type: 'checkbox', name: 'save_password', placeholder: '', className: '', label: 'Запомнить пароль', labelClassname: 'checkbox__label' },
]
    
const formButtons = [
    { id: '', type: 'button', content: 'Восстановить', className: 'button-link restore__button mb_36', btnBg: false, btnBorder: false, onClickFn: null},
    { id: '', type: 'submit', content: 'Войти', className: 'form__button d_flex jc_center ai_center width_full rounded_10 button__text button_bg button_light-text mb_4', btnBg:true, btnBorder: false, onClickFn: null},
    { id: '', type: 'submit', content: 'Зарегестрироваться', className: 'form__button d_flex jc_center ai_center width_full rounded_10 button__text button_border button_dark-text', btnBg: false, btnBorder: true, onClickFn: null},
]

class FormElemewnts {
    getHeading(heading) {
        if (heading) {
            return `<h4 class="form__heading mb_18">${heading}</h4>`
        } else {
            return ''
        }
    }
    getInputs(inputsArray) {
        let inputs = ``
        inputsArray.map(input => {
            if(input.type !== 'checkbox'){
                inputs += `<input type="${input.type}" name="${input.name}" placeholder="${input.placeholder}" id="${input.id}" class="${input.className}">`
            }else if (input.type === 'checkbox'){
                inputs += `<div class="form-input__container width_full d_flex ai_center">
                            <input type="${input.type}"  name="${input.name}" id="${input.id}">
                            <label for="${input.id}" class=${input.labelClassname}>${input.label}</label>
                        </div>`
            }
        });
       return inputs
    }
    getButtons(buttonsArray){
        let buttons = ``
        buttonsArray.map(btn=>{
            if(!btn.btnBg && !btn.btnBorder){
                buttons += `<div class="${btn.className}" onclick="${btn.onClickFn}">${btn.content}</div>`
            }else {
                buttons += `<button type="${btn.type}" class="${btn.className}" onclick="${btn.onClickFn}">${btn.content}</button>`
            }
        })
        return buttons
    }
}
function getForm(formId, formHeaning, inputsArray, buttonsArray) {
    const newForm = new FormElemewnts();
    document.getElementById(formId).innerHTML = newForm.getHeading(formHeaning) + newForm.getInputs(inputsArray) + newForm.getButtons(buttonsArray);
}

getForm('modalForm', 'Войти в систему', formInputs, formButtons)