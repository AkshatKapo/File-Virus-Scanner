import sqlite3
from werkzeug.security import generate_password_hash

# Connect to (or create) the database file

database_conn = sqlite3.connect('users.db')

# Create a new users table (if it doesn't exist)
database_conn.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
''')
# Add a test user with a hashed password
user_username = 'test1'
user_password = 'testpass1'
# Hash the password (NEVER store plain text passwords)
password_hashed = generate_password_hash(user_password)

# Insert the user into the table
try:
    database_conn.execute('INSERT INTO users (username, password) VALUES (?, ?)', (user_username, password_hashed))
    print(f"User '{user_username}' added successfully.")
except sqlite3.IntegrityError:
    print(f"User '{user_password}' already exists.")

# Commit changes and close the connection
database_conn.commit()
database_conn.close()