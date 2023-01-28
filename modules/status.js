export default function updateStatus() {
  document.addEventListener('DOMContentLoaded', () => {
    const checkInput = document.querySelectorAll('.check');
    checkInput.forEach((check) => {
      check.addEventListener('change', (e) => {
        let tasks = [];
        tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks.forEach((task) => {
          if ((e.target.id === `input${task.index}`) && (task.completed === false)) {
            task.completed = true;
            e.target.checked = true;
            localStorage.setItem('tasks', JSON.stringify(tasks));
          } else if ((e.target.id === `input${task.index}`) && (task.completed === true)) {
            task.completed = false;
            e.target.checked = false;
            localStorage.setItem('tasks', JSON.stringify(tasks));
          }
        });
      });
    });
  });
}