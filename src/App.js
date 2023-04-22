import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./Navbar";
import { InboxCompnent } from "./InboxCompnent";
import { FilterMenu } from "./FilterMenu";
import { Trash } from "./Trash";
import { Spam } from "./Spam";
import { Details } from "./Details";
import { useMailContext } from "./context/MailContext";

export default function App() {
  const {
    state: { mails }
  } = useMailContext();
  return (
    <div className="App">
      <h1>Abdul's Inbox</h1>
      <FilterMenu />
      <h1>
        Unread-Mails:
        {mails.reduce((acc, { unread }) => (unread ? acc + 1 : acc), 0)}
      </h1>
      <div className="page">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<InboxCompnent />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
