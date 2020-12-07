  const TwitchJS = require('twitch-js')

  const client = new TwitchJS.client({
    channels: ['#dombnexen'],
    identity: {
      username: 'dombnexen',
      password: 'oauth:n8lxszmmcl484lmm2a8s2exelj3ayr'
    }
  })

  let loopInterval
  client.on('chat', (channel, userstate, message, self) => {
    console.log(`Message "${message}" received from ${userstate['display-name']}`)
    if (self) return;
    const msg = message.split(' ')
    if (msg[0].toLowerCase() === '$loop') {

      if (loopInterval) { // Check if set
        console.log('stop $loop')
        clearInterval(loopInterval) // delete Timer
        loopInterval = false
      } else {
        console.log('start $loop')
        loopInterval = setInterval(function () {
          client.say(channel, 'Test message') // client.say(channel, msg[1]) // ?
        }, 30000) // 60000ms = 60s = 1min
      }

    }
  })

  client.connect()
