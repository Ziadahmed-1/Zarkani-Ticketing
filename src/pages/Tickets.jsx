import TicketsFilterBar from "@/components/TicketsFilterBar";
import useUIStore from "@/zustand/UIStore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
    id: 3,
    title: "Ticket 2",
    status: "in progress",
    createdAt: "01/02/2023",
    assignedTo: "Salma Ali",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
  },
  {
    id: 4,
    title: "Ticket 2",
    status: "in progress",
    createdAt: "01/02/2023",
    assignedTo: "Salma Ali",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
  },
  {
    id: 5,
    title: "Ticket 2",
    status: "closed",
    createdAt: "01/02/2023",
    assignedTo: "Salma Ali",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
  },
  {
    id: 6,
    title: "Ticket 2",
    status: "resolved",
    createdAt: "01/02/2023",
    assignedTo: "Salma Ali",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
  },
  {
    id: 7,
    title: "Ticket 2",
    status: "in progress",
    createdAt: "01/02/2023",
    assignedTo: "Salma Ali",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
  },
  {
    id: 8,
    title: "Ticket 2",
    status: "in progress",
    createdAt: "01/02/2023",
    assignedTo: "Salma Ali",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit,lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit, lorem ipsum dolor sit amet consectetur adipiscing elit ",
  },
  {
    id: 9,
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
function Tickets() {
  const { status, sort } = useUIStore((state) => state.ticketsFilter);
  const [filteredTickets, setFilteredTickets] = useState(tickets || []);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = tickets.filter(
      (ticket) =>
        ticket.status.toLowerCase() === status.toLowerCase() || status === "All"
    );
    if (sort === "Newest") {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sort === "Oldest") {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    setFilteredTickets(filtered);
  }, [status, sort]);

  return (
    <div>
      <TicketsFilterBar />
      <div className="tickets-second-header">
        <h5>{filteredTickets?.length} Tickets Found</h5>
        <button className="glb-btn" onClick={() => navigate("/newTicket")}>
          New Ticket
        </button>
      </div>
      <div className="tickets-grid">
        {filteredTickets?.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
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
