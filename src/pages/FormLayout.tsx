import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Header from "../components/Header";
import FormWithHooksState from "./FormWithHooksState";
const Form1  =  lazy(() => import("./Form1"));
const Form2  =  lazy(() => import("./Form2"));
const Form3  =  lazy(() => import("./Form3"));


const FormOutLet = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const FormLayout = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <FormOutLet />,
      children: [
        { index: true, element: <FormWithHooksState /> },
        { path: "form1", element: <Suspense fallback={<h1>Loading</h1>}><Form1 /></Suspense>},
        { path: "form2", element: <Suspense fallback={<h1>Loading</h1>}><Form2 /></Suspense>},
        { path: "form3", element: <Suspense fallback={<h1>Loading</h1>}><Form3 /></Suspense>},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default FormLayout;
