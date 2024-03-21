// Send the data to react frontend domain, without navigation:

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


// Send data to react frontend then navigate

function sendDataToReactFrontendAndNavigate(data) {
    // Replace 'react-frontend-url.com' with the URL of your React frontend
    const reactFrontendUrl = 'https://react-frontend-url.com';

    // Send data to React frontend using Fetch API
    fetch(reactFrontendUrl + '/forward-search', {
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
        // Navigate to React frontend upon successful response
        window.location.href = reactFrontendUrl;
    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });
}