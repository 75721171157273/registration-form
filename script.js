document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;
    const requiredFields = ['name', 'dob', 'gender', 'email', 'phone', 'street', 'city', 'state', 'zip', 'tshirt'];

    requiredFields.forEach(function(field) {
        const input = document.getElementById(field);
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        showToast('Registration Successful!');
        this.reset();
    } else {
        alert('Please fill in all required fields.');
    }
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(function() {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}
