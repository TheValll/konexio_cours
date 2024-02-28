# Import the necessary libraries
import streamlit as st
import pandas as pd

# Run the app by typing the following command in the terminal
# streamlit run airport_pickup.py

# Add a title to the app
st.title('Airport pickups in the world')

# Load the data
JSON_FILE_PATH = 'new_data.json'

@st.cache_data

def load_data():
    data = pd.read_json(JSON_FILE_PATH)
    data.columns = ['airport name', 'country', 'latitude', 'longitude']
    return data

# Create a text element and let the reader know the data is loading.
data_load_state = st.text('Loading data...')

# Load data into the dataframe.
data = load_data()

# Notify the reader that the data was successfully loaded.
data_load_state.text('Loading data...done!')

# Create a subheader and display the data
st.subheader('Airport data')
st.write(data)

#Convert coordinates to a float
data['latitude'] = data['latitude'].astype(float)
data['longitude'] = data['longitude'].astype(float)

# Plot data on a map
st.subheader('Map of all airports')
st.map(data[['latitude', 'longitude']])

# Create a histogram of the data
st.subheader('Number of pickups by country')

hist_values = data['country'].value_counts()
st.bar_chart(hist_values)

# Use a text_input to get the keywords to filter the dataframe
text_search = st.text_input("Search country airports", value="").capitalize()

# Filter the data and display it on a map
if text_search != "":
    filtered_data = data[data['country'].str.contains(text_search, case=False)]
    if text_search not in data['country'].values:
        st.write(f'There are no airports in {text_search}')
    else:
        number_of_airports = len(filtered_data)
        st.write(f'There are {number_of_airports} airports in {text_search}')
        st.write(filtered_data)
        st.map(filtered_data[['latitude', 'longitude']])
else:
    st.write('Please enter a country to search for airports')