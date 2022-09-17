import "./App.css";
import { LightModeOutlined } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { TableChartOutlined } from "@mui/icons-material";
import { MailOutlined } from "@mui/icons-material";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { ShowChartOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [menuView, setMenuView] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenuView = () => {
    setMenuView(!menuView);
  };

  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app">
      {menuView ? (
        <div className="shrinkMenu"
        style={{ backgroundColor: darkMode ? "#1c2339" : "#fff" }}>
          <div
            className="shrinkMenu_Buttons"
            style={{ backgroundColor: darkMode ? "#1c2339" : "#f5f4fd" }}
          >
            <div className="shrinkMenu_theme">
              <div
                className="mode"
                style={{
                  backgroundColor: darkMode ? "#000000" : "#fff",
                  color: darkMode ? "#fff" : "#000000",
                }}
                onClick={handleMode}
              >
                {darkMode ? <DarkMode /> : <LightModeOutlined />}
              </div>

              <KeyboardArrowRight
                onClick={handleMenuView}
                className="shrink_arrow_btn"
              />
            </div>
            <div className="listItems" 
            style={{
                      backgroundColor: darkMode ? "#000000" : "#fff",
                      color: darkMode ? "#fff" : "#000000",
                    }}>
              <TableChartOutlined className="shrinkMenu_Button" />
              <MailOutlined className="shrinkMenu_Button" />
              <CalendarMonthOutlined className="shrinkMenu_Button" />
              <ShowChartOutlined className="shrinkMenu_Button" />
              <SettingsOutlined className="shrinkMenu_Button" />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="sideBar"
          style={{ backgroundColor: darkMode ? "#1c2339" : "#fff" }}
        >
          <div
            className="sideBar_Menu"
            style={{ backgroundColor: darkMode ? "#1c2339" : "#f5f4fd" }}
          >
            <div className="theme">
              <div
                className="theme_BTNs"
                style={{ backgroundColor: darkMode ? "#000000" : "#fff" }}
              >
                <div
                  className="theme_BTN"
                  style={{
                    backgroundColor: darkMode ? "#000000" : "#f5f4fd",
                    color: darkMode ? "#fff" : "#000000",
                  }}
                  onClick={() => setDarkMode(false)}
                >
                  <LightModeOutlined />
                  <button
                    style={{
                      border: "none",
                      backgroundColor: darkMode ? "black" : "white",
                      color: darkMode ? "white" : "black",
                    }}
                  >
                    Light
                  </button>
                </div>
                <div
                  className="theme_BTN"
                  style={{
                    backgroundColor: darkMode ? "#131c31" : "#fff",
                    color: darkMode ? "#fff" : "#000000",
                  }}
                  onClick={() => setDarkMode(true)}
                >
                  <DarkMode
                    style={{ backgroundColor: darkMode ? "#1c2339" : "#fff" }}
                  />

                  <button
                    style={{
                      border: "none",
                      backgroundColor: darkMode ? "#1c2339" : "#fff",
                      color: darkMode ? "#fff" : "#000000",
                    }}
                  >
                    Dark
                  </button>
                </div>
              </div>
              <button className="theme_arrow_BTN" onClick={handleMenuView}>
                <KeyboardArrowLeft />
              </button>
            </div>
            <div
              className="sidebar_buttons"
              style={{ backgroundColor: darkMode ? "#3a383f" : "#f9f8fb" }}
            >
              <div
                className="sidebar_BTN"
                style={{
                  backgroundColor: darkMode ? "#000000" : "#fff",
                  color: darkMode ? "#fff" : "#000000",
                }}
              >
                <TableChartOutlined />
                <button
                  style={{
                    border: "none",
                    backgroundColor: darkMode ? "black" : "white",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  Dashboard
                </button>
              </div>
              <div
                className="sidebar_BTN"
                style={{
                  backgroundColor: darkMode ? "#000000" : "#fff",
                  color: darkMode ? "#fff" : "#000000",
                }}
              >
                <MailOutlined />
                <button
                  style={{
                    border: "none",
                    backgroundColor: darkMode ? "black" : "white",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  Inbox
                </button>
              </div>
              <div
                className="sidebar_BTN"
                style={{
                  backgroundColor: darkMode ? "#000000" : "#fff",
                  color: darkMode ? "#fff" : "#000000",
                }}
              >
                <CalendarMonthOutlined />
                <button
                  style={{
                    border: "none",
                    backgroundColor: darkMode ? "black" : "white",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  Calender
                </button>
              </div>
              <div
                className="sidebar_BTN"
                style={{
                  backgroundColor: darkMode ? "#000000" : "#fff",
                  color: darkMode ? "#fff" : "#000000",
                }}
              >
                <ShowChartOutlined />
                <button
                  style={{
                    border: "none",
                    backgroundColor: darkMode ? "black" : "white",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  Activity
                </button>
              </div>
              <div
                className="sidebar_BTN"
                style={{
                  backgroundColor: darkMode ? "#000000" : "#fff",
                  color: darkMode ? "#fff" : "#000000",
                }}
              >
                <SettingsOutlined />
                <button
                  style={{
                    border: "none",
                    backgroundColor: darkMode ? "black" : "white",
                    color: darkMode ? "white" : "black",
                  }}
                >
                  Setting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
