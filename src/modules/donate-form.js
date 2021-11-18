// import JS_IMAGE from '../../assets/background.jpg'

export class DonateForm {
    #donateContainer

    constructor() {

        this.#donateContainer = document.createElement('div')
        this.#donateContainer.className = 'donate-container'
    }

    render() {
        const donateFormCreate = document.createElement('form')
        donateFormCreate.className = 'donate-form'


        let formContent = document.createElement('h1')
        formContent.textContent = '28$'
        formContent.id = 'total-amount'

        let label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = 'Введите сумму в $'

        let input = document.createElement('input')
        input.className = 'donate-form__donate-input'
        input.name = 'amount'
        input.type = 'number'
        input.max = '100'
        input.min = '1'
        input.setAttribute('required', "")

        let button = document.createElement('button')
        button.className = 'donate-form__submit-button'
        button.type = 'submit'
        button.textContent = 'Задонатить'
        

        this.#donateContainer.append(donateFormCreate)
        donateFormCreate.appendChild(formContent)
        donateFormCreate.appendChild(label)
        label.appendChild(input)
        donateFormCreate.appendChild(button)

        return this.#donateContainer
    }
}


