import { Router } from "express";

import authorize from "../middlewares/auth.middleware.js";

import { getUsers, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', authorize, getUser);

userRouter.post('/', (req, res, next) =>
{
    res.send({ title: 'CREATE new User' });
});

userRouter.put('/:id', (req, res, next) =>
{
    res.send({ title: 'UPDATE User' });
});

userRouter.delete('/:id', (req, res, next) =>
{
    res.send({ title: 'DELETE User' });
});

export default userRouter;