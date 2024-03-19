import React from 'react';

const PostItem = (props) => {
    console.log(props)
    return (
        <div>
             <div className='post'>
      <div className='post__content'>
        <strong>js yroki 1 </strong>
          <div>js - language prog</div>
       

      </div>
      <div className='post__btns'>
        <button>delete</button>
      </div>
      </div>
      
        </div>
    );
};

export default PostItem;