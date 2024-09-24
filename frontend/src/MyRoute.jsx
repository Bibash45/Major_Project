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
  FeedbackPage,
  ActivatePage,
  ForgotPage,
  ResetPage,
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
        path: "forgot",
        element: <ForgotPage />,

      },
      {
        path: "reset/:token",
        element: <ResetPage />,

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
      {
        path: "/send-feedback",
        element: <FeedbackPage />,
      },
    ],
  },
  {
    path: "/activate/:token",
    element: <ActivatePage />,
  },
]);

const MyRoute = () => {
  return <RouterProvider router={router} />;
};

export default MyRoute;
