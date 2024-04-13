import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  let { agentId } = useParams();
  //   console.log(agentId);
  useEffect(() => {
    const fetchAgents = async () => {
      const response = await fetch(
        `http://localhost:3000/${agentId}/get-partners`
      );
      const partnersData = await response.json();
      setPartners(partnersData);
    };
    fetchAgents();
  }, [agentId]);
  console.log(partners);
  return (
    <div>
      {partners.map((item) => (
        <Link to={`/${item._id}/get-messages`}>
          <Text key={item._id}>{item.name}</Text>
        </Link>
      ))}
    </div>
  );
};

export default Partners;
