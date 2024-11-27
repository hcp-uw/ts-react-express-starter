import express from 'express';
import cors from 'cors';
// alternatively could use import { Todo } from '@shared/types/todo';
import { Todo } from '@shared/types';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let todos: Todo[] = [];

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const newTodo: Todo = {
    id: todos.length + 1,
    text: req.body.text,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  res.json(todos.find(todo => todo.id === id));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
