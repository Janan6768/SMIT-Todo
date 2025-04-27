const textInput = document.getElementById('add');
const add = document.getElementById('button');
const ul = document.getElementById('ul-list');

add.addEventListener('click', () => {
    if(textInput.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${textInput.value}
        <span class="edit">
        <i class="fa-solid fa-pen"></i>
        </span>
        <span class="delete">
        <i class="fa-solid fa-trash"></i>
        </span>
        `;
        ul.appendChild(li)
        
        textInput.value = '';
        textInput.focus();
    }
    else {
        alert('PLease Enter SOme Values!')
    }
});

ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-trash'))
    e.target.closest('li').remove();
});

ul.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-pen')) {
        const oldText = e.target.closest('li');
        textInput.value = oldText.firstChild.textContent;

    }
})

