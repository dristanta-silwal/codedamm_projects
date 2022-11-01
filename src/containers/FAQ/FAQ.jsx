import React from 'react'
import data from './data'
import SingleQuestion from './Question'

const FAQ = () => {
    return (
        <main>
			<div className="container">
				<h3 className='text-3xl font-mono font-bold text-zinc-400'>FAQ</h3>
				<section className="info">
					{data.map((question) => {
						return (
							<SingleQuestion
								title={question.title}
								info={question.info}
								key={question.id}
							/>
						)
					})}
				</section>
			</div>
		</main>
    )
}

export default FAQ