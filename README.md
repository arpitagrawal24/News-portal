# News Portal

A React-based news portal application that allows users to browse news articles, filter by category, search by keywords, and save favorite articles. The application uses Redux for state management and fetches data from the NewsAPI.

## Features

- **Browse News Articles:** View the latest news articles.
- **Filter by Category:** Filter articles by different categories.
- **Search:** Search for articles by keywords.
- **Favorites:** Save favorite articles to local storage.

## Demo

Watch the demo video

https://github.com/arpitagrawal24/News-portal/assets/78686299/5e117b75-3b50-4ac7-8bea-34e5915a5a6d



Click the thumbnail above to watch the demo video or [click here](src/assets/News%20Portal.mp4) to view it directly.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/arpitagrawal24/News-portal
    cd News-portal
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your NewsAPI key:
    ```env
    REACT_APP_NEWS_API_KEY=your_api_key_here
    ```

4. Start the development server:
    ```sh
    npm start
    ```

The application will be available at `http://localhost:5173`.

## Usage

### Home Page

- The home page displays the latest news articles.
- Use the category filter to filter articles by category.
- Use the search bar to search for articles by keywords.

### Favorites

- To add an article to your favorites, click the "Add to Favorites" button on the article card.
- View your favorite articles by navigating to the `/favorites` route.

## Project Structure

- **components/**: Contains all the React components.
- **redux/**: Contains the Redux slices and store configuration.
- **services/**: Contains the API service functions.
- **pages/**: Contains the main pages of the application.
- **App.js**: Main application component with routing setup.

## API

The application uses the [NewsAPI](https://newsapi.org/) to fetch news articles. Make sure to get your API key from NewsAPI and add it to the `.env` file as shown in the installation steps.

## Acknowledgements

- [NewsAPI](https://newsapi.org/) for providing the news data.
