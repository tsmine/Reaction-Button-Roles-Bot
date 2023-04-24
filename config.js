module.exports = {
    // ...
    env: {
        token: "MTEwMDEwNDUzOTEyMzc1NzEzNg.G5rqwL.dAE8kge1F17dd2mzjz9bMbkB5Gl3zxUQBv1_AY", // your bot token
        channel: "1081291226579472498", // channel id from the channel the embed should get send to
        message: "hii hii hii roles", // message id from the message the system has send into the channel above
    },
    
    status: {
        type: "LISTENING", // your status of the bot (WATCHING, LISTENING, PLAYING, STREAMING)
        activity: "to marina", // your activity of the bot
    },

    roles: [
        role = {
            id: "1081291330698879196", //id of the role
            emoji: "⚫", // emoji for the role example: ⚫
        },
        
    ],
}
