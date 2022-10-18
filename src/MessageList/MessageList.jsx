export const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, idx) => (
        <li class="MassageTxt" key={idx}>
          {message.author}: {message.value}
        </li>
      ))}
    </ul>
  );
};
