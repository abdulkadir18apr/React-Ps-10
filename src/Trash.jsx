import { useMailContext } from "./context/MailContext";
import { MailCard } from "./MailCard";

export const Trash = () => {
  const { state } = useMailContext();
  return (
    <div className="trash">
      {!state.deletedMails ? (
        <h1>No Mails In Trash</h1>
      ) : (
        <ul>
          {state.deletedMails.map((mail) => (
            <MailCard mail={mail} />
          ))}
        </ul>
      )}
    </div>
  );
};
