import React from 'react'

export default function TableCard() {
  return (
    <>
      <div>
      <button className="border roundede">
       +
      </button>
    </div>
       <div className='flex  gap-4 m-3'>
                <div className="card w-72 bg-black shadow-xl h-60">
            <div className="card-body text-white">
                <h2 className="card-title">Judul</h2>
                <p>Ini adalah projek pkl kelompok 1</p>
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
            </div>
            <div className="card w-72 bg-black shadow-xl h-60">
            <div className="card-body text-white">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Edit</button>
                </div>
            </div>
            </div>
       </div>
    </>
  )
}
