## Table of Contents

* [Description](#description)
* [Usage](#usage)
* [How it works](#how-it-works)
* [Notes](#notes)
* [Issues](#issues)
* [Author](#author)
* [License](#license)

## Description

This is a sample code written in JavaScript to introduce [WebRTC]. It supports Opera, Chrome and Firefox Browser.

In this example, WebSocket is used for exchanging signalling data. Once tradeoff between peers is made, an end-to-end data channel is set up to deliver voice, video and data.

## Usage

Firstly, you need to install NodeJS. See [NodeJS] for more details.

Then, check out the source code

```
git clone https://github.com/deklab/dektalk.git
```

Next, install `express` and `socket.io` using `npm`

```
npm install --save express@4.10.2
npm install --save socket.io
```

You are now ready to run the server.

```
node nodeServerDemo.js
```

## How it works

The normal steps:

* Create a new room
* Get local user media stream and notify signalling server.
* On receiving a request to join room, create offer and send it to the other peer via the signalling server.
* If receiving answer from the other peer, select an ICE candidate and create a peer connection.
* After data channel is up, enable send message buttion.

## Notes

This is an introduction about WebRTC. If you prefer other frameworks, feel free to extend this.

## Issues

You may come across a problem when setting a peer connection in Chrome.

## License

This work is released under a MIT license.

## Author

Truc C. Dao

[NodeJS]: https://nodejs.org
[WebRTC]: https://www.webrtc.org
