import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
// import Invoices from "./scenes/dashboard/invoices";
// import Contact from "./scenes/dashboard/contact";
// import Bar from "./scenes/dashboard/bar";
// import Form from "./scenes/dashboard/form";
// import Line from "./scenes/dashboard/line";
// import Pie from "./scenes/dashboard/pie";
// import FAQ from "./scenes/dashboard/faq";
// import Geography from "./scenes/dashboard/geography";
// import Calendar from "./scenes/dashboard/calendar";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team/>}/>
              {/* <Route path="/invoices" element={<Invoices/>}/> */}
              {/* <Route path="/contact" element={<Contact/>}/> */}
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/form" element={<Form/>}/> */}
              {/* <Route path="/line" element={<Line/>}/> */}
              {/* <Route path="/pie" element={<Pie/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/geography" element={<Geography/>}/> */}
              {/* <Route path="/calendar" element={<Calendar/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
