import React, { use, useEffect } from "react";
import SelectComponent from "./ui/SelectComponent";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LuTickets } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { BranchList, ProjectsList } from "@/API/MainAPI";
import useUIStore from "@/zustand/UIStore";

function LeftSideBar({ isSidebarOpen }) {
  const selectedProject = useUIStore((state) => state.selectedProject);
  const setSelectedProject = useUIStore((state) => state.setSelectedProject);
  const selectedBranch = useUIStore((state) => state.selectedBranch);
  const setSelectedBranch = useUIStore((state) => state.setSelectedBranch);

  const { data: projectsList, isLoading: isProjectsListLoading } = useQuery({
    queryKey: ["projectsList"],
    queryFn: () => ProjectsList(),
  });

  const { data: branchesList, isLoading: isBranchesListLoading } = useQuery({
    queryKey: ["branchesList", selectedProject?.projectId],
    queryFn: () => BranchList(selectedProject?.projectId),
    enabled: !!selectedProject,
  });
  const links = [
    {
      name: "Dashboard",
      icon: <MdOutlineSpaceDashboard />,
      path: "/",
    },
    {
      name: "Tickets",
      icon: <LuTickets />,
      path: "/tickets",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
      path: "/settings",
    },
  ];

  const members = [
    {
      name: "John Doe",
    },
    {
      name: "Ziad Ahmed Eid",
    },
    {
      name: "Salma Ali Eid",
    },
  ];
  const location = useLocation();

  useEffect(() => {
    console.log("Current path:", location.pathname);
    // You can perform any side effects here when the path changes
  }, [location.pathname]);

  const checkActive = (path) => {
    return path === location.pathname ? "active" : "";
  };
  return (
    <div
      className={`side-bar`}
      style={{ display: isSidebarOpen ? "" : "none" }}
    >
      <div className="block">
        <h5>Project</h5>
        <SelectComponent
          options={projectsList}
          label="projectName"
          id="projectId"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
        />
      </div>
      <hr />
      <div className="block">
        <h5>Branch</h5>
        <SelectComponent
          options={branchesList}
          label="branchName"
          id="branchId"
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
        />
      </div>
      <hr />
      <div className="block">
        <h5>View</h5>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                className={`nav-link ${checkActive(link.path)}`}
                to={link.path}
              >
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="block">
        <h5>Members</h5>
        <ul className="members">
          {members.map((member) => (
            <li key={member.name}>{member.name}</li>
          ))}
        </ul>
        <button className="glb-btn">Add Member</button>
      </div>
    </div>
  );
}

export default LeftSideBar;
