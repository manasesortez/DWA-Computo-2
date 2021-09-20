var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }

}
    function readFormData() {
    var formData = {};
    formData["Nombre"] = document.getElementById("Nombre").value;
    formData["Genero"] = document.getElementById("Genero").value;
    formData["Director"] = document.getElementById("Director").value;
    formData["Duracion"] = document.getElementById("Duracion").value;
    formData["Edad"] = document.getElementById("Edad").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("movieList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Genero;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Director;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Duracion;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Edad;

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("Nombre").value = "";
    document.getElementById("Genero").value = "";
    document.getElementById("Director").value = "";
    document.getElementById("Duracion").value = "";
    document.getElementById("Edad").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Genero").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Director").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Duracion").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Edad").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nombre;
    selectedRow.cells[1].innerHTML = formData.Genero;
    selectedRow.cells[2].innerHTML = formData.Director;
    selectedRow.cells[3].innerHTML = formData.Duracion;
    selectedRow.cells[4].innerHTML = formData.Edad;

}

function onDelete(td) {
    if (confirm('Estas Seguro de Eliminar esta Pelicula?')) {
        row = td.parentElement.parentElement;
        document.getElementById("movieList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Nombre").value == "") {
        isValid = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NameValidationError").classList.contains("hide"))
            document.getElementById("NameValidationError").classList.add("hide");
    }
    return isValid;
}
