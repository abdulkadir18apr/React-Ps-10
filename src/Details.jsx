import { useParams } from "react-router-dom";
import { useMailContext } from "./context/MailContext";
import { MailCard } from "./MailCard";
export const Details = () => {
  const { state } = useMailContext();
  const { id } = useParams();
  const selectedMail = state.mails.find((mail) => mail.mId === id);

  return (
    <div className="details">
      {!selectedMail ? (
        <h1>No Details Found</h1>
      ) : (
        <MailCard mail={selectedMail} />
      )}
    </div>
  );
};
