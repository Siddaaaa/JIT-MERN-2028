import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
function Dashboard(){
    const tasks =[{id:1, title:"Learn React",description:"Understanding Components",status:"Completed"},
                {id:2, title:"Learn JavaScript",description:"Understanding Variables,Functions",status:"Pending"},
                {id:3, title:"Learn MongoDB",description:"Understanding Databases",status:"Pending"},
                {id:4, title:"Learn NodeJs",description:"Understanding Connections",status:"Pending"}]
    return(
        <main>
            <div className="stat-container">
                <StatCard title="Total tasks" value="10"/>
                <StatCard title="Completed" value="6"/>
                <StatCard title="Pending" value="4"/> 
            </div>

            <h2>Recent Tasks</h2>

                <div className="task-container">
                    {tasks.map((tasks)=>(<TaskCard key={tasks.id} title={tasks.title} description={tasks.description} status={tasks.status}/>))}
                </div>
        </main>

    )

}
export default Dashboard