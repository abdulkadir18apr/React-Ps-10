import { useMailContext } from "./context/MailContext";
import { MailCard } from "./MailCard";

export const Spam = () => {
  const { state } = useMailContext();
  return (
    <div className="spam">
      {!state.spamMails ? (
        <h1>NO Mails In Spam</h1>
      ) : (
        <ul>
          {state.spamMails.map((mail) => (
            <MailCard mail={mail} />
          ))}
        </ul>
      )}
    </div>
  );
};
