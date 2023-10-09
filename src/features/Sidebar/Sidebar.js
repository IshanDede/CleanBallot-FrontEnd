import React from "react";
import "../style/Sidebar.css";
const Sidebar = () => {
  return (
    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <i class="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Home</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <i class="fas fa-chart-area fa-fw me-3"></i>
            <span>Manage Candidates</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <i class="fas fa-lock fa-fw me-3"></i>
            <span>Manage Voters</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
