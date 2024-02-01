import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  console.log(id);

  const phones = useLoaderData();
  console.log(phones);

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  console.log(phone);

  return (
    <div>
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
