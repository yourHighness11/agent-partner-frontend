import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    const fetchAgents = async () => {
      const response = await fetch("http://localhost:3000/get-agents");
      const agentsData = await response.json();
      setAgents(agentsData);
    };
    fetchAgents();
  }, []);

  return (
    <div>
      {agents.map((item) => (
        <Link to={`/${item._id}`}>
          <Text fontSize={"3xl"} key={item._id}>
            {item.name}
          </Text>
        </Link>
      ))}
    </div>
  );
};

export default Home;
