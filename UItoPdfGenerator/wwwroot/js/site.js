const connection = new signalR.HubConnectionBuilder()
    .withUrl("/myHub")
    .build();

connection.on("ReceiveMessage", (message) => {
    // Execute your JavaScript function based on the message received
    console.log(message);
});

connection.start()
    .then(() => {
        console.log("SignalR Connected.");
    })
    .catch(err => console.error("SignalR Connection Error: ", err));
