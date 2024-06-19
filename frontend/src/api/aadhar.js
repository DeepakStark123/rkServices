//--Post-Adhar-Update-Form-Data----

document.getElementById('mobileUpdateForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const purpose = document.getElementById('purposeType').value;
    const aadharNumber = document.getElementById('aadharNumber').value;
    const fullName = document.getElementById('fullName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://localhost:5001/api/aadhar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            purpose,
            aadharNumber,
            fullName,
            mobileNumber,
            email
        })
    });

    const data = await response.json();
    if (response.ok) {
        console.log('Aadhar updated successfully!');
        alert('Aadhar updated successfully!');
        // Clear the form
        document.getElementById('mobileUpdateForm').reset();
        // Optionally, you can redirect or perform another action
    } else {
        console.log('Failed to update Aadhar: ' + data.message);
        alert('Failed to update Aadhar: ' + data.message);
    }
});

