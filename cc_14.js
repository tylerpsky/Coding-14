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

//Task 5

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SupportTicket = ({ ticket, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTicket, setEditedTicket] = useState({ ...ticket });

  const handleEdit = () => setIsEditing(true);
  const handleChange = (e) => {
    setEditedTicket({ ...editedTicket, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(editedTicket);
    setIsEditing(false);
  };

  return (
    <Card onDoubleClick={handleEdit} className="p-4 cursor-pointer border rounded-lg shadow-md">
      <CardContent>
        {isEditing ? (
          <div className="space-y-2">
            <Input name="customer" value={editedTicket.customer} onChange={handleChange} placeholder="Customer Name" />
            <Textarea name="issue" value={editedTicket.issue} onChange={handleChange} placeholder="Issue Description" />
            <Input name="priority" value={editedTicket.priority} onChange={handleChange} placeholder="Priority Level" />
            <Button onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-bold">{ticket.customer}</h3>
            <p className="text-sm text-gray-600">{ticket.issue}</p>
            <p className="text-sm font-semibold">Priority: {ticket.priority}</p>
            <Button onClick={handleEdit} className="mt-2">Edit</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const SupportTicketsList = () => {
  const [tickets, setTickets] = useState([
    { id: 1, customer: "John Doe", issue: "Login issue", priority: "High" },
    { id: 2, customer: "Jane Smith", issue: "Payment failure", priority: "Medium" },
  ]);

  const updateTicket = (updatedTicket) => {
    setTickets(tickets.map(ticket => (ticket.id === updatedTicket.id ? updatedTicket : ticket)));
  };

  return (
    <div className="grid gap-4 p-4">
      {tickets.map((ticket) => (
        <SupportTicket key={ticket.id} ticket={ticket} onUpdate={updateTicket} />
      ))}
    </div>
  );
};

export default SupportTicketsList;
