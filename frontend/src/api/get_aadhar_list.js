//--Get-Adhar-Update-Form-Data----
document.addEventListener('DOMContentLoaded', fetchAadhars);
// Fetch Aadhar Update Form Data
async function fetchAadhars() {
    const response = await fetch('http://localhost:5001/api/aadhar');
    const data = await response.json();

    const aadharList = document.getElementById('aadharList');
    aadharList.innerHTML = '';
    data.forEach((aadhar, index) => {
        const row = `<tr>
            <td>${index + 1}</td>
            <td>${aadhar.fullName}</td>
            <td>${aadhar.aadharNumber}</td>
            <td>${aadhar.mobileNumber}</td>
            <td>${aadhar.email}</td>
            <td>${aadhar.fatherName || ''}</td>
            <td>${aadhar.dob || ''}</td>
            <td>${aadhar.purpose || ''}</td>
            <td>${aadhar.remark || ''}</td>
            <td>${new Date(aadhar.createdAt).toLocaleString()}</td>
            <td>
                <button class="btn btn-sm btn-warning">View</button>
                <button class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>`;
        aadharList.insertAdjacentHTML('beforeend', row);
    });
}
