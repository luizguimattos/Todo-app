import PageHeader from './components/PageHeader/PageHeader'
import './global.css'

import styles from './App.module.css'
import { Input } from './components/Shared/Input'
import { Button } from './components/Shared/Button'
import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import { TaskSummary } from './components/TaskSummary/TaskSummary'
import { EmptyList } from './components/EmptyList/EmptyList'
import { ITodoItem } from './model/ITodoItem'
import { TaskItem } from './components/TaskItem/TaskItem'

function App() {

  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [inputValue, setInputValue] = useState('');

  const checkedTasksCounter = todoList.reduce((prevValue, currentTask) => {
    if (currentTask.completed) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITodoItem = {
      id: new Date().getTime(),
      Content: inputValue,
      completed: false,
    }

    setTodoList((state) => [...state, newTask]);
    setInputValue('');
  }

  function handleRemoveTodoItem(id: number) {
    const filteredTasks = todoList.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTodoList(filteredTasks)
  }

  function handleToggleTodoItem({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = todoList.map((item) => {
      if (item.id === id) {

        item.completed = value;
      }

      return { ...item }
    })

    setTodoList(updatedTasks);
  }

  return (
    <main>
      <PageHeader></PageHeader>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <TaskSummary tasksCounter={todoList.length} checkedTasksCounter={checkedTasksCounter}></TaskSummary>

          {todoList?.length > 0 ? (
            <div>
              {todoList.map((task) => (
                <TaskItem
                  key={task.id}
                  todoItem={task}
                  OnRemoveTask={handleRemoveTodoItem}
                  OnToggleTaskStatus={handleToggleTodoItem}
                />
              ))}
            </div>
          ) : (
            <EmptyList />
          )}

        </div>
      </section>

    </main>
  )
}

export default App
