# Average Calculator Microservice

This microservice provides functionality to calculate the average of a window of numbers obtained from a third-party server. It exposes a REST API that accepts qualified number IDs and responds with the average of the stored numbers.

## Features

- Fetches numbers from a third-party server based on qualified number IDs.
- Stores unique numbers and maintains a window of specified size.
- Calculates the average of numbers in the window.
- Responds to requests with the previous and current state of the window along with the average.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/akash6565/RA2111003010941
```

2. Navigate to the project directory:

```bash
cd RA2111003010941
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The server will start running on `http://localhost:3000` by default.

## Usage

### Fetching Numbers

Send a GET request to `/numbers/:id` where `:id` is the qualified number ID (e.g., 'e' for even numbers). The server will fetch numbers from the third-party server based on the provided ID, update the stored numbers, calculate the average, and respond with the previous and current state of the window and the average.

Example:

```bash
curl http://localhost:3000/numbers/e
```

### Configuration

You can configure the window size in the `index.js` file by updating the `windowSize` variable.

## Testing

To run tests, use the following command:

```bash
npm test
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
