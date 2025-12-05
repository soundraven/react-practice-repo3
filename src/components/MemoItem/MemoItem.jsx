import "./MemoItem.css"

export default function MemoItem({
  children,
  onMemoItemClick,
  isSelected,
  onMemoDeleteClick,
}) {
  return (
    <div
      className={"MemoItem" + (isSelected ? " selected" : "")}
      onClick={onMemoItemClick}>
      {children}
      <button
        className="MemoItem__delete-button"
        onClick={(e) => {
          e.stopPropagation()
          onMemoDeleteClick()
        }}>
        X
      </button>
    </div>
  )
}
