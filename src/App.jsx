import { useState } from 'react'
import styles from './App.module.css'

let nextId = 1

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: nextId++, text, completed: false }])
    setInput('')
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  const remaining = tasks.filter(t => !t.completed).length

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>タスクボード</h1>

      <div className={styles.inputRow}>
        <input
          className={styles.input}
          type="text"
          placeholder="新しいタスクを入力..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.addButton} onClick={addTask}>
          追加
        </button>
      </div>

      {tasks.length > 0 && (
        <p className={styles.summary}>
          {remaining} / {tasks.length} 件 未完了
        </p>
      )}

      <ul className={styles.list}>
        {tasks.map(task => (
          <li key={task.id} className={`${styles.item} ${task.completed ? styles.completed : ''}`}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={styles.text}>{task.text}</span>
            <button
              className={styles.deleteButton}
              onClick={() => deleteTask(task.id)}
              aria-label="削除"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className={styles.empty}>タスクがありません。上から追加してください。</p>
      )}
    </div>
  )
}
