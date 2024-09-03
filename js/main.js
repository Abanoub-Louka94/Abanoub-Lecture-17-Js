class Form {
    constructor(id) {
        this.id = id;
        const form = document.createElement('form');
        form.id = this.id,
        form.className = 'my-form';
        const aside = document.querySelector('.filtration .form-container');
        aside.appendChild(form);
    }
}

class Input {
    constructor(type, name, id) {
        this.type = type,
        this.id = id
        this.name = name;
        const input = document.createElement('input');
        input.type = this.type,
        input.id = this.id,
        input.name = this.name;
        const form = document.querySelector('aside .my-form');
        form.appendChild(input);
    }
}

class Label {
    constructor(value,className) {
        this.value = value;
        this.className= className;
        const label = document.createElement('label');
        label.innerText = this.value;
        label.className = this.className
        label.setAttribute('for', this.value)
        const form = document.querySelector('aside .my-form');
        form.appendChild(label)
    }
}


const myForm = new Form('filter-form');

const vega = new Input('radio', 'hardware', 'vega');
const vegaLabel = new Label ('vega', 'vega-label');

const board = new Input('radio', 'hardware', 'board');
const boardsLabel = new Label ('board', 'board-label');

const form = document.querySelector('aside .my-form');
const vegaContainer = document.createElement('div');
vegaContainer.classList = 'vega-con';
form.appendChild(vegaContainer);

const boardContainer = document.createElement('div');
boardContainer.classList = 'boards-con';
form.appendChild(boardContainer);

const vegaInput = document.querySelector('#vega');
const myVega = document.querySelector('.vega-label')
vegaContainer.appendChild(vegaInput);
vegaContainer.appendChild(myVega);

const boardInput = document.querySelector('#board');
const myBoard = document.querySelector('.board-label');
boardContainer.appendChild(boardInput);
boardContainer.appendChild(myBoard);






