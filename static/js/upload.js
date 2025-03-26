document.addEventListener('DOMContentLoaded', function() {
    const uploadForm = document.getElementById('uploadForm');// gets the uploadfomr
    if (uploadForm) {
        const result_section = document.getElementById('result');// gets the result section from the html
        const download_section = document.getElementById('downloadSection'); //gets the  Download Section from the html
        const download_button = document.getElementById('downloadButton'); // gets the  Download Button from the html

        uploadForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData();// creates a FormData object to capture form inputs
            const file_input = document.getElementById('fileInput');
            formData.append('file', file_input.files[0]);
            //Send a POST request to the Flask backend to upload the file
            fetch("/upload", {
                method: 'POST',// uses POST method to send the file data
                body: formData// attach the file data as the request body
            })
            .then(response => response.json())// converts the server repsonse to json
            .then(data => {
                // console.log("Upload Response:", data);
                if (data.error) {
                    result_section.innerHTML = `<p class="error">${data.error}</p>`;// shows the error message if uplaod fails 
                    download_section.style.display = "none"; // hides download section on error
                } else {
                    // displays the scan results 
                    result_section.innerHTML = `
                        <div class="card result-card">
                            <h2>Scan Results</h2>
                            <p><strong>File Name:</strong> ${data.filename}</p>
                            <p><strong>Scan Result:</strong> ${data.result}</p>
                        </div>
                    `;

                            // shows Download Section and Set Download URL
                            download_section.style.display = "block";
                            download_button.onclick = function() {
                                   //  generates the download URL dynamically using the returned filename
                                   window.location.href = "/download/" + data.filename;

                            };
                }
            })
            .catch(error => {
                console.error('Error:', error);// logs any errors the accour during the request
                result_section.innerHTML = `<p class="error">An error occurred. Please try again.</p>`;
                download_section.style.display = "none"; // hides download section on error
            });
        });
    }
});