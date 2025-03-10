//Task 2

function createTicket(customerName, issueDescription, priorityLevel) {
    const ticketDiv = document.createElement('div');
    ticketDiv.setAttribute('class', 'ticket');
    ticketDiv.setAttribute('id', 'ticket-' + new Date().getTime()); // Unique ID for each ticket

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = customerName;
    
    const issueParagraph = document.createElement('p');
    issueParagraph.textContent = issueDescription;

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority Level: ' + priorityLevel;
    
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    resolveButton.setAttribute('class', 'resolve-btn');
    resolveButton.addEventListener('click', function() {
        ticketDiv.remove(); // Remove the ticket when the button is clicked
    });

    ticketDiv.appendChild(nameHeading);
    ticketDiv.appendChild(issueParagraph);
    ticketDiv.appendChild(priorityLabel);
    ticketDiv.appendChild(resolveButton);

    const ticketContainer = document.getElementById('ticketContainer');
    ticketContainer.appendChild(ticketDiv);
}

createTicket('John Doe', 'Unable to access account', 'High');
createTicket('Jane Smith', 'Error message on checkout page', 'Medium');

//Task 3

