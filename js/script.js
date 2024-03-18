/** There is two way to get the form data depending on the form submission method.
 * 1. Using the form element and its fields
 * 2. Using the formData object
*/

// Method 1: This method is used to get the form data using the form element and its fields
// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const empForm = document.getElementById('empForm');
    
    // Add an event listener for the submit event on the form
    empForm.addEventListener('submit', event => {
        event.preventDefault(); // Prevent the default form submission action
        
        // Get the values of the form fields by their IDs
        const id = document.getElementById('id').value;
        const name = document.getElementById('name').value;
        const ext = document.getElementById('ext').value;
        const email = document.getElementById('email').value;
        const department = document.getElementById('department').value;
        
        // Use template literals to format the output and log the form data to the console by their respective fields
        console.log(`ID: ${id}\nName: ${name}\nExtension: ${ext}\nEmail: ${email}\nDepartment: ${department}`);
    });
});

// // Method 2: Using the formData object to wrap the form data and get the values of the form fields
// // Wait for the DOM to fully load before running the script
// document.addEventListener('DOMContentLoaded', () => {
//     // Get the form element by its ID
//     const empForm = document.getElementById('empForm');
    
//     // Add an event listener for the submit event on the form
//     empForm.addEventListener('submit', event => {
//         // Prevent the default form submission action
//         event.preventDefault();
        
//         // Create an object to store the form data to get the values of the form fields
//         const formData = {
//             id: document.getElementById('id').value, // Get the value of the ID
//             name: document.getElementById('name').value, // Get the value of the name
//             ext: document.getElementById('ext').value, // Get the value of the extension
//             email: document.getElementById('email').value, // Get the value of the email
//             department: document.getElementById('department').value // Get the selected value of the department dropdown
//         };
        
//         // Log the form data object to the console
//         console.log('Form Data:', formData);
//     });
// });
