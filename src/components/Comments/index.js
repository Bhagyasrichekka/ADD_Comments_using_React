import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  updateComment = event => {
    this.setState({comment: event.target.value})
  }

  updateName = event => {
    this.setState({name: event.target.value})
  }

  updateLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(eachItem => eachItem.id !== id),
    })
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: v4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {name, comment, commentsList} = this.state
    const count = commentsList.length
    return (
      <div className="bg">
        <h1>Comments</h1>
        <div className="comments-container">
          <form className="form-container">
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              value={name}
              onChange={this.updateName}
              className="name-input"
              type="text"
              placeholder="Your Name"
            />
            <textarea
              value={comment}
              onChange={this.updateComment}
              className="name-input"
              type="text"
              placeholder="Your Comment"
              rows="8"
            />
            <button className="add-btn" type="submit" onClick={this.addComment}>
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-img"
          />
        </div>
        <div>
          <hr className="line" />
          <p className="description">
            <span className="comment-count">{count}</span> Comments
          </p>
          <ul>
            {commentsList.map(eachComment => (
              <CommentItem
                updateLike={this.updateLike}
                deleteComment={this.deleteComment}
                key={eachComment.id}
                eachComment={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
