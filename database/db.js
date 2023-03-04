const sqlite3 = require("sqlite3").verbose();

const DB_PATH = "./data.db";

// Open the database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log(`Connected to the database at ${DB_PATH}`);
});

// Create the `carts` table
db.run(`CREATE TABLE IF NOT EXISTS carts (
    id TEXT PRIMARY KEY,
    data TEXT NOT NULL
  )`);

// Get the cart data for a given session ID
async function getCartData(sessionId) {
  return new Promise((resolve, reject) => {
    db.get("SELECT data FROM carts WHERE id = ?", sessionId, (err, row) => {
      if (err) {
        reject(err);
      } else if (row) {
        resolve(JSON.parse(row.data));
      } else {
        resolve(null);
      }
    });
  });
}

// Save the cart data for a given session ID
async function saveCartData(sessionId, cartData) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(cartData);
    db.run(
      "INSERT OR REPLACE INTO carts (id, data) VALUES (?, ?)",
      sessionId,
      data,
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

module.exports = {
  getCartData,
  saveCartData,
};
