// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, key, deleteToto} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteToto(id)
  }

  return (
    <li className="item-container">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
