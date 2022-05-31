const getAllTasks = (req, res) => {
  res.send('All Tasks!')
}

const createTask = (req, res) => {
  res.json(req.body)
}

const getTask = (req, res) => {
  res.json({ id: req.params.id })
}

const patchTask = (req, res) => {
  res.send('Patch a Task')
}

const deleteTask = (req, res) => {
  res.send('Delete a task')
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  patchTask,
  deleteTask
}
