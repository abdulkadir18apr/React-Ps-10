export const MailReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "unreadMails":
      return {
        ...state,
        unread: !state.unread
      };
    case "starredMails":
      return {
        ...state,
        isStarred: !state.isStarred
      };
    case "deleteMail":
      return {
        deletedMails: [...state.mails.filter(({ mId }) => mId === payload)],
        ...state,
        mails: [...state.mails.filter(({ mId }) => mId !== payload)]
      };
    case "spamMail":
      return {
        ...state,
        spamMails: [...state.mails.filter(({ mId }) => mId === payload)],
        mails: [...state.mails.filter(({ mId }) => mId !== payload)]
      };
    case "toggleRead":
      return {
        ...state,
        mails: [
          ...state.mails.map((mail) =>
            mail.mId === payload
              ? { ...mail, unread: !mail.unread }
              : { ...mail }
          )
        ]
      };
    case "toggleStarred":
      return {
        ...state,
        mails: [
          ...state.mails.map((mail) =>
            mail.mId === payload
              ? { ...mail, isStarred: !mail.isStarred }
              : { ...mail }
          )
        ]
      };

    default:
      return state;
  }
};
