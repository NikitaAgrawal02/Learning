import React from 'react';
import faker from 'faker';

const CommentDetails = (props) => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href='/' className="avatar">
                    <img alt="avatar" src={faker.image.people() }/>
                </a>
               <div className='content'>
                    <a href='/' className="author">
                        {props.author}
                    </a>
                </div>
            <div className='metadata'>
                <span className='date'>
                    {props.dateLog}
                </span>
            </div>
            <div className='text'>
                {props.description}
            </div>
            </div> 
        </div>
    )
}

export default CommentDetails
