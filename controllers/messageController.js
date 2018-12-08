var Message = require("./../models/message");

module.exports = {
    getAllMessages: async (req, res, next) => {
        try {
            const messages = await Message.find({});
            res.render("index", {
                messages: messages,
            });
        } catch (error) {
            next(error);
        }
    }
}