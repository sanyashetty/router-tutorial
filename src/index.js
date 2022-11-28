import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses"; // import expenses
import Expense from "./routes/expense";
import Invoices from "./routes/invoices"; // import invoices
import Invoice from "./routes/invoice"; // import invoice

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p class="message">Select an expense</p>
              </main>
            }
          />
          <Route path=":expenseId" element={<Expense />} />
        </Route>
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p class="message">Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p class="message">Page not available!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
