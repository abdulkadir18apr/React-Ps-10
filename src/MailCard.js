import { useMailContext } from "./context/MailContext";
import { Link } from "react-router-dom";
export const MailCard = ({ mail }) => {
  const { mId, unread, isStarred, subject, content } = mail;
  const { deleteMail, reportSpam, markRead, markStarred } = useMailContext();
  return (
    <li
      className="mail"
      key={mId}
      style={{ backgroundColor: !unread ? "#d1d5db" : "" }}
    >
      <div className="mail__subject">
        <h3>Subject:{subject}</h3>
        <button onClick={() => markStarred(mId)}>
          <i className={`fa-${isStarred ? "solid" : "regular"} fa-star`}></i>
        </button>
      </div>
      <div className="mail__content">
        <p>{content}</p>
      </div>
      <div className="mail__buttons">
        <div>
          <Link to={`details/${mId}`}>View Details</Link>
        </div>
        <div className="mail__rightBtn">
          <button onClick={() => deleteMail(mId)}>Delete</button>
          <button onClick={() => markRead(mId)}>
            Mark As {unread ? "Read" : "Un-Read"}
          </button>
          <button onClick={() => reportSpam(mId)}>Report Spam</button>
        </div>
      </div>
    </li>
  );
};
