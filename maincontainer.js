// Select the elements
const closeButton = document.querySelector(".minimize"); // Close button
const windowHeader = document.querySelector(".window-header"); // Window header
const windowContainer = document.querySelector(".window-container"); // The main window
const windowContent = document.querySelector(".window-content"); // Content inside window
const maximizeButton = document.querySelector(".maximize"); // Maximize button
const homeIcon = document.querySelector(".homeicon"); // Home icon

document.body.style.overflowY = "auto"; // Ensure scrolling is enabled

let isDragging = false;
let offsetX = 0;
let offsetY = 0;


// Dragging functionality
windowHeader?.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - windowContainer.offsetLeft;
    offsetY = e.clientY - windowContainer.offsetTop;
    windowContainer.style.position = "absolute";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Prevent moving out of the screen
    const navbarHeight = document.querySelector(".pixeltalk-navbar")?.offsetHeight || 0;
    const maxX = window.innerWidth - windowContainer.clientWidth;
    const maxY = window.innerHeight - windowContainer.clientHeight;

    newY = Math.max(navbarHeight, Math.min(newY, maxY));
    newX = Math.max(0, Math.min(newX, maxX));

    windowContainer.style.left = `${newX}px`;
    windowContainer.style.top = `${newY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

homeIcon?.addEventListener("click", function () {
    console.log("🔍 Home icon clicked - resetting window");

    // Reset window position to center
    const windowWidth = windowContainer.offsetWidth;
    const windowHeight = windowContainer.offsetHeight;
    const centerX = (window.innerWidth - windowWidth) / 2;
    const centerY = (window.innerHeight - windowHeight) / 2;

    // Show and position window
    windowContainer.style.display = "flex";
    windowContainer.style.position = "absolute";
    windowContainer.style.left = `${centerX}px`;
    windowContainer.style.top = `${centerY}px`;

    // Reset view state to categories
    const categoriesView = document.querySelector('.categories-view');
    const threadsView = document.querySelector('.threads-view');
    const messagesView = document.querySelector('.messages-view');

    if (categoriesView) categoriesView.classList.remove('hidden');
    if (threadsView) threadsView.classList.add('hidden');
    if (messagesView) messagesView.classList.add('hidden');

    // Reset window visibility
    windowContainer.classList.remove("collapsed");
    windowContent.classList.remove("collapsed");
    windowContent.style.display = "flex";
    windowContent.style.opacity = "1";

    console.log("✅ Window reset and centered");
});

// Close button functionality - Hide window
closeButton?.addEventListener("click", function () {
    console.log("Close button clicked - hiding main content");
    windowContainer.style.display = "none"; // Hide window
});

// Maximize/minimize functionality
maximizeButton?.addEventListener("click", function () {
    if (maximizeButton.getAttribute("name") === "chevron-up-outline") {
        maximizeButton.setAttribute("name", "chevron-down-outline");
        windowContent.style.display = "none"; // Hide content
        windowContainer.classList.add("collapsed");
    } else {
        maximizeButton.setAttribute("name", "chevron-up-outline");
        windowContent.style.display = "flex"; // Show content
        windowContainer.classList.remove("collapsed");
    }
});
