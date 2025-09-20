// Skip popup on the embassy renunciation page
if (window.location.href.startsWith("https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship")) {
    console.log("Popup disabled on this page.");
  } else {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.className = "overlay";
  
    const popup = document.createElement("div");
    popup.className = "popup";
  
    // Get image path from extension package
    const imgURL = chrome.runtime.getURL("labubu.png");
  
    // Add image + link button
    popup.innerHTML = `
      <img src="${imgURL}" alt="Popup Character">
      <p>You must click below to continue.</p>
      <a id="continueLink" href="https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship/?utm" target="_blank">Go</a>
    `;
  
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  
    // Style the link like a button
    const linkBtn = popup.querySelector("#continueLink");
    linkBtn.style.display = "inline-block";
    linkBtn.style.padding = "0.5rem 1rem";
    linkBtn.style.background = "#007bff";
    linkBtn.style.color = "#fff";
    linkBtn.style.borderRadius = "6px";
    linkBtn.style.textDecoration = "none";
    linkBtn.style.fontSize = "1rem";
    linkBtn.style.cursor = "pointer";
  
    // When clicked, remove popup
    linkBtn.addEventListener("click", () => {
      overlay.remove();
    });
  }
  