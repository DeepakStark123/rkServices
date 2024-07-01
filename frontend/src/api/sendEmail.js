function sendEmail() {
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const applicationType = document.getElementById('applicationType').value;
    const comments = document.getElementById('commentTextArea').value;

    fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            applicationType: applicationType,
            comments: comments
        })
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
