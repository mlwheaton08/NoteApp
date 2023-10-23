import { useState } from 'react';
import { addIcon, noteIcon } from '../icons';
import { data } from '../data/DB';
import { NoteForm } from './NoteForm';

export const NoteApp = () => {

	const [notes, setNotes] = useState(data.notes.sort((a,b) => {
		return new Date(b.dateCreated) - new Date(a.dateCreated)
	}))
	const [showNoteForm, setShowNoteForm] = useState(false)

	const handleCheckbox = (note) => {
		const copy = [...notes]
		const index = copy.indexOf(note)
		copy.splice(index, 1)

		note.done = !note.done
		copy.push(note)
		copy.sort((a,b) => {
			return new Date(b.dateCreated) - new Date(a.dateCreated)
		})
		setNotes(copy)
	}


	return (
		<div>
			<header className='my-12 flex justify-center gap-4'>
				<h1 className='text-4xl'>Notes</h1>
				{noteIcon("w-12 h-12 fill-red-600")}
			</header>

			{
				!showNoteForm
					? addIcon("mx-auto mb-6 w-10 h-10 fill-gray-300 hover:cursor-pointer hover:fill-white", () => setShowNoteForm(true))
					: <NoteForm
						setShowNoteForm={setShowNoteForm}
						notes={notes}
						setNotes={setNotes}
					/>
			}

			<div className='w-1/2 m-auto flex flex-col align-middle gap-4'>
				{
					notes.map((note) => {
						return <div className={`px-5 py-2 flex justify-between rounded
						${note.done ? 'bg-red-950 text-gray-400' : 'bg-red-900'}`}>
							<p>{note.text}</p>
							<input
								type='checkbox'
								checked={note.done}
								onChange={() => handleCheckbox(note)}
							/>
						</div>
					})
				}
			</div>
		</div>
	)
}