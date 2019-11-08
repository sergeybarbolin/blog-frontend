import React from 'react';

const AddPostForm = () => (
    <form>
        <div className="form-group">
            <label htmlFor="postTitle">Title</label>
            <input 
                type="text" 
                className="form-control" 
                id="postTitle" 
                placeholder="Enter title" 
            />
        </div>

        <div className="form-group">
            <label htmlFor="postImg">Link post image</label>
            <input 
                type="text" 
                className="form-control" 
                id="postImg" 
                placeholder="Enter link image" 
            />
        </div>

        <div className="form-group">
            <label htmlFor="postDescription">Description</label>
            <textarea 
                rows="5"
                className="form-control" 
                id="postDescription" 
                placeholder="Enter description" 
            />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
)

export default AddPostForm;