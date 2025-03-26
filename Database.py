
import sqlite3
from werkzeug.security import generate_password_hash

# Connect to (or create) the database
conn = sqlite3.connect('users.db')
cursor = conn.cursor()

# creates users table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        email TEXT
    )
''')

# creates files table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS files (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        filename TEXT NOT NULL,
        uploaded_by TEXT NOT NULL,
        scan_result TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (uploaded_by) REFERENCES users(username)
    )
''')

# Add a test user
username = 'test2'
password = 'testpass2'
email = 'test1@example.com'
hashed_password = generate_password_hash(password)

# Add the user info to the users table
try:
    cursor.execute('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', 
                   (username, hashed_password, email))
    print(f"User '{username}' added successfully.")
except sqlite3.IntegrityError:
    print(f"User '{username}' already exists.")

# Commit and close
conn.commit()
conn.close()
