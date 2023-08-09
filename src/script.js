const api = "https://api.github.com/repos";
const path = "contents/README.md";

function getReadme(user, repo) {
    fetch(`${api}/${user}/${repo}/${path}`) // Fetch the file from GitHub's api
        .then((response) => {
            response.json();
        })
        .then(data => {
            const content = atob(data.content); // Convert from base64 to readable text
                  document.getElementById("readme-text").textContent = content; // Apply content to the document
        })
        .catch((error) => {
            console.log(error)
        }); // Catch any errors
}

getReadme("amirhnajafiz", "amirhnajafiz");
