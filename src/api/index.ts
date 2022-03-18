const socket = new WebSocket('ws://localhost:8080/room');

const connect = (): void => {
	console.log('Attempting connection...');
	socket.onopen = () => {
		console.log('Successfully connected');
	};
	socket.onmessage = (message) => {
		console.log(message);
	};
	socket.onclose = (event) => {
		console.log('Socket Closed Connection: ', event);
	};
	socket.onerror = (error) => {
		console.log('Socket Error: ', error);
	};
};

const sendMessage = (message: string): void => {
	console.log('sending message: ', message);
	socket.send(message);
};

export { connect, sendMessage };
