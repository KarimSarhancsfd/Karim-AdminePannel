import React from "react";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom"; // <-- add useNavigate
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// Helper for sidebar items
const SidebarMenuItem = ({ title, to, icon, selected, setSelected }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setSelected(title);
    navigate(to);
  };
  return (
    <MenuItem icon={icon} active={selected === title} onClick={handleClick}>
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const CustomSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const location = useLocation();

  // Set selected based on current path
  const getSelectedFromPath = (pathname) => {
    switch (pathname) {
      case "/":
        return "Dashboard";
      case "/team":
        return "Manage Team";
      case "/contacts":
        return "Contacts Information";
      case "/invoices":
        return "Invoices Balances";
      case "/form":
        return "Profile Form";
      case "/calendar":
        return "Calendar";
      case "/faq":
        return "FAQ Page";
      case "/bar":
        return "Bar Chart";
      case "/pie":
        return "Pie Chart";
      case "/line":
        return "Line Chart";
      case "/geography":
        return "Geography Chart";
      default:
        return "";
    }
  };

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(
    getSelectedFromPath(location.pathname)
  );

  // Update selected when route changes
  React.useEffect(() => {
    setSelected(getSelectedFromPath(location.pathname));
  }, [location.pathname]);

  return (
    <Box
      sx={{
        height: "100%",
        "& .ps-sidebar-root": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-menuitem-root": {
          color: `${colors.grey[100]} !important`,
        },
        "& .ps-menuitem-root.ps-active": {
          color: "#868dfb !important",
        },
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed} rootStyles={{ border: "none" }}>
        <Menu>
          <MenuItem
            icon={isCollapsed ? <MenuOutlinedIcon /> : null}
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`https://i.pravatar.cc/100?img=5`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin Name
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <SidebarMenuItem
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <SidebarMenuItem
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarMenuItem
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarMenuItem
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <SidebarMenuItem
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarMenuItem
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarMenuItem
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <SidebarMenuItem
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarMenuItem
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarMenuItem
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SidebarMenuItem
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default CustomSidebar;
