let currentTab = 0;

function changeTab(index) {
  const tabHeaders = document.querySelectorAll('.tab-header div');
  const tabIndicator = document.querySelector('.tab-indicator');
  const tabContents = document.querySelectorAll('.tab-body div');

  // Remove active class from the current tab
  tabHeaders[currentTab].classList.remove('active');
  tabContents[currentTab].classList.remove('active');

  // Add active class to the new tab
  tabHeaders[index].classList.add('active');
  tabContents[index].classList.add('active');

  // Update the current tab index
  currentTab = index;

  // Update the tab indicator position
  const tabWidth = 100 / tabHeaders.length;
  tabIndicator.style.transform = `translateX(${index * tabWidth}%)`;
}

// Add your existing slideshow functionality here
