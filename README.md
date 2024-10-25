# Arduino Backend - Node.js Server for Data Visualization with Streamlit Integration

This project is a Node.js server designed to extract and display sensor data fetched from a Streamlit app. The server receives real-time data from the Streamlit app's REST API, processes it, and visualizes it on a web page for easy analysis.

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
