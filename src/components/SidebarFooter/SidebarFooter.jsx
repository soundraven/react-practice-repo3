import "./SidebarFooter.css"

export default function SideBarFooter({ onAddMemo }) {
  return (
    <div className="SidebarFooter">
      <button className="SidebarFooter__add-button" onClick={onAddMemo}>
        +
      </button>
    </div>
  )
}
