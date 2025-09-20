// Helper to create popup
function createPopup(stepText, linkId, linkURL) {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
  
    const popup = document.createElement("div");
    popup.className = "popup";
  
    const imgURL = chrome.runtime.getURL("labubu.png");
  
    popup.innerHTML = `
      <img src="${imgURL}" alt="Popup Character">
      <p><strong>FOUNDIGRANT TRACK</strong></p>
      <p>${stepText}</p>
      <a id="${linkId}" href="${linkURL}" target="_blank">Go</a>
    `;
  
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  
    return { overlay, linkBtn: document.getElementById(linkId) };
  }
  
  // 🚫 Logic: Embassy page vs Flights page vs Booking page vs Everywhere else
  const currentURL = window.location.href;
  
  if (
    currentURL.startsWith("https://www.google.com/travel/flights/s/shfyTvZat1Qz5Ac2A")
  ) {
    // Specific flights page → no popup
    console.log("Popup disabled on flights search page.");
  } else if (currentURL.startsWith("https://www.google.com/travel/flights/booking")) {
    // Any booking pages → no popup
    console.log("Popup disabled on flights booking page.");
  } else if (
    currentURL.startsWith(
      "https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship"
    )
  ) {
    // On embassy page → Step 2 popup after 10 seconds
    setTimeout(() => {
      const { overlay: overlay2, linkBtn: link2 } = createPopup(
        "step 2: pack your bags",
        "finalLink",
        "https://www.google.com/travel/flights/s/shfyTvZat1Qz5Ac2A"
      );
  
      link2.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(link2.href, "_blank");
        overlay2.remove(); // close after click
      });
    }, 10000);
  } else {
    // On all other pages → Step 1 immediately
    const { overlay: overlay1, linkBtn: link1 } = createPopup(
      "step 1: denounce your citizenship",
      "continueLink",
      "https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship/?utm"
    );
  
    link1.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(link1.href, "_blank"); // open embassy page
      overlay1.remove(); // close popup
    });
  }
  