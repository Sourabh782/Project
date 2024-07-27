import React from 'react'
import companion_cloud from "../assets/companion_cloud.jpg"
import notes from "../assets/notes.png"
import graph from "../assets/graph.png"

const Features = () => {
  return (
    <div className='w-full mt-12'>
        <div className='my-4'>
            <h2 className='text-center text-4xl text-white font-semibold'>Features</h2>
        </div>

        <div className='h-auto w-full flex mt-24 mb-16'>
            <div className='w-[50%] mr-4 pr-12 flex flex-col justify-center'>
                <p className='text-purple-400 text-sm font-medium mb-8'>COMPANION</p>
                <h2 className='text-3xl font-semibold text-white'>Say Hii to Your new Companion!</h2>
                <p className='text-white text-lg mt-8'>Sometimes you just want to curl up with a book, or stare out of a window and be alone in your thoughts. Your companion is a personalized device that's connected to you and your moods. Look at it as a reflection of yourself and as a way to communicate with the outside world without words. Your Companion comes in various forms and colors!</p>
            </div>
            <div className='w-[50%]'>
                <img src={companion_cloud} className='rounded-3xl' alt="" />
            </div>
        </div>

        <div className='h-auto w-full flex mt-24 mb-16'>
            <div className='w-[50%]'>
                <img src={notes} className='rounded-3xl' alt="" />
            </div>
            <div className='w-[50%] mr-4 pr-12 flex flex-col justify-center'>
                <p className='text-purple-400 text-sm font-medium mb-8'>NotesHub</p>
                <h2 className='text-3xl font-semibold text-white'>Take a moment to meditate on your thoughts</h2>
                <p className='text-white text-lg mt-8'>Life gets hectic and crowded, and it's hard to catch a break. The Oasis is a place of solace - to sit down, take a deep breath, think and note down your current mood before you are called to action again.</p>
            </div>
        </div>

        <div className='h-auto w-full flex mt-24 mb-16'>
            <div className='w-[50%] mr-4 pr-12 flex flex-col justify-center'>
                <p className='text-purple-400 text-sm font-medium mb-8'>WEATHERVANE</p>
                <h2 className='text-3xl font-semibold text-white'>Reflect on your mental health</h2>
                <p className='text-white text-lg mt-8'>It's not easy to remember feelings and tracking what's been bothering you when you're caught up in the middle of it. It's best to reflect when you're calm, and take positive action instead of a rushed reaction. The Weathervane shows you how you've been doing and what makes you happy and what gets you down.</p>
            </div>
            <div className='w-[50%]'>
                <img src={graph} className='rounded-3xl' alt="" />
            </div>
        </div>

        <div className='my-4'>
            <h2 className='text-center text-4xl text-white font-semibold'>Many More to come.....</h2>
        </div>

    </div>
  )
}

export default Features