// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {eachComment, updateLike, deleteComment} = props
  const {name, comment, id, isLiked, date, initialClassName} = eachComment
  const initial = name ? name[0].toUpperCase() : ''
  const postTime = formatDistanceToNow(date)
  const profileStyles = `${initialClassName} profile`
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onLiked = () => {
    updateLike(id)
  }

  const onDelete = () => {
    deleteComment(id)
    console.log(id)
  }
  return (
    <li className="card">
      <div className="details">
        <p className={profileStyles}>{initial}</p>
        <p className="name">{name}</p>
        <p className="time">{postTime}</p>
      </div>
      <p>{comment}</p>
      <div className="like-delete">
        <button type="button" className="like-btn" onClick={onLiked}>
          <img src={imgUrl} alt="like" />
        </button>
        <button
          data-testid="delete"
          type="button"
          className="like-btn"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
