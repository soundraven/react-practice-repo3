import MemoList from "../MemoList"
import SidebarFooter from "../SidebarFooter/SidebarFooter.jsx"
import SidebarHeader from "../SidebarHeader/SidebarHeader.jsx"
import "./Sidebar.css"

export default function Sidebar({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onAddMemo,
  onMemoDeleteClick,
  isOpen,
  onToggleSidebar,
}) {
  return (
    <div className={`Sidebar ${isOpen ? "open" : "closed"}`}>
      <SidebarHeader isOpen={isOpen} onToggleSidebar={onToggleSidebar} />

      {isOpen && (
        <>
          <MemoList
            memos={memos}
            selectedMemoIndex={selectedMemoIndex}
            setSelectedMemoIndex={setSelectedMemoIndex}
            onMemoDeleteClick={onMemoDeleteClick}
          />
          <SidebarFooter onAddMemo={onAddMemo} />
        </>
      )}
    </div>
  )
}
