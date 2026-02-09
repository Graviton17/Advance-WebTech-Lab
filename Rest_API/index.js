import express from 'express';
import users from './MOCK_DATA.json' with { type: "json" };
import fs from "fs/promises"

const app = express();
const PORT = 3000;

app.get('/users', (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `<li>${user.first_name} ${user.last_name} - ${user.email}</li>`).join('')}
    </ul>
  `;
  res.send(html);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.post('/api/users', express.json(), (req, res) => {
  const newUser = req.body;
  newUser.id = (users.length + 1) * 1078;
  users.push(newUser);

  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2))
    .then(() => console.log('User added to file'))
    .catch(err => console.error('Error writing to file', err));

  res.status(201).json(newUser);
});

app.patch('/api/users/:id', express.json(), (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (user) {
    Object.assign(user, req.body);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2))
      .then(() => console.log('User updated in file'))
      .catch(err => console.error('Error writing to file', err));

    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2))
      .then(() => console.log('User deleted from file'))
      .catch(err => console.error('Error writing to file', err));

    res.status(204).send();
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});