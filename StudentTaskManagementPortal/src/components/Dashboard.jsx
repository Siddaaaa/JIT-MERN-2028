import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import {useState} from "react";
function Dashboard(){
    const [tasks,setTasks] = useState([{id:1, title:"Learn React",description:"Understanding Components",status:"Completed"},
                {id:2, title:"Learn JavaScript",description:"Understanding Variables,Functions",status:"Pending"},
                {id:3, title:"Learn MongoDB",description:"Understanding Databases",status:"Pending"},
                {id:4, title:"Learn NodeJs",description:"Understanding Connections",status:"Pending"}])

function toggletask(id){
        setTasks((currentTasks) =>
            currentTasks.map((task)=>{
                if(task.id === id){
                    return {...task, status: task.status === "Completed" ? "Pending" : "Completed"};
                }
                return task;
            })
        )
    }

function addTask(newTask){
    setTasks([...tasks,newTask]);
}

    return( 
        <main>
            <div className="stat-container">
                <StatCard title="Total tasks" value="10"/>
                <StatCard title="Completed" value="6"/>
                <StatCard title="Pending" value="4"/> 
            </div>


            <AddTask   onAddTask={addTask}/>


            <h2>Recent Tasks</h2>

                <div className="task-container">
                    {tasks.map((tasks)=>(<TaskCard key={tasks.id} title={tasks.title} description={tasks.description} status={tasks.status} onToggle={()=>toggletask(tasks.id)}/>))}
                </div>
        </main>

    )

}
export default Dashboard