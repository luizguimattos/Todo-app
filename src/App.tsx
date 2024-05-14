import PageHeader from './components/PageHeader/PageHeader'
import './global.css'

import styles from './App.module.css'
import { Input } from './components/Shared/Input'
import { Button } from './components/Shared/Button'
import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import { TaskSummary } from './components/TaskSummary/TaskSummary'
import { EmptyList } from './components/EmptyList/EmptyList'

function App() {

  const [inputValue, setInputValue] = useState('')

  function handleAddTask() {

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
          <TaskSummary tasksCounter={10} checkedTasksCounter={5}></TaskSummary>

          <EmptyList></EmptyList>
        </div>
      </section>

    </main>
  )
}

export default App
