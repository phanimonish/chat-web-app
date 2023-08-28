import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "30c61cd1-2a60-4b5f-8ee9-6ec8ecbd13c7",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};
export default ChatsPage;
