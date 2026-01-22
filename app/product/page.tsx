import React from 'react'

export default function page() {
    return (
        <div>
            <h1>ini halaman product</h1>
            <span>hello!</span>
            <div className="flex flex-col gap-2 p-4 border rounded-lg">
                <span className='text-[1.2rem] font-bold italic'>Hai user</span>
                <div className="flex gap-4">
                    <span>Deskripsi</span>
                    <span className='indent-[2rem] first-letter:italic first-letter:text-[2rem] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga error qui provident minus praesentium autem ad neque saepe, quas asperiores modi numquam libero consectetur mollitia facere delectus itaque! Dolorem, ratione.</span>
                </div>
            </div>
        </div>
    )
}
