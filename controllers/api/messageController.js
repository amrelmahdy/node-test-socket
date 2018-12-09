const Message = require("./../../models/message");


module.exports = {

    list: async (req, res, next) => {
        try{
            const messages = await Message.find({});
            res.json(messages)

        } catch (error) {
            next(error)
        }
    },

    save: async (req, res, next) => {
        try {
            const msg = new Message(req.body);
            Message.saveMessage(msg, () => {
                req.app.io.emit("message", msg);
                res.json(msg);
            });
        } catch (error) {
            next(error);
        }
    }
}