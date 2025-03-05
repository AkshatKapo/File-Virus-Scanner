import os

class Config:
    SECRET_KEY = os.urandom(24)  # Generates a random secret key
    UPLOAD_FOLDER = os.path.join(os.getcwd(), 'uploads')
    ALLOWED_EXTENSIONS = {'pdf', 'docx', 'xlsx', 'png', 'jpg', 'jpeg', 'txt'}
    MAX_LENGTH = 32 * 1024 * 1024  # 32MB upload limit 
