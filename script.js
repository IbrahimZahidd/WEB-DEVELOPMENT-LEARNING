// Function to handle button clicks
function onClickEvent(action) {
  console.group("MainOnclickEvent");
  const message = document.getElementById("message");

  // Change text
  if (action === "text") {
    console.group("onClickEvent1");
    console.warn("Action is equal to text");
    console.groupEnd("onClickEvent1");
    changeText(message); // Calling another function to change the text
    alert("Text has been changed!"); // Alert when text is changed
  }

  // Change color
  if (action === "color") {
    console.group("onClickEvent2");
    console.warn("Action is equal to color");
    console.groupEnd("onClickEvent1");
    changeColor(message); // Calling another function to change the color
    alert("Color has been changed!"); // Alert when color is changed
  }
}

// Function to change the text content
function changeText(messageElement) {
  console.group("nestedcall");
  messageElement.textContent =
    "The text has been changed by clicking the button!";

  // Simulate a DOM modification by appending a new child
  const newElement = document.createElement("div");
  newElement.textContent =
    "This is a newly added div element inside the message.";
  messageElement.appendChild(newElement); // Append the new element to the message

  console.groupEnd("nestedcall");
  console.log("Text has been changed and a new element was added!");
}

// Function to change the background color and text color
function changeColor(messageElement) {
  console.group("nestedcall2");
  messageElement.style.backgroundColor = "#ff6347"; // Tomato color
  messageElement.style.color = "white"; // Change text color to white for contrast

  // Simulate a DOM modification by appending a new child
  const newElement = document.createElement("div");
  newElement.textContent = "Another new div added during color change.";
  messageElement.appendChild(newElement); // Append the new element to the message
  console.groupEnd("nestedcall2");
  console.log("Color has been changed and a new element was added!");
}
