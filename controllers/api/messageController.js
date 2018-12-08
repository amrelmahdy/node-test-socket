const Message = require("./../../models/message");

module.exports = {
    save: async (req, res, next) => {
        try {
           const msg = new Message(req.body);
            Message.saveMessage(msg, () => {
                res.json(msg);
            })

           /* msg.saveMessage(message, () => {
               console.log("message saved");
           })*/
        } catch (error) {
            next(error);
        }
    }
}