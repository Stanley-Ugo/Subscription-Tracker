import { Router } from 'express';

import { sendReminders } from '../controllers/workflow.controller.js';

//delete after test
import Subscription from '../models/subscription.model.js';
import { sendReminderEmail } from '../utils/send-email.js';

const workflowRouter = Router();

//workflowRouter.post('http://127.0.0.1:5500/api/vi/workflows/subscription/reminder', sendReminders.handler);
workflowRouter.post('/subscription/reminder', sendReminders.handler);

workflowRouter.post('/subscription/reminder/test', async (req, res, next) =>
{
    const subscriptionId = req.body.subscriptionId;

    const subscription = await Subscription.findById(subscriptionId).populate('user', 'name email');

    await sendReminderEmail({
        to: subscription.user.email,
        type: "7 days before reminder",
        subscription: subscription,
    });

    res.send({ title: 'Workflow to send subscription reminders' });
});

export default workflowRouter;