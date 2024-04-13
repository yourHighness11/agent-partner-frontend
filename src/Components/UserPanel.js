import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserPanel = () => {
  const navigate = useNavigate();
  const [agents, setAgents] = useState([]);
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    const fetchAgents = async () => {
      const response = await fetch("http://localhost:3000/get-agents");
      const agentsData = await response.json();
      setAgents(agentsData);
    };
    const fetchPartners = async () => {
      const response = await fetch(`http://localhost:3000/get-partners`);
      const data = await response.json();
      setPartners(data);
    };
    fetchPartners();
    fetchAgents();
  }, []);
  const [value, setValue] = useState("1");
  const [allchecked, setAllChecked] = useState([]);
  const handleClick = async (e) => {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  };

  const handleSubmit = async () => {
    const agentId = value;
    try {
      const sendData = await fetch(
        `http://localhost:3000/${value}/add-partner`,
        {
          method: "POST",
          body: JSON.stringify({ agentId, partners: allchecked }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate('/')
      console.log(await sendData.json());
    } catch (error) {
      console.log(error);
    }
  };
  console.log(value);
  console.log(allchecked);
  return (
    <div>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="row">
          {agents.map((item) => (
            <Radio value={item._id} key={item._id}>
              {item.name}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Stack spacing={5} direction="row">
        {partners.map((item) => (
          <Checkbox
            value={item._id}
            colorScheme="red"
            key={item._id}
            onChange={handleClick}
          >
            {item.name}
          </Checkbox>
        ))}
      </Stack>
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default UserPanel;
