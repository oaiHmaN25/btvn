import  { Component } from 'react'
import "../assets/Style.css";
import { client } from "../assets/Js/Client"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchTodo from './SearchTodo';
// import Hook from './Hook';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state = data.listTodo
    this.state = {
      taskName: "",
      tasks: [],
      checkbox: false,
      editTaskIndex: -1,
      debounceValue : "",
    };
    
    // console.log(props);
  }
  // debounce(value,delay) {

  // }
  componentDidMount() {
    this.getTask();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.taskName !== this.state.taskName) {
      // console.log(`ok`);
      const updateValue = setTimeout(() => {
        this.setState({ debounceValue : this.state.taskName} ) ;

        
      }, 500);
      // clearTimeout(updateValue);
    }
  }

  async getTask() {
    const apiKey = localStorage.getItem("apiKey");
    const { data } = await client.get(`/todos`, apiKey);

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
    this.setState({ tasks: data.data.listTodo });
    console.log(this.state);
    console.log(data.data);
    console.log(this.state.tasks);
    // console.log(data.data);
    // console.log(response);
  }

  myTaskChangeHandler = (e) => {
    this.setState({ taskName: e.target.value });
  };

  async addTask(todo) {
    const apiKey = localStorage.getItem("apiKey");
    // const createdAt = new Date();
    // todo =
    console.log(this.state);
    const { data } = await client.post("/todos", { todo }, apiKey);
    console.log(todo);
    if (todo.length === 1) {
      // console.log(`ok`);
      toast("Nhiều hơn 1 kí tự");
    } else {
      console.log(data);
      console.log(data.data);
      if (data.status_code === "SUCCESS") {
        toast(data.message);
        this.setState({ tasks: [data.data, ...this.state.tasks] });
      } else {
        console.log(`ok`);
        toast(data.message);
      }
    }
  }

  editTask(id, index) {
    if (index === this.state.editTaskIndex) {
      // Clicking "Sửa" again in edit mode, exit edit mode.
      this.setState({ editTaskIndex: -1, taskName: "" });
    } else {
      // Clicking "Sửa" to enter edit mode.
      this.setState({
        editTaskIndex: index,
        taskName: this.state.tasks[index].todo,
      });
    }
  }

  async editTask2(id, checkbox, todo) {
    const apiKey = localStorage.getItem("apiKey");
    console.log(id);
    const { data } = await client.patch(
      `/todos/${id}`,
      { todo, isCompleted: checkbox },
      apiKey
    );
    console.log(data);
    if (data.status_code === "SUCCESS") {
      const { data: token } = await client.get(`/todos/${id}`, apiKey);
      const updatedTasks = this.state.tasks.map((todo) =>
        todo._id === id ? token.data : todo
      );
      toast(data.message);
      console.log(this, this.state);

      this.setState({
        tasks: updatedTasks,
        editTaskIndex: null,
        taskName: "",
        checkbox: null,
      });
      // this.setState({
      //   editTaskIndex: index,
      //   taskName: this.state.tasks[index].todo,
      // });
    } else {
      toast(data.message);
    }
  }

  async deleteTask(id) {
    const apiKey = localStorage.getItem("apiKey");
    console.log(id);
    const { data } = await client.delete(`/todos/${id}`, apiKey);
    if (data.status_code === "SUCCESS") {
      console.log(`ok`);
      toast(data.message);
      const updatedTasks = this.state.tasks.filter((todo) => todo._id !== id);
      this.setState({ tasks: updatedTasks, editTaskIndex: -1, taskName: "" });
    } else {
      toast(data.message);
      console.log("false");
    }
  }
  completeTask = (e) => {
    console.log(e.target.checked);
    this.setState({ checkbox: e.target.checked });
    // console.log(`ok`);
    // const updatedTasks = [...this.state.tasks];
    // updatedTasks[index].completed = !updatedTasks[index].completed;
    // this.setState({ tasks: updatedTasks });
  };
  checkGmail = () => {};
  handleSearchTodo = (listTodo) => {
    this.setState({ tasks: listTodo });
  };
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
          <button
            className="add-button"
            onClick={() => {
              this.addTask(this.state.taskName);
            }}
          >
            {this.state.editTaskIndex === -1 ? "Thêm " : "Lưu"}
          </button>
          <SearchTodo
            searchValue={this.handleSearchTodo}
            taskName={this.state.debounceValue}
          />
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
                  value.todo
                )}
                <div className="button">
                  {index === this.state.editTaskIndex ? (
                    <div className="update">
                      <div className="complete">
                        <label
                          htmlFor="completed"
                          style={{ fontSize: "20px", marginRight: "10px" }}
                        >
                          {value.isCompleted ? "Completed" : "Not Completed"}
                        </label>
                        <input
                          type="checkbox"
                          id="completed"
                          // { textDe}
                          checked={
                            this.state.checkbox !== null
                              ? this.state.checkbox
                              : value.isCompleted
                          }
                          onChange={(e) => {
                            this.completeTask(e, value._id, index);
                          }}
                        />
                      </div>
                      <div className="cancel">
                        <button
                          className="editBtn"
                          onClick={() => this.editTask(value._id, index)}
                        >
                          Thoát
                        </button>
                        <button
                          className="updateBtn"
                          onClick={() =>
                            this.editTask2(
                              value._id,
                              this.state.checkbox,
                              this.state.taskName,
                              index
                            )
                          }
                        >
                          Lưu
                        </button>
                        <button
                          className="deleteBtn"
                          onClick={() => this.deleteTask(value._id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="actions">
                      <button
                        className="editBtn"
                        onClick={() => this.editTask(value._id, index)}
                      >
                        Sửa
                      </button>
                      <button
                        className="deleteBtn"
                        onClick={() => this.deleteTask(value._id)}
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