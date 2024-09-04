document.addEventListener('DOMContentLoaded', function() {
  const sorteoNameInput = document.getElementById('sorteo-name');
  const sorteoNumbersInput = document.getElementById('sorteo-numbers');
  const addParticipantButton = document.getElementById('add-participant');
  const sorteoTableBody = document.querySelector('#sorteo-table tbody');
  const participantNameInput = document.getElementById('participant-name');

  addParticipantButton.addEventListener('click', function() {
    const sorteoName = sorteoNameInput.value.trim();
    const sorteoNumbersString = sorteoNumbersInput.value.trim();
    const participantName = participantNameInput.value.trim();

    if (sorteoName && sorteoNumbersString && participantName) {
      const sorteoNumbers = sorteoNumbersString.split(',').map(Number);

      sorteoNumbers.forEach(function(number) {
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        const nameCell = document.createElement('td');

        numberCell.textContent = number;
        nameCell.textContent = participantName;

        row.appendChild(numberCell);
        row.appendChild(nameCell);
        sorteoTableBody.appendChild(row);
      });

      participantNameInput.value = '';
    }
  });
});
