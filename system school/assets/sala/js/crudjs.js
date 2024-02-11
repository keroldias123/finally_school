document.addEventListener('DOMContentLoaded', function () {
    const addStudentForm = document.getElementById('addStudentForm');
    const studentTableBody = document.getElementById('studentTableBody');
    const studentCard = document.getElementById('studentCardContainer');
    const cardView = document.getElementById('cardView');
    const tableView = document.getElementById('tableView');
    const profileView = document.getElementById('profileView'); // Adicione esta linha
    let students = [];

    addStudentForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newStudentName = document.getElementById('newStudentName').value;
        const newStudentDOB = document.getElementById('newStudentDOB').value;

        if (newStudentName && newStudentDOB) {
            const newStudent = {
                name: newStudentName,
                dob: newStudentDOB
                // Add more fields as needed
            };

            students.push(newStudent);

            renderStudentTable();
            renderStudentCard();
            addStudentForm.reset();
        }
    });

    function renderStudentTable() {
        studentTableBody.innerHTML = '';

        students.forEach(function (student, index) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${student.name}</td>
                <td>${student.dob}</td>
                <td>
                    <button type="button" onclick="viewStudent(${index})">View</button>
                    <button type="button" onclick="editStudent(${index})">Edit</button>
                    <button type="button" onclick="deleteStudent(${index})">Delete</button>
                </td>
            `;

            studentTableBody.appendChild(row);
        });
    }

    function renderStudentCard() {
        studentCard.innerHTML = '';

        students.forEach(function (student, index) {
            const cardContent = document.createElement('div');
            cardContent.classList.add('col-md-3', 'card-col'); // Bootstrap grid class
            cardContent.innerHTML = `
                <h5 class="card-title">${student.name}</h5>
                <p class="card-text">Date of Birth: ${student.dob}</p>
                <!-- Add more fields as needed -->
                <div class="operation-buttons">
                    <button type="button" onclick="viewStudent(${index})" class="btn btn-primary">View</button>
                    <button type="button" onclick="editStudent(${index})" class="btn btn-warning">Edit</button>
                    <button type="button" onclick="deleteStudent(${index})" class="btn btn-danger">Delete</button>
                </div>
            `;

            studentCard.appendChild(cardContent);
        });
    }

    function viewStudent(index) {
        const student = students[index];

        // Exibir perfil do estudante
        profileView.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${student.name}</h5>
                    <p class="card-text">Date of Birth: ${student.dob}</p>
                    <!-- Adicione mais campos conforme necessário -->
                    <div class="operation-buttons">
                        <button type="button" onclick="hideProfile()" class="btn btn-secondary">Back</button>
                    </div>
                </div>
            </div>
        `;

        // Alternar para a visualização do perfil
        cardView.classList.add('hidden');
        tableView.classList.add('hidden');
        profileView.classList.remove('hidden');
    }

    function hideProfile() {
        // Ocultar a visualização do perfil e alternar de volta para a visualização de cards ou tabela
        cardView.classList.remove('hidden');
        tableView.classList.remove('hidden');
        profileView.classList.add('hidden');
    }
    function editStudent(index) {
        // Implement edit functionality for card or table view as needed
        // ...

        // For now, let's just log the student object to the console
        console.log(students[index]);
    }

    function deleteStudent(index) {
        students.splice(index, 1);
        renderStudentTable();
        renderStudentCard();
    }
});
