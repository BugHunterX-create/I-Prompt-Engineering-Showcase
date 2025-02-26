// Function to generate prompt based on user input
function generatePrompt() {
    var topic = document.getElementById("topic").value;
    var contentType = document.getElementById("content_type").value;
    var tone = document.getElementById("tone").value;

    var prompt = "";
    if (contentType === "Blog") {
        prompt = `Write a blog post about ${topic}. The tone should be ${tone}, with an introduction, 3 main points, and a conclusion.`;
    } else if (contentType === "Product Description") {
        prompt = `Write a short, catchy product description for ${topic}.`;
    }

    // Display the generated prompt on the page
    document.getElementById("generated_prompt").innerText = prompt;
}
