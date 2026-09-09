import "./App.css"
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <NavBar />
      <Welcome/>
      <Dashboard/>
    </div>
      
  )
}
export default App