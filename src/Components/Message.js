import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Message = () => {
  const [messages, setMessages] = useState([]);
  let { partnerId } = useParams();
  useEffect(() => {
    const fetchPartners = async () => {
      const response = await fetch(
        `http://localhost:3000/${partnerId}/get-messages`
      );
      const messagesData = await response.json();
      setMessages(messagesData);
    };
    fetchPartners();
  }, [partnerId]);
  // console.log(messages);
  return (
    <div>
      {messages.map((item) => (
        <Text fontSize={"2xl"} key={item._id}>
          {item.messageBody}
        </Text>
      ))}
    </div>
  );
};

export default Message;
