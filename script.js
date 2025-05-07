document.addEventListener('DOMContentLoaded', () => {
    const habitForm = document.getElementById('habitForm');
    const habitNameInput = document.getElementById('habit-name');
    const habitFrequencySelect = document.getElementById('habit-frequency');
    const calendarGrid = document.getElementById('calendar-grid');
    
    // Add a habit to the habit tracker
    habitForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const habitName = habitNameInput.value.trim();
      const habitFrequency = habitFrequencySelect.value;
  
      if (habitName !== "") {
        alert(`Habit "${habitName}" added! Frequency: ${habitFrequency}`);
        habitNameInput.value = '';  // Clear the form
        renderCalendar();  // Re-render the calendar after adding the habit
      } else {
        alert('Please enter a habit name!');
      }
    });
  
    // Render the calendar (7 days per week)
    function renderCalendar() {
      calendarGrid.innerHTML = '';  // Clear previous days
      for (let i = 1; i <= 31; i++) {  // For simplicity, using 31 days
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day');
        dayDiv.innerHTML = `<span>${i}</span>`;
        calendarGrid.appendChild(dayDiv);
      }
    }
  
    renderCalendar();  // Initial render of the calendar
  });