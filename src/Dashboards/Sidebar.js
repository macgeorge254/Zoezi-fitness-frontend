import React, { useState } from 'react';
import './Dashboard.css';
import { UilUsersAlt, UilClipboardAlt, UilUserMd, UilPackage, UilChart, UilSignOutAlt } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
// import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "./Data";
// import { UilBars } from "@iconscout/react-unicons";
import { motion } from 'framer-motion';

const Sidebar = () => {
  const SidebarData = [
    {
      icon: UilUsersAlt,
      heading: 'User Dashboard',
      route: '/UserDashboard',
    },
    {
      icon: UilUserMd,
      heading: 'Admin Dashboard',
      route: '/Dashboard',
    },
  ];

  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };
  // console.log(window.innerWidth);
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        {/* <UilBars /> */}
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? 'menuItem active' : 'menuItem'}
                key={index}
                onClick={() => setSelected(index)}
              >
                <Link to={item.route}>
                  <button>
                    <item.icon />
                    <span>{item.heading}</span>
                  </button>
                </Link>
              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
