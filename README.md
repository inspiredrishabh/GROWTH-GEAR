# Growth Gear Analytics

![Growth Gear Analytics](https://via.placeholder.com/1200x630?text=Growth+Gear+Analytics)

## Project Overview

Growth Gear Analytics is a modern, React-based single-page application (SPA) that demonstrates a Gen AI-powered data analytics tool. The application allows users to enter natural language queries about business data and receive AI-generated insights with visualizations.

## Features

- **Natural Language Query Interface**: Enter questions in plain English to analyze data
- **AI-Powered Query Suggestions**: Get smart suggestions as you type
- **Query History Tracking**: View and reuse your previous queries
- **Data Visualization**: Automatically generated charts based on query results
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **React**: Frontend UI library
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: For state management and side effects
- **ES6+**: Modern JavaScript features

## Project Structure

```
growth-gear/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx           # App header component
│   │   ├── QueryInput.jsx       # Query input with suggestions
│   │   ├── QueryHistory.jsx     # Previous queries display
│   │   ├── ResultsDisplay.jsx   # Analysis results with chart
│   │   └── SimpleChart.jsx      # Data visualization component
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global styles
│   └── main.jsx                 # Entry point
├── index.html                   # HTML template
├── package.json                 # Project dependencies
├── tailwind.config.js           # Tailwind CSS configuration
└── vite.config.js               # Vite configuration
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/growth-gear.git
   cd growth-gear
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## How It Works

1. **User Input**: Enter a natural language query in the input field
2. **AI Processing**: The system analyzes the query (simulated in this demo)
3. **Result Generation**: Relevant data is retrieved and visualized
4. **History Tracking**: Queries are saved for future reference

## Code Architecture

### State Management

The application uses React's built-in useState hook for state management, with the main state variables being:

- `query`: Current user input
- `queryHistory`: Array of previous queries
- `results`: Current analysis results
- `loading`: Boolean indicating if analysis is in progress
- `error`: Any error messages from the analysis process

### Component Hierarchy

```
App
├── Header
├── QueryInput
├── QueryHistory
└── ResultsDisplay
    └── SimpleChart
```

### Data Flow

1. User enters query in QueryInput component
2. App component processes the query
3. Results are passed to ResultsDisplay component
4. Query is added to history in QueryHistory component

## Future Enhancements

- Integration with real NLP backend services
- Multiple visualization types
- User authentication
- Shareable reports
- Advanced filters and query building tools
