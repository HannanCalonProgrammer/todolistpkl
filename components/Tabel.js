import React, { useEffect, useRef, useState } from "react";
import pb from "../config/pocketbase";
import { BiSearch } from "react-icons/bi";

export default function TableCard() {
  const [tasks, setTasks] = useState([]);
  const modalCreateRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    text: "",
  });

  const getMyTasks = async () => {
    const records = await pb.collection("tasks").getFullList({
      sort: "-created",
      filter: `user = "${pb.authStore.model.id}"`,
    });

    setTasks(records);
  };

  const createTask = async (e) => {
    e.preventDefault();
    const {
      judul: { value: judulValue },
      deskripsi: { value: descValue },
    } = e.target;

    if (!judulValue || !descValue) return alert("Please fill all fields");

    setLoading(true);
    await pb.collection("tasks").create({
      user: pb.authStore.model.id,
      judul: judulValue,
      deskripsi: descValue,
      selesai: false,
    });
    await getMyTasks();
    e.target.reset();
    modalCreateRef.current.click();
    setLoading(false);
  };

  const editTask = async (e, id) => {
    e.preventDefault();
    const {
      judul: { value: judulValue },
      deskripsi: { value: descValue },
    } = e.target;

    if (!judulValue || !descValue) return alert("Please fill all fields");

    setLoading(true);
    await pb.collection("tasks").update(id, {
      judul: judulValue,
      deskripsi: descValue,
    });
    await getMyTasks();
    e.target.reset();
    setLoading(false);
    setShowAlert({
      show: true,
      text: "Task updated successfully",
    });

    setTimeout(() => {
      setShowAlert({
        show: false,
        text: "",
      });
    }, 2000);
  };

  const handleSelesai = async (e, id, hasCheck) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            selesai: !task.selesai,
          };
        }
        return task;
      })
    );

    await pb.collection("tasks").update(id, {
      selesai: !hasCheck,
    });
    await getMyTasks();
  };

  const deleteTask = async (id) => {
    setLoading(true);
    await pb.collection("tasks").delete(id);
    await getMyTasks();
    setLoading(false);
  };

  useEffect(() => {
    getMyTasks();
  }, []);

  return (
    <div className="bg-white w-full">
      <div>
        <label
          htmlFor="create-modal"
          className="btn btn-circle fixed right-0 bottom-0 text-3xl"
        >
          +
        </label>
      </div>
      <div className="flex flex-wrap  gap-4 m-3">
        {tasks?.map((task) => (
          <div key={task.id}>
            <div className="card w-72 bg-black h-max shadow-xl">
              <div className="card-body text-white">
                <h2
                  className={`${task.selesai ? "line-through" : ""} card-title`}
                >
                  {task.judul}
                </h2>
                <p className={task.selesai ? "line-through" : ""}>
                  {task.deskripsi}
                </p>
                <p>{new Date(task.created).toLocaleDateString("id-ID")}</p>
                <div className="flex w-full justify-between">
                  <label
                    htmlFor={`edit-modal-${task.id}`}
                    className={`btn btn-primary ${
                      task.selesai || loading ? "btn-disabled" : ""
                    }`}
                  >
                    Edit
                  </label>
                  <button
                    disabled={loading}
                    onClick={() => deleteTask(task.id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                  <input
                    type="checkbox"
                    checked={task.selesai}
                    onChange={(e) => handleSelesai(e, task.id, task.selesai)}
                    className="checkbox"
                  />
                </div>
              </div>
            </div>

            <input
              type="checkbox"
              id={`edit-modal-${task.id}`}
              className="modal-toggle"
            />
            <div className="modal" id={`edit-modal-${task.id}`}>
              <div className="modal-box">
                <h3 className="font-bold text-lg">Edit</h3>
                {showAlert.show && (
                  <div className="alert alert-success shadow-lg mt-4">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{showAlert.text}</span>
                    </div>
                  </div>
                )}
                <form
                  onSubmit={(e) => editTask(e, task.id)}
                  className="flex flex-col gap-4 mt-4"
                >
                  <input
                    type="text"
                    placeholder="Judul"
                    name="judul"
                    defaultValue={task.judul}
                    className="input w-full input-bordered input-lg"
                  />
                  <textarea
                    className="textarea textarea-bordered textarea-lg"
                    placeholder="Deskripsi"
                    defaultValue={task.deskripsi}
                    name="deskripsi"
                  />
                  <button
                    className="hidden"
                    id={`btn-edit-${task.id}`}
                    type="submit"
                  />
                </form>
                <div className="modal-action">
                  <label
                    htmlFor={`edit-modal-${task.id}`}
                    className={`btn ${loading ? "btn-disabled" : ""}`}
                  >
                    Cancel
                  </label>
                  <label
                    htmlFor={`btn-edit-${task.id}`}
                    className={`btn-success btn ${
                      loading ? "btn-disabled" : ""
                    }`}
                  >
                    Save
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <input
              type="checkbox"
              id={`task-${task.id}`}
              className="modal-toggle"
            /> */}
        {/* <div className="modal">
              <div className="modal-box">
                <input
                  type="text"
                  name="judul"
                  onChange={(e) => handleChange(e, task.id)}
                  value={task.judul}
                  placeholder="Judul"
                  className="textarea textarea-bordered"
                />
                <input
                  type="text"
                  value={task.desc}
                  onChange={(e) => handleChange(e, task.id)}
                  name="desc"
                  placeholder="Desckripsi"
                  className="textarea textarea-bordered"
                />
                <input
                  type="checkbox"
                  value={task.done}
                  className="checkbox"
                  onChange={(e) => handleChange(e, task.id)}
                />
                <div className="modal-action">
                  <label htmlFor={`task-${task.id}`} className="btn">
                    Cancel
                  </label>
                  <label htmlFor={`task-${task.id}`} className="btn">
                    Save
                  </label>
                </div>
              </div>
            </div> */}
        {/* <div className="card w-72 bg-black shadow-xl h-60">
            <div className="card-body text-white">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Edit</button>
                </div>
            </div>
            </div>
            <div className="card w-72 bg-black shadow-xl h-60">
            <div className="card-body text-white">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Edit</button>
                </div>
            </div>
            </div> */}
      </div>

      <input type="checkbox" id="create-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create New Task</h3>
          <form onSubmit={createTask} className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Judul"
              name="judul"
              className="input w-full input-bordered input-lg"
            />
            <textarea
              className="textarea textarea-bordered textarea-lg"
              placeholder="Deskripsi"
              name="deskripsi"
            />
            <button className="hidden" id="btn-create" type="submit" />
          </form>
          <div className="modal-action">
            <label
              htmlFor="create-modal"
              className={`btn ${loading ? "btn-disabled" : ""}`}
              ref={modalCreateRef}
            >
              Cancel
            </label>
            <label
              htmlFor="btn-create"
              className={`btn-success btn ${loading ? "btn-disabled" : ""}`}
            >
              Create
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
