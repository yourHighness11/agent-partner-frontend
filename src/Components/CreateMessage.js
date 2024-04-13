import { Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CreateMessage = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  let { partnerId } = useParams();
  const handleSubmit = async () => {
    try {
      const sendData = await fetch(
        `http://localhost:3000/${partnerId}/create-message`,
        {
          method: "POST",
          body: JSON.stringify({ messageBody: text }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Text>Type your message</Text>
      <Input onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default CreateMessage;
