import React, { useState } from 'react'
import { addTodo } from '../store/reducers/TodoSlice'
// Day hanh dong di
import { useDispatch } from 'react-redux'

const TodoForm = () => {
	const [title, setTitle] = useState('')

	//  Note user enter
	const changeTitle = event => {
		setTitle(event.target.value)
	}

	const dispatch = useDispatch()

	const addSingleTodo = event => {
		event.preventDefault()
		dispatch(addTodo(title))
		setTitle('')
	}

	return (
		<div>
			<form onSubmit={addSingleTodo}>
				<input type='text' value={title} onChange={changeTitle} placeholder='Enter Task...' />
				<input type='submit' value='Add' />
			</form>
		</div>
	)
}

export default TodoForm