import MemoContainer from "./components/MemoContainer/MemoContainer"
import Sidebar from "./components/Sidebar/Sidebar"
import "./App.css"
import { useCallback, useEffect, useState } from "react"
import { localStorageSetItem } from "./lib/storage"

function initMemosGetItem() {
  return JSON.parse(localStorage.getItem("memos")) || []
}

function initSidebarOpen() {
  const value = localStorage.getItem("sidebarOpen")
  return value === null ? true : JSON.parse(value)
}

export default function App() {
  const [memos, setMemos] = useState(initMemosGetItem)
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0)
  const [isSidebarOpen, setIsSidebarOpen] = useState(initSidebarOpen)

  useEffect(() => {
    localStorageSetItem("sidebarOpen", isSidebarOpen)
  }, [isSidebarOpen])

  const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  const handleMemoChange = useCallback(
    (newMemo) => {
      setMemos((prevMemos) => {
        const newMemos = [...prevMemos]
        newMemos[selectedMemoIndex] = newMemo
        localStorageSetItem("memos", newMemos)
        return newMemos
      })
    },
    [selectedMemoIndex]
  )

  const handleAddMemo = useCallback(() => {
    const now = new Date().getTime()
    const newMemo = {
      title: "Untitled",
      content: "",
      createAt: now,
      updateAt: now,
    }
    setMemos([...memos, newMemo])
    setSelectedMemoIndex(memos.length)

    localStorageSetItem("memos", [...memos, newMemo])
  }, [memos])

  const handleDeleteMemo = useCallback(
    (deleteMemoIndex) => {
      setMemos((prevMemos) => {
        const newMemos = [...prevMemos]
        newMemos.splice(deleteMemoIndex, 1)
        localStorageSetItem("memos", newMemos)
        return newMemos
      })

      if (deleteMemoIndex === selectedMemoIndex) {
        setSelectedMemoIndex(0)
      } else if (deleteMemoIndex < selectedMemoIndex) {
        setSelectedMemoIndex(selectedMemoIndex - 1)
      }
    },
    [selectedMemoIndex]
  )

  return (
    <div className="App">
      <Sidebar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onAddMemo={handleAddMemo}
        onMemoDeleteClick={handleDeleteMemo}
        isOpen={isSidebarOpen}
        onToggleSidebar={handleToggleSidebar}
      />
      <MemoContainer
        memo={memos[selectedMemoIndex]}
        onMemoChange={handleMemoChange}
      />
    </div>
  )
}
