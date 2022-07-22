import React from "react";
import ONavbar from "./components/organisms/ONavbar";
import Routes from "./routes/Routes";

function App() {
  return (
    <main className="container w-full mx-auto h-full">
      <ONavbar />
      <Routes />
    </main>
  );
}

export default App;
