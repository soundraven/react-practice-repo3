import "./SidebarHeader.css"

export default function SidebarHeader({ isOpen, onToggleSidebar }) {
  return (
    <div className="SidebarHeader">
      {isOpen && <span>메모장</span>}
      <span className="toggle-btn" onClick={onToggleSidebar}>
        {isOpen ? "<<" : ">>"}
      </span>
    </div>
  )
}
