const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab');

function showTab(index) {
  // Hide all tab content
  tabContent.forEach(content => content.classList.remove('active'));
  // Show the selected tab content
  tabContent[index].classList.add('active');

  // Remove active class from all buttons
  tabButtons.forEach(btn => btn.classList.remove('active'));
  // Add active class to the selected button
  tabButtons[index].classList.add('active');
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showTab(index);
  });
});

// Show the first tab by default
showTab(0);