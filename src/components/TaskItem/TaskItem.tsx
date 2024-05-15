import { Check, Trash } from '@phosphor-icons/react';
import { ITodoItem } from '../../model/ITodoItem';
import styles from './TaskItem.module.css'


interface TaskItemProps {
    todoItem: ITodoItem
    OnRemoveTask: (id: number) => void
    OnToggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}


export function TaskItem({ todoItem, OnRemoveTask, OnToggleTaskStatus }: TaskItemProps) {

    function handleTaskToggle() {
        OnToggleTaskStatus({ id: todoItem.id, value: !todoItem.completed })
    }

    function handleRemove() {
        OnRemoveTask(todoItem.id)
    }

    const checkboxCheckedClassname = todoItem.completed
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
    const paragraphCheckedClassname = todoItem.completed
        ? styles['paragraph-checked']
        : ''

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={todoItem.completed} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {todoItem.completed && <Check size={12} />}
                    </span>

                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {todoItem.Content}
                    </p>
                </label>
            </div>
            <button onClick={handleRemove}>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    );
}