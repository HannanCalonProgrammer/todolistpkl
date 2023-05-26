import React, { useState } from "react";

export default function TableCard() {
  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      judul: "Judul",
      desc: "Ini adalah projek pkl kelompok 1",
      done: "on",
    },
  ]);

  function handleChange(e, id) {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id == id)
          return {
            ...task,
            [e.target.name]: e.target.value,
          };
        return task;
      })
    );
  }

  return (
    <>
      <div>
        <button
          className="btn btn-circle fixed right-0 bottom-0 text-3xl"
          onClick={() =>
            setTasks((prev) => [
              ...prev,
              {
                id: Math.random(),
                judul: "Task Baru",
                desc: "Tambahlan deskripsi",
              },
            ])
          }
        >
          +
        </button>
      </div>
      <div className="flex flex-wrap  gap-4 m-3">
        {tasks.map((task) => (
          <>
            <div key={task.id} className="card w-72 bg-black h-max shadow-xl">
              <div className="card-body text-white">
                <h2
                  className={`${
                    task.done == "on" ? "line-through" : ""
                  } card-title`}
                >
                  {task.judul}
                </h2>
                <p className={task.done == "on" ? "line-through" : ""}>
                  {task.desc}
                </p>
                <div className="">
                  <label
                    htmlFor={`task-${task.id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </label>
                </div>
              </div>
            </div>

            <input
              type="checkbox"
              id={`task-${task.id}`}
              className="modal-toggle"
            />
            <div className="modal">
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
            </div>
          </>
        ))}
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
    </>
  );
}
