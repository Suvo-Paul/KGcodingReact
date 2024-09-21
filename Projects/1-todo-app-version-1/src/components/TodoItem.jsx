import React from 'react'

const TodoItem = (props) => {
    
    return (
        <div class="row">
            <div class="col-6">
                {props.content}
            </div>
            <div class="col-4">
                {props.date}
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default TodoItem