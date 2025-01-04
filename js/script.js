// Função que adiciona tarefa
function addTask() {

    // títutlo da tarefa
    const taskTitle = document.querySelector('#task-title').value

    if(taskTitle) {
        // clonar o template
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true)

        // Adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle

        // remover as classes desnecessárias
        newTask.classList.remove('template')
        newTask.classList.remove('hide')

        // Adicionar tarefa na lista
        const list = document.querySelector('#tasks-list')

        list.appendChild(newTask)

        // Adicionar o evento de remoção
        const removerBtn = newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this)
        })

        // Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function() {
            completeTask(this)
        })

        // Limpar texto
         document.querySelector('#task-title').value = ''

    }

}

// funcao de completar tarefa
function completeTask(task) {
    const taskToComplete = task.parentNode

    taskToComplete.classList.toggle('done')
}

// funcao de remover tarefa
function removeTask(task) {
    task.parentNode.remove(true)
}

// Evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn')

addBtn.addEventListener('click', function(e) {
    e.preventDefault()

    addTask()
})

addBtn.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        addTask()
    }
})