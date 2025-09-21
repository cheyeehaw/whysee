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
  
  // 🚫 Logic
  const currentURL = window.location.href;
  
  // 🚫 Block therapy site
  if (currentURL.startsWith("https://goodtherapysf.com/")) {
    console.log("Popup disabled on therapy site.");
  }
  
  // 🚫 Flights booking page (the exact long URL you provided)
  else if (
    currentURL.startsWith(
      "https://www.google.com/travel/flights/booking?tfs=CAIQAhqMARIKMjAyNS0wOS0yMCIfCgNTRk8SCjIwMjUtMDktMjAaA0NDVSoCQUkyAzE4MCIfCgNDQ1USCjIwMjUtMDktMjIaA0JPTSoCQUkyAzE4MCIgCgNCT00SCjIwMjUtMDktMjIaA0RFTCoCQUkyBDI0NDJqDAgCEggvbS8wZDZscHIMCAISCC9tLzBkbHYwQAFIAXABggELCP___________wGYAQI&source=flre_fli_share&utm_campaign=sharing"
    )
  ) {
    // Step 3 popup after 7 seconds
    setTimeout(() => {
      const { overlay: overlay3, linkBtn: link3 } = createPopup(
        "step 3: build your trauma",
        "thirdLink",
        "https://goodtherapysf.com/"
      );
  
      link3.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(link3.href, "_blank");
        overlay3.remove();
      });
    }, 7000);
  }
  
  // 🚫 Flights search page (/s/…)
  else if (currentURL.startsWith("https://www.google.com/travel/flights/s/")) {
    // Step 6 popup after 8s → therapy site
    setTimeout(() => {
      const { overlay: overlay6, linkBtn: link6 } = createPopup(
        "step 6: build your trauma",
        "therapyLink",
        "https://goodtherapysf.com/"
      );
  
      link6.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(link6.href, "_blank");
        overlay6.remove();
      });
    }, 7000);
  }
  
  // 🚫 Embassy page
  else if (
    currentURL.startsWith(
      "https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship"
    )
  ) {
    // Step 2 popup after 7s → flights booking link
    setTimeout(() => {
      const { overlay: overlay2, linkBtn: link2 } = createPopup(
        "step 2: pack your bags",
        "bookingLink",
        "https://www.google.com/travel/flights/booking?tfs=CAIQAhqMARIKMjAyNS0wOS0yMCIfCgNTRk8SCjIwMjUtMDktMjAaA0NDVSoCQUkyAzE4MCIfCgNDQ1USCjIwMjUtMDktMjIaA0JPTSoCQUkyAzE4MCIgCgNCT00SCjIwMjUtMDktMjIaA0RFTCoCQUkyBDI0NDJqDAgCEggvbS8wZDZscHIMCAISCC9tLzBkbHYwQAFIAXABggELCP___________wGYAQI&source=flre_fli_share&utm_campaign=sharing"
      );
  
      link2.addEventListener("click", (e) => {
        e.preventDefault();
        window.open(link2.href, "_blank");
        overlay2.remove();
      });
    }, 7000);
  }
  
  // 🚫 Default → Step 1 everywhere else
  else {
    const { overlay: overlay1, linkBtn: link1 } = createPopup(
      "step 1: denounce your citizenship",
      "continueLink",
      "https://md.usembassy.gov/u-s-citizen-services/renounce-citizenship/?utm"
    );
  
    link1.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(link1.href, "_blank");
      overlay1.remove();
    });
  }
  