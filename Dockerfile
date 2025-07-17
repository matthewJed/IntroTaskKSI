FROM python:3.13-alpine

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the server code
COPY ./backend .

# Command to run the application
CMD ["uvicorn", "main:api", "--host", "0.0.0.0", "--port", "8080"]