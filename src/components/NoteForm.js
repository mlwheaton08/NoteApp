import { useState } from "react"

export const NoteForm = ({ setShowNoteForm, notes, setNotes }) => {

    const [note, setNote] = useState({text: ""})

    const handleSave = () => {
        const noteToAdd = {
            id: new Date(),
            done: false,
            dateCreated: new Date(),
            text: note.text
        }
        const notesCopy = [...notes]
        notesCopy.push(noteToAdd)
        notesCopy.sort((a,b) => {
			return new Date(b.dateCreated) - new Date(a.dateCreated)
		})
        setNotes(notesCopy)
        handleDiscard()
    }

    const handleDiscard = () => {
        setNote({text: ""})
        setShowNoteForm(false)
    }


    return <div
        className="w-1/3 mx-auto mb-6 flex flex-col gap-2"
        onKeyDown={(e) => {
            // checks if text input has focus
            if (document.activeElement === document.getElementById("input-note") && e.key === "Enter") {
                handleSave()
            }
        }}
    >
        <input
            id="input-note"
            autoFocus
            type="text"
            className="px-1 text-black rounded"
            onChange={(evt) => {
                const copy = {...note}
                copy.text = evt.target.value
                setNote(copy)
            }}
        />
        <div className="flex justify-end gap-2">
            <button
                className="px-3 py-px bg-green-900 rounded hover:bg-green-800"
                onClick={handleSave}
            >
                Save
            </button>
            <button
                className="text-blue-400"
                onClick={handleDiscard}
            >
                Discard
            </button>
        </div>
    </div>
}