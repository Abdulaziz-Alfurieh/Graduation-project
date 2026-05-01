// Authentication Helper - Include in all tool pages
// Add this script to Nmap.html, SQL.html, OWASP.html, Wfuzz.html, Nikto.html, Harvester.html

// Dynamically determine API URL based on frontend host to support both localhost and LAN IPs
const apiHost = window.location.hostname || 'localhost';
const API_URL = 'http://localhost:5000';
console.log('API URL set to:', API_URL);

// Check if user is authenticated
function checkAuth() {
    const userName = sessionStorage.getItem('user_name');
    const userRole = sessionStorage.getItem('user_role');

    if (!userName) {
        // Not logged in, redirect to signin
        window.location.href = 'signin.html';
        return false;
    }

    return { userName, userRole };
}

// Navigate to correct dashboard based on role
function goToDashboard() {
    const userRole = sessionStorage.getItem('user_role');

    if (userRole === 'admin') {
        window.location.href = 'Dashbord.html';
    } else {
        window.location.href = 'UserDashboard.html';
    }
}

// Logout function
async function logout() {
    try {
        await fetch(`${API_URL}/api/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });
    } catch (error) {
        console.error('Logout error:', error);
    }

    sessionStorage.clear();
    window.location.href = 'signin.html';
}

// Display user info in header
function displayUserInfo(userOrElementId) {
    // Determine if argument is user object or element ID string
    let userName = sessionStorage.getItem('user_name');
    let userRole = sessionStorage.getItem('user_role');
    let elementId = 'userNameDisplay'; // Default

    if (typeof userOrElementId === 'object' && userOrElementId !== null) {
        if (userOrElementId.userName) userName = userOrElementId.userName;
        if (userOrElementId.userRole) userRole = userOrElementId.userRole;
    } else if (typeof userOrElementId === 'string') {
        elementId = userOrElementId;
    }

    // Try multiple common IDs if specific one not found
    const targets = [elementId, 'userNameDisplay', 'userName'];

    for (const id of targets) {
        const element = document.getElementById(id);
        if (element && userName) {
            // If user role is available, show it too
            if (userRole) {
                element.textContent = `${userName} (${userRole})`;
            } else {
                element.textContent = userName;
            }
            break; // Found and updated
        }
    }
}

function getUser() {
    return {
        id:    sessionStorage.getItem('user_id'),
        email: sessionStorage.getItem('user_email'),
        name:  sessionStorage.getItem('user_name'),
        role:  sessionStorage.getItem('user_role')
    };
}

// Initialize auth on page load (optional, can be called manually)
// document.addEventListener('DOMContentLoaded', function() {
//    const user = checkAuth();
//    if (user) displayUserInfo(user);
// });
