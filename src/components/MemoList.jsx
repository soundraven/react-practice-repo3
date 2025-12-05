import MemoItem from "./MemoItem/MemoItem.jsx"

export default function MemoList({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onMemoDeleteClick,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onMemoItemClick={() => setSelectedMemoIndex(index)}
          onMemoDeleteClick={() => onMemoDeleteClick(index)}
          isSelected={selectedMemoIndex === index}>
          {memo.title}
        </MemoItem>
      ))}
    </div>
  )
}
