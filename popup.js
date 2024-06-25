document.addEventListener('DOMContentLoaded', function() {
    const tabsContainer = document.getElementById('tabs-container');
    const refreshTabsButton = document.getElementById('refresh-tabs');
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
  
    refreshTabsButton.addEventListener('click', function() {
      fetchTabs();
    });
  
    fetchTabs();
    updateDateTime();
  
    function fetchTabs() {
      chrome.tabs.query({}, function(tabs) {
        tabsContainer.innerHTML = '';
        tabs.forEach(tab => {
          const tabElement = document.createElement('div');
          tabElement.className = 'tab';
          tabElement.innerHTML = `
            <span class="tab-title">${tab.title}</span>
            <button data-tab-id="${tab.id}" class="switch-tab">Switch</button>
            <button data-tab-id="${tab.id}" class="close-tab">Close</button>
          `;
          tabsContainer.appendChild(tabElement);
        });
  
        document.querySelectorAll('.switch-tab').forEach(button => {
          button.addEventListener('click', function() {
            const tabId = parseInt(this.getAttribute('data-tab-id'));
            chrome.tabs.update(tabId, { active: true });
          });
        });
  
        document.querySelectorAll('.close-tab').forEach(button => {
          button.addEventListener('click', function() {
            const tabId = parseInt(this.getAttribute('data-tab-id'));
            chrome.tabs.remove(tabId, fetchTabs);
          });
        });
      });
    }
  
    function updateDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
  
      dateElement.textContent = date;
      timeElement.textContent = time;
  
      setTimeout(updateDateTime, 1000);
    }
  });
  