import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Home,
  About,
  Login,
  HowItWork,
  DonatePage,
  Volunteer,
  Dashboard,
  EditProfile,
  HelpPage,
  ContactPage,
  Notfound,
  RequestPage,
} from "./page";
import { Layout } from "./components";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Notfound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "howitwork",
        element: <HowItWork />,
      },
      {
        path: "donate",
        element: <DonatePage />,
      },
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "request-food",
        element: <RequestPage />,
      },
    ],
  },
]);

const MyRoute = () => {
  return <RouterProvider router={router} />;
};

export default MyRoute;
