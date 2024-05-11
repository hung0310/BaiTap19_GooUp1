let studentList = []
let id = 0;
let index = 1;
let temp_List = []
window.onload = function() {
    Show(index);
    Pagination();
};

var tableList = document.getElementById('table_list_student');

function RenderList() {
    var tablebody = tableList.querySelector('tbody');
    tablebody.innerHTML = '';
    id = 0;
    studentList.forEach(student => {
        var row = document.createElement('tr');
        var ID_cell = document.createElement('td');
        var Ten_cell = document.createElement('td');
        var NS_cell = document.createElement('td');
        var GT_cell = document.createElement('td');
        var CN_cell = document.createElement('td');
 
        ID_cell.textContent = student.id;
        Ten_cell.textContent = student.ten;
        NS_cell.textContent = student.ns;
        GT_cell.textContent = student.gt;
        CN_cell.textContent = student.cn;

        row.appendChild(ID_cell);
        row.appendChild(Ten_cell);
        row.appendChild(NS_cell);
        row.appendChild(GT_cell);
        row.appendChild(CN_cell);

        tablebody.appendChild(row);
    });
}

function Pagination() {
    const filePath = 'data.json';
    var id = index;
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            var dt = JSON.parse(data);
            const numberOfLines = dt.length;
            var ulElement = document.getElementById('ul_number');
            const prevLi = document.createElement('li');
            prevLi.innerHTML = `<a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-emerald-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" id="Prev"><</a>`;
            ulElement.appendChild(prevLi);
            var prev = document.getElementById("Prev");
            prev.classList.add('disabled');

            for(let i = 1; i <= Math.ceil(numberOfLines/10); i++) {
                const pageLi = document.createElement('li');
                pageLi.innerHTML = `<a href="#" id="${i}" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-emerald-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${i}</a>`;
                ulElement.appendChild(pageLi);
                if(i == 1) {
                    var clickedItem = document.getElementById(`${i}`);
                    clickedItem.style.backgroundColor = 'gray'; 
                    clickedItem.style.color = 'white';
                }

                pageLi.addEventListener('click', function() {
                    id = i;
                    index = i;
                    ShowInfo(i);

                    var img_ns = document.querySelector('#sort_ns img');
                    img_ns.classList.add('hidden');
                    img_ns.src = 'sort_both.png';
                    img_ns.classList.remove('hidden'); 
                    img_ns.classList.add('design_img');
    
                    var img_tensv = document.querySelector('#sort_tensv img');
                    img_tensv.classList.add('hidden');
                    img_tensv.src = 'sort_both.png';
                    img_tensv.classList.remove('hidden'); 
                    img_tensv.classList.add('design_img');

                    if(id == Math.ceil(numberOfLines/10)) {
                        var next = document.getElementById("Next");
                        next.classList.add('disabled');
                    } else {
                        var next = document.getElementById("Next");
                        next.classList.remove('disabled');
                    }
                    if(id == 1) {
                        var prev = document.getElementById("Prev");
                        prev.classList.add('disabled');
                    } else {
                        var prev = document.getElementById("Prev");
                        prev.classList.remove('disabled');
                    }
                    var allLinks = document.querySelectorAll('ul#ul_number li a');
                    allLinks.forEach(function(link) {
                        link.style.backgroundColor = ''; 
                        link.style.color = ''; 
                    });
                    var clickedItem = document.getElementById(`${i}`);
                    clickedItem.style.backgroundColor = 'gray'; 
                    clickedItem.style.color = 'white';
                });
            }

            prevLi.addEventListener('click', function() {

                var img_ns = document.querySelector('#sort_ns img');
                img_ns.classList.add('hidden');
                img_ns.src = 'sort_both.png';
                img_ns.classList.remove('hidden'); 
                img_ns.classList.add('design_img');

                var img_tensv = document.querySelector('#sort_tensv img');
                img_tensv.classList.add('hidden');
                img_tensv.src = 'sort_both.png';
                img_tensv.classList.remove('hidden'); 
                img_tensv.classList.add('design_img');

                if(id == 1) {
                    var prev = document.getElementById("Prev");
                    prev.classList.add('disabled');
                } else {
                    --id;
                    index = id;
                    ShowInfo(id);
                    var next = document.getElementById("Next");
                    next.classList.remove('disabled');
    
                    var allLinks = document.querySelectorAll('ul#ul_number li a');
                    allLinks.forEach(function(link) {
                        link.style.backgroundColor = ''; 
                        link.style.color = ''; 
                    });
                    var clickedItem = document.getElementById(`${id}`);
                    clickedItem.style.backgroundColor = 'gray'; 
                    clickedItem.style.color = 'white';
                    if(id == 1) {
                        var prev = document.getElementById("Prev");
                        prev.classList.add('disabled');
                    }
                }
            });

            const nextLi = document.createElement('li');
            nextLi.innerHTML = `<a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-emerald-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" id="Next">></a>`;
            ulElement.appendChild(nextLi);

            nextLi.addEventListener('click', function() {
                var img_ns = document.querySelector('#sort_ns img');
                img_ns.classList.add('hidden');
                img_ns.src = 'sort_both.png';
                img_ns.classList.remove('hidden'); 
                img_ns.classList.add('design_img');

                var img_tensv = document.querySelector('#sort_tensv img');
                img_tensv.classList.add('hidden');
                img_tensv.src = 'sort_both.png';
                img_tensv.classList.remove('hidden'); 
                img_tensv.classList.add('design_img');

                if(id == Math.ceil(numberOfLines/10)) {
                    var next = document.getElementById("Next");
                    next.classList.add('disabled');
                } else {
                    ++id;
                    index = id;
                    ShowInfo(id);
                    var prev = document.getElementById("Prev");
                    prev.classList.remove('disabled');
    
                    var allLinks = document.querySelectorAll('ul#ul_number li a');
                    allLinks.forEach(function(link) {
                        link.style.backgroundColor = ''; 
                        link.style.color = ''; 
                    });
                    var clickedItem = document.getElementById(`${id}`);
                    clickedItem.style.backgroundColor = 'gray'; 
                    clickedItem.style.color = 'white';
                    if(id == Math.ceil(numberOfLines/10)) {
                        var next = document.getElementById("Next");
                        next.classList.add('disabled');
                    }
                }
            });

        })
        .catch(error => console.error('Error fetching data:', error));
}

RenderList();

function Array_Temp() {
    const filePath = 'data.json';
    studentList.splice(0, studentList.length);
    fetch(filePath)
        .then(response => response.json()) 
        .then(data => {
            temp_List =data;
        })
        .catch(error => console.error('Error fetching data:', error));
}

function ShowInfo(index) {
    let first_line = (index * 10 - 10);
    let last_line = index * 10 - 1; 
    studentList.splice(0, studentList.length);
    temp_List.slice(first_line, last_line + 1).forEach(obj => { 
        var ten = obj.ten;
        var ns = obj.ns;
        var gt = obj.gt;
        var cn = obj.cn;
        ++id;
        var newStudent = { id, ten, ns, gt, cn };
        console.log(newStudent);
        studentList.push(newStudent);
    });
    RenderList();
}

function Show(index) {
    Array_Temp();
    let first_line = (index * 10 - 10);
    let last_line = index * 10 - 1; 
    const filePath = 'data.json';
    studentList.splice(0, studentList.length);
    fetch(filePath)
        .then(response => response.json()) 
        .then(data => {
            data.slice(first_line, last_line + 1).forEach(obj => { 
                var ten = obj.ten;
                var ns = obj.ns;
                var gt = obj.gt;
                var cn = obj.cn;
                ++id;
                var newStudent = { id, ten, ns, gt, cn };
                console.log(newStudent);
                studentList.push(newStudent);
            });
            RenderList();
        })
        .catch(error => console.error('Error fetching data:', error));
}

let click_ten = 1;
let click_ns = 1;

document.getElementById('sort_tensv').addEventListener('click', function(event) {
    event.preventDefault(); 
    click_ten++;
    var img = document.querySelector('#sort_tensv img');

    var img_ns = document.querySelector('#sort_ns img');
    img_ns.classList.add('hidden');
    img_ns.src = 'sort_both.png';
    img_ns.classList.remove('hidden'); 
    img_ns.classList.add('design_img');

    if (click_ten % 2 == 0) {
        img.classList.add('hidden'); 
        img.src = 'sort.png'; 
        img.classList.remove('hidden'); 
        if (img.classList.contains('design_img')) {
            img.classList.remove('design_img');
        }
        img.classList.add('add_img');
        img.style.transform = 'rotate(180deg)'; 
        var flag = 'ascending';
        InsertionSort_ByName(index, flag);
    } else {
        img.style.transform = 'rotate(360deg)';
        var flag = 'descending';
        InsertionSort_ByName(index, flag);
    }
});

document.getElementById('sort_ns').addEventListener('click', function(event) {
    event.preventDefault(); 
    click_ns++;
    var img = document.querySelector('#sort_ns img');

    var img_tensv = document.querySelector('#sort_tensv img');
    img_tensv.classList.add('hidden');
    img_tensv.src = 'sort_both.png';
    img_tensv.classList.remove('hidden'); 
    img_tensv.classList.add('design_img');

    if (click_ns % 2 == 0) {
        img.classList.add('hidden'); 
        img.src = 'sort.png'; 
        img.classList.remove('hidden'); 
        if (img.classList.contains('design_img')) {
            img.classList.remove('design_img');
        }
        img.classList.add('add_img');
        img.style.transform = 'rotate(180deg)'; 
        var flag = 'ascending';
        InsertionSort_ByBirth(index, flag);
    } else {
        img.style.transform = 'rotate(360deg)';
        var flag = 'descending';
        InsertionSort_ByBirth(index, flag);
    }
});

function insertionSortInRange(array, flag) {
    for (let i = 1; i < array.length; i++) { 
        let key = array[i];
        let j = i - 1;
        if (flag === 'ascending') {
            while (j >= 0 && compareDates(array[j].ns, key.ns) > 0) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        } else {
            while (j >= 0 && compareDates(array[j].ns, key.ns) < 0) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }
    return array;
}

function compareDates(date1, date2) {
    const [day1, month1, year1] = date1.split('/').map(Number);
    const [day2, month2, year2] = date2.split('/').map(Number);

    if (year1 !== year2) {
        return year1 - year2;
    }
    if (month1 !== month2) {
        return month1 - month2;
    }
    return day1 - day2;
}

function InsertionSort_ByBirth(index, flag) {
    let first_line = (index * 10 - 10);
    let last_line = index * 10 - 1;
    studentList.splice(0, studentList.length);
    insertionSortInRange(temp_List, flag);
    temp_List.slice(first_line, last_line + 1).forEach(obj => {
        var ten = obj.ten;
        var ns = obj.ns;
        var gt = obj.gt;
        var cn = obj.cn;
        ++id;
        var newStudent = { id, ten, ns, gt, cn };
        studentList.push(newStudent);
    });
    RenderList();
}

function InsertionSort_ByName(index, flag) {
    let first_line = (index * 10 - 10);
    let last_line = index * 10 - 1;
    studentList.splice(0, studentList.length);
    InsertionSortByName(temp_List, flag);
    temp_List.slice(first_line, last_line + 1).forEach(obj => {
        var ten = obj.ten;
        var ns = obj.ns;
        var gt = obj.gt;
        var cn = obj.cn;
        ++id;
        var newStudent = { id, ten, ns, gt, cn };
        studentList.push(newStudent);
    });
    RenderList();
}

function InsertionSortByName(array, flag) {
    for (let i = 1; i < array.length; i++) {
        if (flag === 'ascending') {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j].ten.localeCompare(key.ten) > 0) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        } else {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j].ten.localeCompare(key.ten) < 0) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
    }
    return array;
}
