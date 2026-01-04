import { Router } from 'express';

import { sendReminders } from '../controllers/workflow.controller.js';

const workflowRouter = Router();

//workflowRouter.post('http://127.0.0.1:5500/api/vi/workflows/subscription/reminder', sendReminders.handler);
workflowRouter.post('/subscription/reminder', sendReminders.handler);

export default workflowRouter;