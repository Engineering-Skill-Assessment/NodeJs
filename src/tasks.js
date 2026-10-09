import { initialTasks } from './data.js';

/** @type {import('./data.js').Task[]} */
let tasks = initialTasks.map((task) => ({ ...task }));

/**
 * Candidate task: filter tasks by status.
 * @param {import('./data.js').Task[]} allTasks
 * @param {import('./data.js').Filter} status
 * @returns {import('./data.js').Task[]}
 */
export function filterTasks(allTasks, status) {
  // TODO: implement filtering for "all" | "active" | "completed"
  return allTasks;
}

export function getTasks(status = 'all') {
  const normalized =
    status === 'all' || status === 'active' || status === 'completed'
      ? status
      : 'all';
  return filterTasks(tasks, normalized);
}

export function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    return null;
  }

  task.completed = !task.completed;
  return { ...task };
}
