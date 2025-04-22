

# SecurityProject - File Virus Scanner
## Output

<p>Login Page:</p>

![image](https://github.com/user-attachments/assets/0f0ca6f5-ddcc-4e09-82b1-32c8a6d3a254)

<P>User Interface for uploading file:</P>

![image](https://github.com/user-attachments/assets/7958e7ca-7646-4a04-b2dd-6171a0dc32c2)

<P>File Scanned result:</P>

![image](https://github.com/user-attachments/assets/e137039c-1463-484a-94cd-41b1f43fa088)

<p>Example of invalid file type being scanned:</p>

![image](https://github.com/user-attachments/assets/8f328601-dffe-4b2e-9cff-b098dc990ec3)

<p>Example of text file being scanned:</p>

![image](https://github.com/user-attachments/assets/862d5efc-26c5-40e7-bd36-69ae314068f6)

<p>Example of file being downloaded: </p>

![image](https://github.com/user-attachments/assets/00df7f60-df4e-46c7-8562-b1c59ae47571)

<p>Example of virus being detected:</p>

![image](https://github.com/user-attachments/assets/6cb54ce8-2ea0-40c0-ae19-bda14f1066b8)


<p>User being timed out:</p>

![image](https://github.com/user-attachments/assets/83792d40-7b5f-48eb-b871-b2e698ae7b45)

<p>User being required to login again after inactivity:</p>

![image](https://github.com/user-attachments/assets/635ab194-21cf-49a8-a61e-73e5cc6f1e2a)

<p>Application requiring multi factor authentication</p>

![image](https://github.com/user-attachments/assets/8c78e386-a761-4e52-86ec-4482ec5f239a)


<p>Error screen when wrong code is entered by the user</p>

![image](https://github.com/user-attachments/assets/e0523bad-16a2-4108-8c42-b469ab2a6bf1)

## How to Run

### 1. Download or Clone the Project

- Download the ZIP folder and extract it  
  **OR**
- Clone the repository using:

```bash
git clone https://github.com/yourusername/securityproject.git
2. Start the App
Open the terminal in your code editor

Run the following command:
python app.py
3. Open the Application
Open your browser and go to:
  http://127.0.0.1:5000/login

4. Upload Test Files
Upload a .txt file containing known patterns or suspicious code
(e.g. eval(, EICAR string, or binary test signatures)

If there is no threat, it will display:
✅ No threats found

If there is a threat, it will display:
❌ Threat Detected: [Threat Name]
'''
### Output

