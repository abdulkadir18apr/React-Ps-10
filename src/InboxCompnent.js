import { useMailContext } from "./context/MailContext";
import { MailCard } from "./MailCard";

export const InboxCompnent = () => {
  const { filteredMails } = useMailContext();

  return (
    <div className="mailContainer">
      <ul>
        {filteredMails.map((mail) => (
          <MailCard mail={mail} />
        ))}
      </ul>
    </div>
  );
};
