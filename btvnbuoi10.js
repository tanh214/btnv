let pinnedItem = null;

function addPerson() {
    const idInput = document.getElementById('id-input').value.trim();
    const nameInput = document.getElementById('name-input').value.trim();
    const dobInput = document.getElementById('dob-input').value;
    const taskInput = document.getElementById('task-input').value.trim();
    const contactInput = document.getElementById('contact-input').value.trim();

    if (idInput && nameInput && dobInput && taskInput && contactInput) {
        const newPerson = document.createElement('li');
        newPerson.textContent = `ID: ${idInput}, Tên: ${nameInput}, Ngày sinh: ${dobInput}, Công việc: ${taskInput}, Liên lạc: ${contactInput}`;
        newPerson.dataset.id = idInput;
        newPerson.dataset.name = nameInput.toLowerCase();

        newPerson.onclick = function() {
            newPerson.classList.toggle('selected');
        };

        document.getElementById('person-list').appendChild(newPerson);
        clearInputs();
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}

function clearInputs() {
    document.getElementById('id-input').value = "";
    document.getElementById('name-input').value = "";
    document.getElementById('dob-input').value = "";
    document.getElementById('task-input').value = "";
    document.getElementById('contact-input').value = "";
}

function pinTask() {
    const selectedItems = document.querySelectorAll('.selected');
    if (selectedItems.length === 1) {
        if (pinnedItem) {
            pinnedItem.classList.remove('pinned');
        }
        pinnedItem = selectedItems[0];
        pinnedItem.classList.add('pinned');
        pinnedItem.classList.remove('selected');

        // Ghim phần tử lên đầu danh sách
        const parent = document.getElementById('person-list');
        parent.insertBefore(pinnedItem, parent.firstChild);
    } else {
        alert("Vui lòng chọn đúng 1 công việc để ghim.");
    }
}

function cancelPinTask() {
    if (pinnedItem) {
        pinnedItem.classList.remove('pinned');
        pinnedItem = null;
    }
}

function removePerson() {
    const selectedItems = document.querySelectorAll('.selected');
    selectedItems.forEach(item => item.remove());
}

function sortList() {
    const sortOption = document.getElementById('sort-options').value;
    const personList = document.getElementById('person-list');
    const itemsArray = Array.from(personList.children);

    itemsArray.sort((a, b) => {
        if (sortOption === 'id') {
            return parseInt(a.dataset.id) - parseInt(b.dataset.id);
        } else if (sortOption === 'name') {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
    });

    // Thêm lại danh sách đã sắp xếp
    itemsArray.forEach(item => personList.appendChild(item));
}
