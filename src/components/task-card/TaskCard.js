import "./TaskCard.css"

function TaskCard()
{

    return(

        <div className="card-wrapper">



            <div className="card-header"> 

                <div className="task-nr"> 
                <p >TaskNr: 1314</p>
                </div>


                <div className = "badge">
                <p>Status: TO-do</p>
                </div>   
                
             </div>


            <div className="card-content"> Content C</div>


            <div className="card-foter">

                <p>Due date</p>
                <p>09.07.2024</p>                
            </div>
               



        </div>
    )
}


export default TaskCard;