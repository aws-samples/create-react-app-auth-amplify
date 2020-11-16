const bcrypt = require('bcryptjs');

const Mare = require('../models/mare');
const Notification = require('../models/notification');
const Log = require('../models/log');

const logs = async logIds => {
  try {
    const logs = await Log.find({ _id: { $in: logIds } });
    logs.map(log => {
      return {
        ...log._doc,
        _id: log.id,
        content: log.content,
        creator: mare.bind(this, log.creator)
      };
    });
    return logs;
  } catch (err) {
    throw err;
  }
};

const notifications = async notificationIds => {
  try {
    const notifications = await Notification.find({ _id: { $in: notificationIds } });
    logs.map(notification => {
      return {
        ...notification._doc,
        _id: notification.id,
        content: notification.content,
        contact: notification.contact
      };
    });
    return notifications;
  } catch (err) {
    throw err;
  }
};

const mare = async mareId => {
  try {
    const mare = await Mare.findById(mareId);
    return {
      ...mare._doc,
      _id: mare.id
    };
  } catch (err) {
    throw err;
  }
};

module.exports = {
  logs: async () => {
    try {
      const logs = await Log.find();
      return logs.map(log => {
        return {
          ...log._doc,
          _id: log.id
        };
      });
    } catch (err) {
      throw err;
    }
  },
  createLog: async args => {
    const log = new Log({
      content: args.logInput.content
    });
    let createdLog;
    try {
      const result = await log.save();
      createdLog = {
        ...result._doc,
        _id: result._doc._id
      };
      return createdLog;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createNotification: async args => {
    const notification = new Notification({
      content: args.notificationInput.content,
      contact: args.notificationInput.contact
    });
    let createdNotification;
    try {
      const result = await notification.save();
      createdNotification = {
        ...result._doc,
        _id: result._doc._id
      };

      return createdNotification;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  createMare: async args => {
    try {
      const existingMare = await Mare.findOne({ camera: args.mareInput.camera });
      if (existingMare) {
        throw new Error('Mare exists already.');
      }

      const mare = new Mare({
        name: args.mareInput.name,
        camera: args.mareInput.camera,
        date: args.mareInput.date,
        time: args.mareInput.time,
        stat: args.mareInput.stat,
      });

      const result = await mare.save();

      return { ...result._doc, _id: result.id };
    } catch (err) {
      throw err;
    }
  }
};