function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example validation
    if (username === 'admin' && password === 'password') {
        window.location.href = 'home.html'; // Redirect to home.html on success
    } else {
        alert('Invalid login credentials!');
    }
    return false; // Prevent the form from submitting traditionally
}