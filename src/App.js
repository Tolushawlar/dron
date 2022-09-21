import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LightTheme, BaseProvider } from "baseui";
import Dashboard from "./components/Dashboard";
import Overview from "./pages/overview/Overview";
import AddHotel from "./pages/addHotel/AddHotel";
import Home from "./pages/home/Home";


const engine = new Styletron();
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/dashboard/hotels" element={<Dashboard />} />
            <Route path="/dashboard/hotels/addHotel" element={<AddHotel />} />
          </Routes>
        </BrowserRouter>
      </BaseProvider>
    </StyletronProvider>
  );
}
export default App;
