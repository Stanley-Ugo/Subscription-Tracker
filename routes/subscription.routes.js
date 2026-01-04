import { Router } from 'express';

import authorize from '../middlewares/auth.middleware.js';

import { createSubscription, getSubscriptions } from '../controllers/subscription.controller.js';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) =>
{
    res.send({ title: 'GET all Subscriptions' });
});

subscriptionRouter.get('/:id', authorize, getSubscriptions);

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) =>
{
    res.send({ title: 'UPDATE Subscription' });
});

subscriptionRouter.delete('/:id', (req, res) =>
{
    res.send({ title: 'DELETE Subscription' });
});

subscriptionRouter.get('/user/:id', (req, res) =>
{
    res.send({ title: 'GET all user Subscriptions' });
});

subscriptionRouter.put('/:id/cancel', (req, res) =>
{
    res.send({ title: 'Cancel Subscription' });
});

subscriptionRouter.get('/upcoming-renewwals', (req, res) =>
{
    res.send({ title: 'GET upcoming renewals' });
});

export default subscriptionRouter;