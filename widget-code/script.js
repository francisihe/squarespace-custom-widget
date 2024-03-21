/* Test Local Environment Variables */
const reactFrontendUrl = window.env.REACT_FRONTEND_URL;
console.log('Frontend URL:', reactFrontendUrl);
/* ----- */

document.addEventListener('DOMContentLoaded', function () {

    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function () {
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
        // Replace 'http://localhost:5173/' with the base URL of your domain
        const baseUrl = 'http://localhost:5173/';

        // Construct URLSearchParams object with the search data
        const searchParams = new URLSearchParams();
        searchParams.append('keyword', data.keyword);
        searchParams.append('category', data.category);

        // Construct the final URL with the query parameters
        const url = baseUrl + '?' + searchParams.toString();

        // // Navigate to the constructed URL
        // window.location.href = url;

        console.log('Data sent:', data);
    }

});
