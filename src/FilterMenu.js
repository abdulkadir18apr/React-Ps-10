import { useState } from "react";
import { useMailContext } from "./context/MailContext";

export const FilterMenu = () => {
  const { showUnread, showStarred } = useMailContext();
  return (
    <div className="filter">
      <label htmlFor="unread">
        <input type="checkbox" onChange={() => showUnread()} />
        Show Unread Mails
      </label>
      <label htmlFor="unread">
        <input type="checkbox" onChange={() => showStarred()} />
        Show Starered Mails
      </label>
    </div>
  );
};
