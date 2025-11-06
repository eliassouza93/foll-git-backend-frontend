import axios from "axios";
import { useEffect, useState } from "react";
import { List } from "./List";
import { CardWolrd, PageTitle } from "./style";

export function Card() {
  const [user, setUser] = useState([]);
  const url = "http://localhost:3000/";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUser(res.data.seguidores);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <CardWolrd>
      <PageTitle>Lista de Usuários</PageTitle>

      {user.map((us, index) => (
        <List key={index} userProps={us} />
      ))}
    </CardWolrd>
  );
}
