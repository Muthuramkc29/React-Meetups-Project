import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import AddMeetups from "./pages/AddMeetups";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <div>
      <Navbar />
      <Layout>
        <Routes>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem", textAlign: "center" }}>
                <p>404 Error Page Not Found!</p>
              </main>
            }
          />
          <Route path="/" element={<AllMeetups />} />
          <Route path="/add-meetups" element={<AddMeetups />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
