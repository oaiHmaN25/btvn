import  { Component } from 'react'
import "../assets/Style.css";
import { client } from "../assets/Js/Client"
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state = data.listTodo
    this.state = { taskName: "", tasks: [], editTaskIndex: -1 };

    console.log(props);
  }
  componentDidMount() {
    this.getTask();
    
  }

  async getTask() {
    const apiKey = localStorage.getItem("apiKey");
    const {  data } = await client.get(`/todos`, apiKey);

    // if (data.code === 200) {
    //   console.log(`ok`);
    //   renderAfterLogin();
    //   titleEL.value = "";
    //   contentEL.value = "";
    // } else if (data.status === 401) {
    //   const refreshToken = localStorage.getItem("refresh_token");
    //   const dataBlog = await refreshToken(refreshToken);
    //   console.log(dataBlog);
    //   showErrorPopup(`${tokens.message}`);
    // }
    this.setState({ tasks: data.data });
    console.log(this.state);
    console.log(data.data);
    console.log(this.state.tasks);
    // console.log(data.data);
    // console.log(response);
  }

  myTaskChangeHandler = (e) => {
    this.setState({ taskName: e.target.value });
  };

  addTask = () => {
    if (this.state.editTaskIndex !== -1) {
      const updatedTasks = [...this.state.tasks];
      updatedTasks[this.state.editTaskIndex] = this.state.taskName;
      this.setState({
        tasks: updatedTasks,
        taskName: "",
        completed: false,
        editTaskIndex: -1,
      });
    } else {
      this.setState({
        tasks: [...this.state.tasks, this.state.taskName],
        completed: false,
        taskName: "",
      });
    }
  };

  editTask = (index) => {
    if (index === this.state.editTaskIndex) {
      // Clicking "Sửa" again in edit mode, exit edit mode.
      this.setState({ editTaskIndex: -1, taskName: "" });
    } else {
      // Clicking "Sửa" to enter edit mode.
      this.setState({
        editTaskIndex: index,
        taskName: this.state.tasks[index],
      });
    }
  };

  deleteTask = (index) => {
    const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks, editTaskIndex: -1, taskName: "" });
  };
  completeTask = (index) => {
    console.log(`ok`);
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    this.setState({ tasks: updatedTasks });
  };
  checkGmail = () => {};
  render() {
    return (
      <div className="container">
        <h1>Welcome to Todo App</h1>
        <div className="add">
          <input
            className="input"
            placeholder="Thêm todo mới"
            onChange={this.myTaskChangeHandler}
            value={this.state.taskName}
          />
          <button className="add-button" onClick={this.addTask}>
            {this.state.editTaskIndex === -1 ? "Thêm mới" : "Lưu"}
          </button>
        </div>

        <ul>
          {this.state.tasks.length === 0 ? (
            <li>Không có todo</li>
          ) : (
            this.state.tasks.map((value, index) => (
              <li key={index}>
                {index === this.state.editTaskIndex ? (
                  <input
                    className="input"
                    onChange={this.myTaskChangeHandler}
                    value={this.state.taskName}
                  />
                ) : (
                  value
                )}
                <div className="button">
                  {index === this.state.editTaskIndex ? (
                    <div className="update">
                      <div className="complete">
                        <label
                          htmlFor="completed"
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        >
                          {/* {tasks.completed ? "Completed" : "Not Completed"} */}
                        </label>
                        <input
                          type="checkbox"
                          id="completed"
                          onClick={() => {
                            this.completeTask(index);
                          }}
                        />
                      </div>
                      <div className="cancel">
                        <button
                          className="editBtn"
                          onClick={() => this.editTask(index)}
                        >
                          Thoát
                        </button>
                        <button className="updateBtn" onClick={this.addTask}>
                          Lưu
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => this.deleteTask(index)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="actions">
                      <button
                        className="editBtn"
                        onClick={() => this.editTask(index)}
                      >
                        Sửa
                      </button>
                      <button
                        className="deleteBtn"
                        onClick={() => this.deleteTask(index)}
                      >
                        Xóa
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}