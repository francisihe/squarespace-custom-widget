document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function() {
        // Get the input keyword
        const keyword = document.querySelector('.keyword-input').value;

        // Get the selected category
        const category = document.querySelector('.category-dropdown-menu').value;

        // Construct the data object to send
        const searchData = {
            keyword: keyword,
            category: category
        };

        // Send the data to your domain
        sendDataToDomain(searchData);
    });

    function sendDataToDomain(data) {
        // Replace 'your-domain.com' with your actual domain
        const domain = 'https://your-domain.com';

        // Send data using Fetch API
        fetch(domain, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle response if needed
            console.log('Response:', data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    }
});
