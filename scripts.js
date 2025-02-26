// Function to generate prompt based on user input
function generatePrompt() {
    var topic = document.getElementById("topic").value;
    var contentType = document.getElementById("content_type").value;
    var tone = document.getElementById("tone").value;

    if (!topic.trim()) {
        alert("Please enter a topic.");
        return;
    }
    
    var prompt = `Write a ${tone.toLowerCase()} ${contentType.toLowerCase()} about ${topic}.`;
    document.getElementById("generated_prompt").innerText = prompt;
}
