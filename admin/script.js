
function toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    let menuBtn = document.querySelector('.menu-btn');

    // Toggle sidebar active state
    sidebar.classList.toggle('active');

    // Hide the menu button when sidebar is open, show it when closed
    if (sidebar.classList.contains('active')) {
        menuBtn.style.display = 'none';
    } else {
        menuBtn.style.display = 'block';
    }
}


function toggleMatricInput() {
    var feeSelect = document.getElementById("fees");
    var matricInputDiv = document.getElementById("matricNumberDiv");

    // Show input box only if "To Fellow Student" is selected
    if (feeSelect.value == "<?= $fees['lostfee']; ?>") {
        matricInputDiv.style.display = "block";
    } else {
        matricInputDiv.style.display = "none";
    }
}