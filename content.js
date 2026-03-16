// Content script - runs on iCampus pages
// Helps detect Teams links and schedule data on the portal

(function () {
  // Notify background that we're on the portal
  chrome.runtime.sendMessage({ type: 'PORTAL_LOADED', url: window.location.href });

  // Observe DOM for dynamically loaded timetable content
  const observer = new MutationObserver(() => {
    const teamsLinks = document.querySelectorAll('a[href*="teams.microsoft.com"], a[href*="teams.live.com"]');
    if (teamsLinks.length > 0) {
      chrome.runtime.sendMessage({
        type: 'TEAMS_LINKS_FOUND',
        count: teamsLinks.length
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
