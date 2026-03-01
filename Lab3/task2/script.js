const form = document.querySelector('#todo-form');
const input = document.querySelector('#input-task');
const list = document.querySelector('#list-container');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = input.value.trim();
    if (!taskText) return;

    const taskHTML = `
        <li class="list-item">
            <div class="item-left">
                <input type="checkbox">
                <span>${taskText}</span>
            </div>
            <button class="btn-delete">&#128465;</button>
        </li>`;

    list.insertAdjacentHTML('beforeend', taskHTML);

    input.value = '';
});

list.addEventListener('click', function (event) {
    const target = event.target;

    if (target.classList.contains('btn-delete')) {
        target.closest('li').remove();
    }

    if (target.type === 'checkbox') {
        target.closest('li').classList.toggle('completed');
    }
});