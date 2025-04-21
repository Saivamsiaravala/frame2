import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Receipts from "./Pages/Receipts";
import Bills from "./Pages/Bills";
import Bank from "./Pages/Bank";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/receipts" index element={<Receipts />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/bank" element={<Bank />} />
    </Route>
  )
);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
