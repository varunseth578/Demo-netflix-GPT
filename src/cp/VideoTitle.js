import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-14">
    <h1 className="text-6xl font-bold">{title}</h1>
    <p className="py-6 text-lg w-1/4">{overview}</p>
    <div className="">
        <button className="bg-white text-black text-xl p-4 px-12 rounded-lg">Play</button>
        <button className=" mx-2 bg-white text-black text-xl p-4 px-12 rounded-lg">More Info</button>
    </div>

    </div>
  )
}

export default VideoTitle;