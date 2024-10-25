import streamlit as st
import requests
import pandas as pd
import matplotlib.pyplot as plt
import time

# Streamlit app to display sensor data
st.title("Sensor Data Visualization")

# Function to fetch data from the Node.js API
def fetch_sensor_data():
    try:
        response = requests.get('http://localhost:3003/api/sensor-data')
        if response.status_code == 200:
            return response.json()
        else:
            st.error("Failed to fetch data")
            return []
    except Exception as e:
        st.error(f"Error fetching data: {e}")
        return []

# Fetch and prepare data
data = fetch_sensor_data()
if data:
    # Convert the data to a pandas DataFrame for easier manipulation
    df = pd.DataFrame(data)
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    df['state_numeric'] = df['state'].apply(lambda x: 1 if x == 'OPEN' else 0)

    # Display raw data in a table
    st.write("### Raw Sensor Data")
    st.write(df)

    # Plot sensor data over time
    st.write("### Sensor States Over Time")
    fig, ax = plt.subplots()

    for sensor_index in df['sensor'].unique():
        sensor_df = df[df['sensor'] == sensor_index]
        ax.plot(sensor_df['timestamp'], sensor_df['state_numeric'], label=f'Sensor {sensor_index}')

    ax.set_xlabel('Timestamp')
    ax.set_ylabel('State (1 = OPEN, 0 = CLOSE)')
    ax.legend(loc='upper right')
    st.pyplot(fig)
else:
    st.warning("No data to display yet.")