# Arduino Backend - Node.js Server for Data Visualization with Streamlit Integration

This project is a Node.js server designed to extract and display sensor data fetched from a Streamlit app. The server receives real-time data from the Streamlit app's REST API, processes it, and visualizes it on a web page for easy analysis. 

This project was created as part of an IoT-based **Medical Reminder System**, where an IR sensor detects when medication is taken, triggering an alert during specified time intervals. The backend system logs sensor data, making it accessible and visual for monitoring purposes.

## Features

- **Data Fetching**: Connects to a Streamlit app API to retrieve sensor data.
- **Graph Visualization**: Displays the data as a dynamic graph on a webpage.
- **Real-Time Updates**: Fetches and updates data periodically.
- **Simple REST API**: Integrates seamlessly with the Streamlit app.

## Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **Streamlit App**: The Streamlit app must be running and configured to provide sensor data.
- **Dependencies**: Install all necessary Node.js packages.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/arduino-backend.git
cd arduino-backend
```
DEMO WOrkING 
# Server started and fetching data 
![Screenshot 2024-10-26 015609](https://github.com/user-attachments/assets/cfb62804-4728-4abe-a988-988b1239bf58)

# Streamlit app taking data from nodejs server & plotting graph
![Screenshot 2024-10-26 015815](https://github.com/user-attachments/assets/9318ea67-05f8-4111-9e34-df799eccbee8)
![Screenshot 2024-10-26 015901](https://github.com/user-attachments/assets/d4e8efca-450a-4970-bd2f-c0edb4e88d17)
![Screenshot 2024-10-26 015847](https://github.com/user-attachments/assets/8277edfe-a8c0-467d-8096-a520e7f88d59)

