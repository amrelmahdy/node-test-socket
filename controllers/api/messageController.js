const Message = require("./../../models/message");


module.exports = {
    save: async (req, res, next) => {
        try {
            const msg = new Message(req.body);
            Message.saveMessage(msg, () => {
                // handle connection event
                io.sockets.emit("message", {
                    'welcome': 'a new client added',
                });
                res.json(msg);
            });

        } catch (error) {
            next(error);
        }
    }
}