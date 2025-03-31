const loginHead = document.querySelector(".login-head"); // Draggable header
const modalContent = document.querySelector(".model-content"); // Main modal box
const modal2 = document.getElementById("auth-modal");

let isDragging2 = false;
let offsetX2 = 0;
let offsetY2 = 0;

document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.querySelector(".sign-in-button");
    const closeButton = document.querySelector(".close-button");

    console.log("Script Loaded");

    signInButton?.addEventListener("click", function () {
        console.log("2");
        modal2.classList.add("show"); // Apply smooth transition
    });

    closeButton?.addEventListener("click", function () {
        modal2.classList.remove("show"); // Apply smooth transition
        resetModalPosition(); // Reset position on close
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal2) {
            modal2.classList.remove("show"); // Apply smooth transition
            resetModalPosition(); // Reset position on close
        }
    });
});

// Ensure modalContent is positioned absolutely
// modalContent.style.position = "absolute";

// // Default position
// modal2.style.left = "40%";
// modal2.style.top = "20%";
// modalContent.style.transform = "translate(-50%, -50%)";

// loginHead.addEventListener("mousedown", (e) => {
//     isDragging2 = true;

//     // Get modal position
//     const rect = modalContent.getBoundingClientRect();
//     offsetX2 = e.clientX - rect.left;
//     offsetY2 = e.clientY - rect.top;

//     modalContent.style.cursor = "grabbing"; // Change cursor
// });

// document.addEventListener("mousemove", (e) => {
//     if (!isDragging2) return;

//     let newX2 = e.clientX - offsetX2;
//     let newY2 = e.clientY - offsetY2;

//     // Get navbar height (if exists)
//     const navbarHeight = document.querySelector(".pixeltalk-navbar")?.offsetHeight || 0;
    
//     // Prevent modal from moving off-screen
//     const maxX2 = window.innerWidth - modalContent.offsetWidth;
//     const maxY2 = window.innerHeight - modalContent.offsetHeight;

//     newX2 = Math.max(0, Math.min(newX2, maxX2));
//     newY2 = Math.max(navbarHeight, Math.min(newY2, maxY2));

//     modalContent.style.left = `${newX2}px`;
//     modalContent.style.top = `${newY2}px`;
// });

// document.addEventListener("mouseup", () => {
//     isDragging2 = false;
//     modalContent.style.cursor = "default";
// });

// // Function to reset modal position on close
// function resetModalPosition() {
//     modalContent.style.left = "50%";
//     modalContent.style.top = "50%";
//     modalContent.style.transform = "translate(-50%, -50%)";
// }
// Add this to your existing signup.js file

document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // For demo purposes, just store the username in localStorage
            // In a real app, you would validate with your backend
            localStorage.setItem('username', username);
            
            // Close the modal
            const authModal = document.getElementById('auth-modal');
            if (authModal) {
                authModal.style.display = 'none';
            }
            
            // Update UI to show logged in state
            const signInButton = document.querySelector('.sign-in-button');
            if (signInButton) {
                signInButton.textContent = `Welcome, ${username}`;
            }
        });
    }
});

// // Add this to your existing signup.js file

// document.addEventListener('DOMContentLoaded', () => {
//     const authForm = document.getElementById('auth-form');
    
//     if (authForm) {
//         authForm.addEventListener('submit', (e) => {
//             e.preventDefault();
            
//             const username = document.getElementById('username').value;
//             const password = document.getElementById('password').value;
            
//             // For demo purposes, just store the username in localStorage
//             // In a real app, you would validate with your backend
//             localStorage.setItem('username', username);
            
//             // Close the modal
//             const authModal = document.getElementById('auth-modal');
//             if (authModal) {
//                 authModal.style.display = 'none';
//             }
            
//             // Update UI to show logged in state
//             const signInButton = document.querySelector('.sign-in-button');
//             if (signInButton) {
//                 signInButton.textContent = `Welcome, ${username}`;
//             }
//         });
//     }
// });