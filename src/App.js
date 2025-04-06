import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

// Optional future routes:
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";


function App() {
  const [theme, colorMode]=useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
          <Routes>
          <Route path="/" element={<Dashboard/>} />
          {/*<Route path="/team" element={<team/>} />
          <Route path="/contacts" element={<contacts/>} />
          <Route path="/invoices" element={<invoices/>} />
          <Route path="/form" element={<form/>} />
          <Route path="/bar" element={<bar/>} />
          <Route path="/line" element={<line/>} />
          <Route path="/pie" element={<pie/>} />
          <Route path="/faq" element={<faq/>} />
          <Route path="/geography" element={<geography/>} />
          <Route path="/calendar" element={<calendar/>} />*/}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
