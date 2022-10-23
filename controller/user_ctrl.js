import db from '../db/index.js'

async function getAllUsers(req, res) {
  const [rows] = await db.query('select id, username, nickname from ev_users')
  console.log(rows);
}

getAllUsers()