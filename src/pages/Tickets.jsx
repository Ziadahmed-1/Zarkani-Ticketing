import TicketsFilterBar from "@/components/TicketsFilterBar";
import React from "react";

function Tickets() {
  const tickets = [
    {
      id: 1,
      title: "Ticket 1",
      status: "open",
      createdAt: "01/01/2023",
      assignedTo: "John Doe",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "in progress",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "in progress",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "in progress",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "closed",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "resolved",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "in progress",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "in progress",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
    {
      id: 2,
      title: "Ticket 2",
      status: "in progress",
      createdAt: "01/02/2023",
      assignedTo: "Salma Ali",
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
    },
  ];

  function getStatusColor(status) {
    const caseFixed = status.toLowerCase();
    switch (caseFixed) {
      case "open":
        return "#FFA500"; // Orange - attention needed
      case "in progress":
        return "#1E90FF"; // DodgerBlue - active work
      case "resolved":
        return "#32CD32"; // LimeGreen - successful
      case "closed":
        return "#A9A9A9"; // DarkGray - completed/inactive
      default:
        return "#D3D3D3"; // LightGray - unknown or fallback
    }
  }
  return (
    <div>
      <TicketsFilterBar />
      <div className="tickets-second-header">
        <h5>8 Tickets Found</h5>
        <button className="glb-btn">New Ticket</button>
      </div>
      <div className="tickets-grid">
        {tickets.map((ticket) => (
          <div className="ticket-card">
            <div className="header">
              <h4>{ticket.title}</h4>
              <span
                className="status"
                style={{ backgroundColor: getStatusColor(ticket.status) }}
              >
                {ticket.status}
              </span>
            </div>
            <p className="body">{ticket.description}</p>
            <hr />
            <div className="header">
              <span>{ticket.createdAt}</span>
              <span>{ticket.assignedTo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
