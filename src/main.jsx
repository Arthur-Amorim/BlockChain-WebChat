import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import Navigator from "./components/Navigator.jsx"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage.jsx"
import Chats from "./pages/Chats.jsx"

const RootLayout = () => (
	<div className="h-screen">
		{/* <Navigator /> */}
		<Outlet />
	</div>
)

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				path: "/",
				element: <App />,
			},
			{
				path: "/chats",
				element: <Chats />,
			},
		],
	},
])

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
