# YouEat

This project is an interactive front-end website built using React, featuring a user-friendly interface and seamless integration with the Swiggy API. The website displays real-time restaurant data, allowing users to search for and filter restaurants based on their preferences. 

## Features

- **Dynamic Data Display:** Real-time restaurant listings fetched from the Swiggy API.
- **Interactive UI:** User-friendly interface with responsive design elements.
- **Search Functionality:** Allows users to search for restaurants by name.
- **Filter Functionality:** Users can filter restaurants by rating, displaying only the top-rated ones.
- **Shimmer Effect:** Loading shimmer effect displayed while fetching data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamanrajput/You-Eat.git
   ```

2. Navigate to the project directory:

   ```bash
   cd You-Eat
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Usage

- On the homepage, you will see a list of restaurants fetched from the Swiggy API.
- Use the search box to find restaurants by name.
- Click the "Top Rated Restaurant" button to filter and display only restaurants with an average rating above 4.5.
- The data will automatically update based on user inputs, providing a seamless browsing experience.

## Project Structure

- **`Body.js`**: Contains the main component that handles data fetching, searching, and filtering logic.
- **`RestaurantCard.js`**: A component that displays individual restaurant details.
- **`Shimmer.js`**: A loading component displayed while data is being fetched.

## API Integration

The website integrates with the Swiggy API to fetch restaurant data based on the user's location. The API provides detailed information about restaurants, including their name, average rating, and other relevant details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
