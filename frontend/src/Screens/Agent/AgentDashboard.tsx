import { Dashboard } from "../../components/Agent/Dashboard"
import { Sidebar } from "../../components/Agent/Sidebar"


export default function AgentDashboard() {
    return (
        <div className="d-flex bg-white w-100">
            {/* ---------------AGENT NAVBAR --------------- */}
            <Sidebar />
            {/* ----------------AGENT DASHBOARD */}
            <Dashboard />
        </div>
    )
}