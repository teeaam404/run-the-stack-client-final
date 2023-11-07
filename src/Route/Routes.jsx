import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Home from "../Pages/Home/Home/Home";
import Question from "../Pages/Shared/Question/Question";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AskQuestion from "../Pages/AskQuestion/AskQuestion";
import AddAnswer from "../Pages/Shared/Answer/AddAnswer";
import QuestionAnswer from "../Pages/Shared/Answer/QuestionAnswer";
import MyQuestion from "../Pages/Shared/MyQuestion/MyQuestion";
import ContactUs from "../Pages/Shared/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/Shared/Dashboard/UserProfile/UserProfile";
import EditProfile from "../Pages/Shared/Dashboard/EditProfile/EditProfile";
import AllUsers from "../Pages/Shared/AllUsers/AllUsers";
import MyProfile from "../Pages/Shared/MyProfile/MyProfile";
import DashBoard from "../Layout/Dashboard";
import MySelectedClass from "../Pages/DashBoard/MySelectedClass/MySelectedClass";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import MyEnrolledClass from "../Pages/DashBoard/MyEnrolledClass/MyEnrolledClass";
import ManageUsers from "../Pages/DashBoard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/DashBoard/AddClass/AddClass";
import MyClasses from "../Pages/DashBoard/MyClasses/MyClasses";
import ManageClasses from "../Pages/DashBoard/ManageClasses/ManageClasses";
import FourOfour from "../Pages/Shared/FourOfour/FourOfour";
import Courses from "../Pages/Shared/Courses/Courses";
import CourseDetails from "../Pages/Shared/CourseDetails/CourseDetails";
import Blog from "../Pages/Shared/Blog/Blog";
import SslPayment from "../Pages/DashBoard/Payment/SslPayment";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFailed from "../Pages/PaymentFailed/PaymentFailed";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/questions",
        element: <Question></Question>,
        children: [
          {
            path: "myQuestion",
            element: (
              <PrivateRoute>
                <MyQuestion></MyQuestion>
              </PrivateRoute>
            ),
          },
        ],
      },

      {
        path: "/questionAnswer/:id",
        element: <QuestionAnswer />,
      },
      {
        path: "/addAnswer/:id",
        element: <PrivateRoute><AddAnswer /></PrivateRoute>,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "courseDetails/:id",
        element: <CourseDetails />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "askquestion",
        element: <AskQuestion></AskQuestion>,
      },
      {
        path: "contactUs",
        element: <ContactUs />,
      },
      {
        path: "userProfile/:email",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "editProfile",
        element: <EditProfile />,
      },
      {
        path: "allUsers",
        element: <AllUsers />,
      },
      {
        path: 'payment/success/:tranId',
        element: <PaymentSuccess />
      },
      {
        path: 'payment/fail/:tranId',
        element: <PaymentFailed />
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: 'sslpayment/:id',
        element: <SslPayment />
      },
      {
        path: "PaymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
  {
    path: "myProfile",
    element: (
      <PrivateRoute>
        <MyProfile></MyProfile>
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "MySelectedClass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "MyEnrolledClass",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },

      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <FourOfour></FourOfour>,
  },
]);
