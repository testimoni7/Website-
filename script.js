function copyCode(elementId) {
    // Get the code element by ID
    var codeElement = document.getElementById(elementId);

    // Create a temporary textarea to hold the code text
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = codeElement.innerText;
    
    // Append the textarea to the document body
    document.body.appendChild(tempTextarea);
    
    // Select the text in the textarea
    tempTextarea.select();
    
    // Copy the text to the clipboard
    document.execCommand("copy");
    
    // Remove the temporary textarea from the document
    document.body.removeChild(tempTextarea);
    
    alert("Code copied to clipboard!");
}