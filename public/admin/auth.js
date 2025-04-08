
// Debug utility function
function showDebugInfo(info) {
  var debugEl = document.getElementById('debug-info');
  debugEl.textContent = JSON.stringify(info, null, 2);
  debugEl.style.display = 'block';
}

// Function to parse hash parameters and set up the CMS
function setupAuth() {
  // Display debugging info for hash parameter investigation
  var rawHash = window.location.hash;
  console.log("Raw hash value:", rawHash);
  
  if (rawHash && rawHash.length > 1) {
    document.getElementById('loading').classList.add('visible');
    
    // Strip the leading # character
    var hash = rawHash.substring(1);
    
    // If hash starts with a slash, remove it
    if (hash.startsWith('/')) {
      hash = hash.substring(1);
    }
    
    console.log("Processing hash:", hash);
    
    // Parse the hash parameters manually
    var hashParams = {};
    var pairs = hash.split('&');
    pairs.forEach(function(pair) {
      var parts = pair.split('=');
      if (parts.length === 2) {
        hashParams[parts[0]] = decodeURIComponent(parts[1]);
      }
    });
    
    // Get provider and token directly from hash params
    var provider = hashParams['provider'];
    var token = hashParams['token'];
    var state = hashParams['state'];
    
    // Show debug info for diagnostics
    var debugInfo = {
      message: "Auth info detected in URL hash",
      rawHash: rawHash,
      processedHash: hash,
      parsedParams: {
        provider: provider || "Not found",
        hasToken: token ? "Yes" : "No",
        hasState: state ? "Yes" : "No"
      },
      timestamp: new Date().toISOString()
    };
    
    showDebugInfo(debugInfo);
    
    // If we have a token from GitHub OAuth, use it for CMS
    if (provider === 'github' && token) {
      console.log('GitHub auth successful, initializing CMS with token');
      
      // Store token in local storage for the CMS
      localStorage.setItem('netlify-cms-user', JSON.stringify({
        token: {
          access_token: token
        }
      }));
      
      // Remove the token from URL for security
      if (history.replaceState) {
        history.replaceState(null, null, window.location.pathname);
      }
      
      // The loading indicator will be hidden once CMS loads
      setTimeout(function() {
        if (document.getElementById('loading').classList.contains('visible')) {
          document.getElementById('loading').innerHTML += 
            '<div style="margin-top: 20px; color: #e53e3e;">' +
            'CMS is taking longer than usual to load. Please wait...' +
            '</div>';
        }
      }, 5000);
    } else if (hash && !token) {
      // If we have a hash but no token
      document.getElementById('loading').innerHTML +=
        '<div style="margin-top: 20px; color: #e53e3e;">' +
        'Auth response detected but no token found. Please try again.' +
        '<div style="margin-top: 10px;">' +
        '<button onclick="window.location.href=\'/.netlify/functions/auth?provider=github&site_id=biohackathon.netlify.app&scope=repo\'" ' +
        'style="padding: 8px 16px; background: #1a202c; color: white; border: none; border-radius: 4px; cursor: pointer;">' +
        'Retry GitHub Login' +
        '</button>' +
        '</div>';
    }
  }
}

// Function to initialize Netlify Identity
function initializeNetlifyIdentity() {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
}

// Function to handle authentication errors
function handleAuthErrors() {
  window.addEventListener('unhandledrejection', function(event) {
    console.error('Authentication error:', event.reason);
    
    // Show a user-friendly error if authentication fails
    if (document.getElementById('loading').classList.contains('visible')) {
      document.getElementById('loading').innerHTML = 
        '<div class="loading-message" style="color: #e53e3e">Authentication failed. Please try again or contact site administrator.</div>' +
        '<div id="debug-info" style="display:block">Error: ' + (event.reason ? event.reason.toString() : 'Unknown error') + '</div>' +
        '<button onclick="window.location.href=\'/admin/\'" style="margin-top: 16px; padding: 8px 16px; background: #1a202c; color: white; border: none; border-radius: 4px; cursor: pointer;">Back to Login</button>';
    }
  });
}

// Function to add manual auth button as fallback
function addManualAuthButton() {
  setTimeout(function() {
    if (document.getElementById('loading').classList.contains('visible') && !document.querySelector('body > div[class^="css"]')) {
      document.getElementById('loading').innerHTML += 
        '<div style="margin-top: 20px;">' +
        '<button onclick="window.location.href=\'/.netlify/functions/auth?provider=github&site_id=biohackathon.netlify.app&scope=repo\'" ' +
        'style="padding: 8px 16px; background: #1a202c; color: white; border: none; border-radius: 4px; cursor: pointer;">' +
        'Manual GitHub Authentication' +
        '</button>' +
        '</div>';
    }
  }, 10000);
}

// Initialize authentication components
function initializeAuth() {
  // Run the auth setup on page load
  window.addEventListener('DOMContentLoaded', setupAuth);
  
  // Also handle hash changes in case of SPA navigation
  window.addEventListener('hashchange', setupAuth);
  
  // Initialize Netlify Identity
  initializeNetlifyIdentity();
  
  // Handle potential errors
  handleAuthErrors();
  
  // Add manual auth button as fallback
  addManualAuthButton();
}

// Export the initialization function
window.initializeAuth = initializeAuth;
