import React from "react";
import SelectComponent from "./ui/SelectComponent";
import useUIStore from "@/zustand/UIStore";
import { useQuery } from "@tanstack/react-query";
import { TicketStatusList } from "@/API/MainAPI";

function TicketsFilterBar() {
  const { data: statusList, isLoading } = useQuery({
    queryKey: ["statusList"],
    queryFn: () => TicketStatusList(),
  });

  const ticketsFilter = useUIStore((state) => state.ticketsFilter);
  const setTicketsFilter = useUIStore((state) => state.setTicketsFilter);

  return (
    <div className="tickets-filter-bar">
      <div className="block">
        <h5>Status</h5>
        <SelectComponent
          options={statusList}
          value={ticketsFilter.status}
          label="statusName"
          id="statusId"
          onChange={(e) =>
            setTicketsFilter({ ...ticketsFilter, status: e.target.value })
          }
        />
      </div>

      {/* <div className="block">
        <h5>Sort By</h5>
        <SelectComponent
          options={[
            { id: 0, name: "Newest" },
            { id: 1, name: "Oldest" },
          ]}
          label="name"
          id="id"
          value={ticketsFilter?.sort}
          onChange={(e) =>
            setTicketsFilter({ ...ticketsFilter, sort: e.target.value })
          }
        />
      </div> */}
    </div>
  );
}

export default TicketsFilterBar;
