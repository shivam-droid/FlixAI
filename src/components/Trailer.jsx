import React from 'react'

const Trailer = (id) => {
  return (
    <div className="w-screen">

      {/* Trailer Video */}
      <iframe
        className="w-screen left-0 aspect-video"
        src={`https://www.youtube.com/embed/qSu6i2iFMO0?autoplay=1&mute=1&loop=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Trailer