
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm'); // get the login form by its ID
    const loginUrl = form.getAttribute('data-login-url'); // get the login URL from the data attribute

    form.addEventListener('submit', function(event) {// event listener to handle form submission 
        event.preventDefault();  // Stop default form submission

        const formData = new FormData(form);// object to store the form input 
        const formBody = new URLSearchParams(formData).toString(); // Convert to URL encoded string

        fetch(loginUrl, { //  send an HTTP POST request to the Flask `/login` route
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'  // ensures correct encoding
            },
            body: formBody //send the form data as the request body
        })
        .then(response => response.json())
        .then(data => {
            // console.log("Server Response:", data);  
            if (data.success) {
                window.location.href = data.redirect_url; // Redirects user to the specified page
            } else {
                alert(data.error || 'Invalid credentials. Please try again.');// shows the message it credentaials are incorrect 
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});




