import React from "react";
import SelectComponent from "./ui/SelectComponent";
import useUIStore from "@/zustand/UIStore";

function TicketsFilterBar() {
  const ticketsFilter = useUIStore((state) => state.ticketsFilter);
  const setTicketsFilter = useUIStore((state) => state.setTicketsFilter);

  return (
    <div className="tickets-filter-bar">
      <div className="block">
        <h5>Status</h5>
        <SelectComponent
          options={["All", "open", "In Progress", "Resolved", "closed"]}
          value={ticketsFilter.status}
          onChange={(e) =>
            setTicketsFilter({ ...ticketsFilter, status: e.target.value })
          }
        />
      </div>
      <div className="block">
        <h5>Sort By</h5>
        <SelectComponent
          options={["Newest", "Oldest"]}
          value={ticketsFilter.sort}
          onChange={(e) =>
            setTicketsFilter({ ...ticketsFilter, sort: e.target.value })
          }
        />
      </div>
    </div>
  );
}

export default TicketsFilterBar;
