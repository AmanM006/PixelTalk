const chatHeader = document.querySelector(".chat-header");
const chatContainer = document.querySelector(".chat-container");
const chatroom = document.querySelector(".chatroom")
const chaticon = document.querySelector(".chatimg");
const closeButton2 = document.querySelector(".minimize2");
const maximizeButton2 = document.querySelector(".maximize2"); // Maximize button
const chatcontent = document.querySelector(".text-content2")
console.log("Chat script loaded");

let isDragging3 = false;
let offsetX3 = 0;
let offsetY3 = 0;

chatHeader?.addEventListener("mousedown", (e) => {
    e.preventDefault(); // Prevent any default behavior
    isDragging3 = true;
    offsetX3 = e.clientX - chatContainer.offsetLeft;
    offsetY3 = e.clientY - chatContainer.offsetTop;
    chatContainer.style.position = "absolute";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging3) return;

    let newX3 = e.clientX - offsetX3;
    let newY3 = e.clientY - offsetY3;

    // Prevent moving out of the screen
    const navbarHeight = document.querySelector(".pixeltalk-navbar")?.offsetHeight || 0;
    const maxX3 = window.innerWidth - chatContainer.clientWidth;
    const maxY3 = window.innerHeight - chatContainer.clientHeight;

    newY3 = Math.max(navbarHeight, Math.min(newY3, maxY3));
    newX3 = Math.max(0, Math.min(newX3, maxX3));

    chatContainer.style.left = `${newX3}px`;
    chatContainer.style.top = `${newY3}px`;
});

document.addEventListener("mouseup", () => {
    isDragging3 = false;
});


function centerChatWindow() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const chatWidth = chatContainer.offsetWidth;
    const chatHeight = chatContainer.offsetHeight;
    
    // Calculate center position
    const centerX = (windowWidth - chatWidth) / 2;
    const centerY = (windowHeight - chatHeight) / 2;
    
    // Set position
    chatContainer.style.left = `${centerX}px`;
    chatContainer.style.top = `${centerY}px`;
}

document.addEventListener("DOMContentLoaded", function () {
    const chatContent = document.querySelector(".text-content");
    if (chatContent) {
        chatContent.style.height = "calc(100% - 30px)"; // Adjust height to account for header
        chatContent.style.overflowY = "auto";
        chatContent.style.display = "flex";
        chatContent.style.flexDirection = "column";
    }
    
    const closeButton = document.querySelector(".close-button");

    console.log("Script Loaded");

    chaticon?.addEventListener("click", function () {
        console.log("2");
        // Remove collapsed class when opening chat
        chatContainer.classList.remove("collapsed");
        chatroom.style.display = "flex";
        chatroom.style.opacity = 1;
        
        // Reset maximize button icon and show content
        if (maximizeButton2) {
            maximizeButton2.setAttribute("name", "chevron-up-outline");
            chatcontent.style.display = "flex";
        }

        // Center the chat window
        chatContainer.style.position = "absolute";
        centerChatWindow();
    });

    closeButton2?.addEventListener("click", function () {
        chatroom.style.display = "none";
        chatroom.style.opacity = 0;
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal2) {
            chatroom.style.display = "flex";
            chatroom.style.opacity = 1;

        }
    });
    const windows = document.querySelectorAll(".chat-container"); 
    windows.forEach((win) => {
        win.addEventListener("mousedown", function () {
            windows.forEach(w => w.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

maximizeButton2?.addEventListener("click", function () {
    if (maximizeButton2.getAttribute("name") === "chevron-up-outline") {
        maximizeButton2.setAttribute("name", "chevron-down-outline");
        chatcontent.style.display = "none"; // Hide chat content
        chatContainer.classList.add("collapsed");
    } else {
        maximizeButton2.setAttribute("name", "chevron-up-outline");
        chatcontent.style.display = "flex"; // Show chat content
        chatContainer.classList.remove("collapsed");
    }
});

// Add window resize handler to keep centered if window is resized while chat is open
window.addEventListener("resize", () => {
    if (chatroom.style.display === "flex") {
        centerChatWindow();
    }
});

