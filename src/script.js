function getReadme(user, repo) {
    fetch(`https://api.github.com/repos/${user}/${repo}/contents/README.md`) // Fetch the file from GitHub's api
        .then(response => response.json())
        .then(data => {
            const content = atob(data.content); // Convert from base64 to readable text
                  document.getElementById("readme-text").textContent = content; // Apply content to the document
            console.log(content); // Log the content to the console
        })
        .catch(error => console.log(error)); // Catch any errors
}

getReadme("amirhnajafiz", "amirhnajafiz");
