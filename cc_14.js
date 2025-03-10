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

function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll('.priority-high');
    
    const ticketsArray = Array.from(highPriorityTickets);
    
    ticketsArray.forEach(ticket => {
        ticket.style.backgroundColor = '#ffcccc'; // Light red background
        ticket.style.border = '2px solid red'; // Red border
        ticket.style.fontWeight = 'bold'; // Make text bold
    });
}

highlightHighPriorityTickets();

//Task 4

document.addEventListener("DOMContentLoaded", () => {
    const ticketContainer = document.getElementById("ticketContainer");
    
    ticketContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("ticket")) {
            console.log("Ticket clicked: ", event.target.dataset.id);
        }
    });

    ticketContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("resolveBtn")) {
            event.stopPropagation(); 
            
            const ticket = event.target.closest(".ticket");
            if (ticket) {
                resolveTicket(ticket).then(() => {
                    ticketContainer.removeChild(ticket);
                    console.log("Ticket resolved and removed successfully.");
                }).catch((error) => {
                    console.error("Error resolving ticket: ", error);
                });
            }
        }
    });

    function resolveTicket(ticket) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 500); 
        });
    }
});