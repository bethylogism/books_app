import React from 'react'

const BookForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className="input"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={data.title}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Author</label>
        <div className="control">
          <input
            className="input"
            placeholder="Author"
            name="author"
            onChange={handleChange}
            value={data.author}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image"
            name="image"
            onChange={handleChange}
            value={data.image}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Release Year</label>
        <div className="control">
          <input
            className="input"
            placeholder="Release Year"
            name="releaseDate"
            onChange={handleChange}
            value={data.releaseDate}
          />
        </div>
      </div>

      <button className="button is-primary">Submit</button>
    </form>
  )
}

export default BookForm
