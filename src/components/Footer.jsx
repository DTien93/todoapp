import React from 'react'
import { useSelector } from 'react-redux'
import {
	todosSelector,
} from '../store/reducers/TodoSlice'

Footer.propTypes = {};

function Footer(props) {
    const todos = useSelector(todosSelector)
    return (
        <div className="footer">
            <p>Total Todo: {todos.length} </p>
        </div>
    );
}

export default Footer;