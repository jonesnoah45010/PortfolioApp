
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Install necessary packages
RUN apt-get update && apt-get install -y mime-support

# Install Python dependencies
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the application files
COPY . .

# Add MIME types for WebAssembly
RUN echo "application/wasm wasm" >> /etc/mime.types

# Set the command to run the Flask app
CMD ["python", "main.py"]


