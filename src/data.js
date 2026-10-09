/** @typedef {'low' | 'medium' | 'high'} Priority */
/** @typedef {'all' | 'active' | 'completed'} Filter */
/**
 * @typedef {object} Task
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 * @property {Priority} priority
 */

/** @type {Task[]} */
export const initialTasks = [
  { id: 1, title: 'Review candidate applications', completed: false, priority: 'high' },
  { id: 2, title: 'Update project documentation', completed: true, priority: 'medium' },
  { id: 3, title: 'Prepare weekly report', completed: false, priority: 'low' },
  { id: 4, title: 'Fix authentication bug', completed: false, priority: 'high' },
  { id: 5, title: 'Schedule team retrospective', completed: true, priority: 'low' },
  { id: 6, title: 'Refactor dashboard layout', completed: false, priority: 'medium' },
  { id: 7, title: 'Write unit tests for utils', completed: false, priority: 'medium' },
];
