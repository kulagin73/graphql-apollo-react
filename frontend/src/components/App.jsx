import React from "react";
import { Users } from "./Users.jsx";
import { CreateUser } from "./CreateUser.jsx";
import { User } from "./User.jsx";
import { Root } from "./Root.jsx";
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: '/users',
		element: <Users />,
	},
   {
		path: '/user/:id',
		element: <User />,
	},
   {
		path: '/adduser',
		element: <CreateUser />,
	},
]);

export const App = () => {
   return (
      <RouterProvider router={router}  />
   )
}