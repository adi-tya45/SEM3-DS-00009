// Function to move to the next page
function nextPage(currentPageId, nextPageId) {
    
    const currentPage = document.getElementById(currentPageId);
    const requiredInputs = currentPage.querySelectorAll('[required]');
    let allValid = true;

    for (let input of requiredInputs) {
        if (!input.checkValidity()) {
            allValid = false;
            input.reportValidity(); 
            return; 
        }
    }

    if (allValid) {
        document.getElementById(currentPageId).style.display = "none";
        document.getElementById(nextPageId).style.display = "block";
    }
}

// Function to move back to the previous page
function prevPage(currentPageId, prevPageId) {
    document.getElementById(currentPageId).style.display = "none";
    document.getElementById(prevPageId).style.display = "block";
}

// Function to handle the final submission
function submitForm(event) {
    event.preventDefault(); 
    alert("Quiz submitted successfully! Thank you.");
    document.getElementById("quizForm").reset();
    document.getElementById("page3").style.display = "none";
    document.getElementById("page1").style.display = "block";
}