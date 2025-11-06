import axios from "axios";
import { useEffect, useState } from "react";
import type { ListaProps } from "./types";
import {
  CardContainer,
  Avatar,
  UserName,
  UserInfo,
  Link,
  LinksGroup,
  Label,
  Badge,
} from "./styles";

interface ProfileData {
  followers?: number;
  following?: number;
}

export function List({ userProps }: ListaProps) {
  const [profileData, setProfileData] = useState<ProfileData>({});

  useEffect(() => {
    const apiUrl =
      userProps.url ||
      (userProps.login
        ? `https://api.github.com/users/${userProps.login}`
        : null);

    if (apiUrl) {
      axios
        .get(apiUrl)
        .then((res) => {
          if (
            typeof res.data.followers === "number" &&
            typeof res.data.following === "number"
          ) {
            setProfileData({
              followers: res.data.followers,
              following: res.data.following,
            });
          }
        })
        .catch((err) => {
          // Sem console.error
        });
    }
  }, [userProps.url, userProps.login]);

  const { followers, following } = profileData;

  return (
    <CardContainer>
      <Avatar src={userProps.avatar_url} alt={userProps.login} />
      <UserName>{userProps.login}</UserName>

      <UserInfo>
        <Label>ID:</Label> {userProps.id}
      </UserInfo>
      <UserInfo>
        <Label>Node ID:</Label> {userProps.node_id}
      </UserInfo>
      <UserInfo>
        <Label>Tipo:</Label> {userProps.type}
        {userProps.type && <Badge variant="user">{userProps.type}</Badge>}
      </UserInfo>
      <UserInfo>
        <Label>Site Admin:</Label>{" "}
        {userProps.site_admin ? <Badge variant="admin">Sim</Badge> : "Não"}
      </UserInfo>
      <UserInfo>
        <Label>View Type:</Label> {userProps.user_view_type}
        {userProps.user_view_type && (
          <Badge variant="public">{userProps.user_view_type}</Badge>
        )}
      </UserInfo>

      {followers !== undefined && following !== undefined && (
        <UserInfo>
          <Label>Seguidores:</Label> {followers}
          {" | "}
          <Label>Seguindo:</Label> {following}
        </UserInfo>
      )}

      <LinksGroup>
        <Link
          href={userProps.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Perfil GitHub
        </Link>
      </LinksGroup>
    </CardContainer>
  );
}
