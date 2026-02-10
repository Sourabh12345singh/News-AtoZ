# News AtoZ - React News Application

A modern React-based news application that displays the latest headlines from various categories using the NewsAPI.

## Features

- 📰 Latest news from multiple categories (General, Business, Entertainment, Health, Science, Sports, Technology)
- 🔄 Infinite scroll for seamless browsing
- 📱 Responsive design with Bootstrap
- 🎨 Clean and modern UI
- ⚡ Fast loading with progress bar

## Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **NewsAPI Key** (Free - Get it from [newsapi.org](https://newsapi.org/register))

## Installation & Setup

1. **Clone the repository** (if not already done):

   ```bash
   git clone https://github.com/Sourabh12345singh/News-AtoZ.git
   cd News-AtoZ
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Get your NewsAPI Key**:
   - Visit [https://newsapi.org/register](https://newsapi.org/register)
   - Sign up for a free account
   - Copy your API key

4. **Configure environment variables**:
   - Open the `.env` file in the root directory
   - Replace `your_api_key_here` with your actual NewsAPI key:
     ```
     REACT_APP_NEWS_API=your_actual_api_key_here
     ```

5. **Start the development server**:

   ```bash
   npm start
   ```

6. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

## API Requirements

### NewsAPI

This application requires a **NewsAPI key** to fetch news articles.

- **Service**: [NewsAPI.org](https://newsapi.org/)
- **Cost**: Free tier available (100 requests/day for development)
- **Endpoint Used**: `https://newsapi.org/v2/top-headlines`
- **Parameters**:
  - `country`: US news
  - `category`: general, business, entertainment, health, science, sports, technology
  - `apiKey`: Your API key
  - `page`: Pagination
  - `pageSize`: 15 articles per request

### Free Tier Limitations

- 100 requests per day
- Development use only
- Latest headlines only

For production use, consider upgrading to a paid plan.

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

```
News-AtoZ/
├── public/
│   ├── index.html          # Main HTML file
│   └── ...
├── src/
│   ├── components/
│   │   ├── Main.js         # Main component with news fetching logic
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── Newspart.js     # Individual news card component
│   │   └── Spinner.js      # Loading spinner
│   ├── App.js              # Main App component with routing
│   ├── App.css             # App styles
│   ├── index.js            # Entry point
│   └── ...
├── .env                    # Environment variables (API key)
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Technologies Used

- **React** (v19.0.0)
- **React Router** (v7.1.1) - Client-side routing
- **Bootstrap** (v5.3.3) - UI styling
- **NewsAPI** - News data source
- **react-infinite-scroll-component** - Infinite scrolling
- **react-top-loading-bar** - Loading progress indicator

## Troubleshooting

### Issue: "API key is missing" or no articles displayed

**Solution**: Make sure you've added your NewsAPI key to the `.env` file and restarted the development server.

### Issue: "Too many requests" error

**Solution**: You've exceeded the free tier limit (100 requests/day). Wait until the next day or upgrade your NewsAPI plan.

### Issue: Cannot find module errors

**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again.

### Issue: Port 3000 is already in use

**Solution**: Either stop the process using port 3000 or run the app on a different port:

```bash
PORT=3001 npm start
```

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.

## Author

Sourabh Singh

## Acknowledgments

- News data provided by [NewsAPI](https://newsapi.org/)
- Built with [Create React App](https://create-react-app.dev/)
