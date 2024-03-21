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

// Send the data to react frontend domain, then navigate, no need to send to API:

function sendDataToDomain(data) {
    // Replace 'http://localhost:5173/' with the base URL of your domain
    const baseUrl = 'http://localhost:5173/';

    // Construct URLSearchParams object with the search data
    const searchParams = new URLSearchParams();
    searchParams.append('keyword', data.keyword);
    searchParams.append('category', data.category);

    // Construct the final URL with the query parameters
    const url = baseUrl + '?' + searchParams.toString();

    // Navigate to the constructed URL
    window.location.href = url;
}



// Using the search parameter to send data to React frontend without navigation

function sendDataToDomain(data) {
    // Replace 'http://localhost:5173/' with the base URL of your domain
    const baseUrl = 'http://localhost:5173/';

    // Construct URLSearchParams object with the search data
    const searchParams = new URLSearchParams();
    searchParams.append('keyword', data.keyword);
    searchParams.append('category', data.category);

    // Construct the final URL with the query parameters
    const url = baseUrl + '?' + searchParams.toString();

    // Send data using Fetch API
    fetch(url, {
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