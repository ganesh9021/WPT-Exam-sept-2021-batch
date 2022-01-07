import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  return (
    <div>
      <MyMessages />
    </div>
  );
}

function MyMessages() {
  const [message, SetMessage] = useState("");
  const [list, setlist] = useState([]);

  const handleMessage = (e) => {
    SetMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (message == "") {
      alert("enter Message");
      return;
    }
    const url = "http://localhost:2000/path1";
    const data = {
      message: message,
    };
    await axios.post(url, data);
    const newlist = [data, ...list];
    setlist(newlist);
    SetMessage("");
  };

  const textFloat = (index, value) => {
    if (index % 2 == 0) {
      return (
        <div className="alert alert-success text-end">{value.message}</div>
      );
    } else {
      return (
        <div className="alert alert-success text-start">{value.message}</div>
      );
    }
  };
  useEffect(() => {
    sendMessage();
  }, []);

  return (
    <div>
      <div className="bg-dark text-light p-4 mb-3 ml-0">
        <span>MyChatApp </span>
        <span>by Ganesh_Bajare_</span>
        <span>040_KH</span>
      </div>

      <div id="input area" className="row">
        <div className="col-8">
          <input
            className="form control form-control-lg w-100 p-3 mb-3"
            type="text"
            name=""
            id=""
            value={message}
            onChange={handleMessage}
            placeholder="Lets chat here.."
          />
        </div>
        <div className="col-4">
          <input
            className="btn btn-primary btn-lg w-100 p-3 m-0"
            type="button"
            value="send"
            onClick={sendMessage}
          />
        </div>
      </div>
      <div>
        {list.map((value, index) => (
          <div key={index}>
            {textFloat(index, value)}
            <textFloat />
          </div>
        ))}
      </div>
    </div>
  );
}
