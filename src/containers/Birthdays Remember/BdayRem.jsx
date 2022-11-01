import React, { useState } from 'react'
import data from './data'
import List from './List'

function BdayRem() {
	// create a state variable here
    const [people, setPeople] = useState(data);
	// this should clear all records
	function clearAllRecords() {
        setPeople([]);
    }
	return (
		<main className='my-10'>
			<section className="con1 grid grid-cols-1 lg:grid-cols-2 rounded-2xl bg-gray-600 text-zinc-400">
				{/* change this to state variable data */}
				<h3 className='my-4 text-3xl text-center'><span className='text-bolder text-red-500'>"{people.length}"</span> birthdays today</h3>
				<button onClick={clearAllRecords} className="my-4">Clear All</button>
				<List people={people} />
			</section>
		</main>
	)
}

export default BdayRem
