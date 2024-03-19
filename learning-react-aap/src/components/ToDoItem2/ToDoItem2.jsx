function ToDoItem2(){
    let toDoName = 'Go to College';
    let toDoDate = "19/03/2024";
return <div className="container text-center">
    <div className="row">
          <div className="col-6">{toDoName}</div>
          <div className="col-4">{toDoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
</div>
}
export default ToDoItem2;