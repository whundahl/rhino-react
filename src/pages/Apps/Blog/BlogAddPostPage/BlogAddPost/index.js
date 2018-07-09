import React from 'react'
import AddForm from './AddForm'
import './style.scss'

class BlogAddPost extends React.Component {
  render() {
    return (
      <section className="card">
        <div className="card-header mb-2">
          <div className="utils__title">
            <strong>Post Add/Edit</strong>
          </div>
        </div>
        <div className="card-body">
          <div className="add-post">
            <AddForm />
          </div>
        </div>
      </section>
    )
  }
}

export default BlogAddPost
