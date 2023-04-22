import { createContext, useContext, useReducer } from "react";

import { mailsDb } from "../mailsDb";
import { MailReducer } from "./MailReducer";
export const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MailReducer, {
    mails: [...mailsDb],
    unread: false,
    isStarred: false
  });

  let filteredMails = state.mails;
  if (state.unread) {
    filteredMails = [
      ...filteredMails.filter((mail) => (mail.unread ? true : false))
    ];
  }
  if (state.isStarred) {
    filteredMails = [
      ...filteredMails.filter((mail) => (mail.isStarred ? true : false))
    ];
  }

  const showUnread = () => {
    dispatch({ type: "unreadMails" });
  };
  const showStarred = () => {
    dispatch({ type: "starredMails" });
  };
  const deleteMail = (mId) => {
    dispatch({ type: "deleteMail", payload: mId });
  };
  const reportSpam = (mId) => {
    dispatch({ type: "spamMail", payload: mId });
  };
  const markRead = (mId) => {
    dispatch({ type: "toggleRead", payload: mId });
  };
  const markStarred = (mId) => {
    dispatch({ type: "toggleStarred", payload: mId });
  };

  return (
    <MailContext.Provider
      value={{
        state,
        filteredMails,
        showStarred,
        showUnread,
        deleteMail,
        reportSpam,
        markRead,
        markStarred
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMailContext = () => useContext(MailContext);
