import styled from "styled-components";

const colors = {
  background: "#0d1117",
  card: "#161b22",
  border: "#30363d",
  textPrimary: "#c9d1d9",
  textSecondary: "#8b949e",
  link: "#58a6ff",
  adminBadge: "#cf222e",
  userBadge: "#238636",
  publicBadge: "#39c5bb",
};

interface BadgeProps {
  variant: "admin" | "user" | "public";
}

 

export const CardContainer = styled.div`
  background-color: ${colors.card};
  color: ${colors.textPrimary};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  padding: 25px;
  width: 360px;
  max-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid ${colors.link};
  display: block;
  margin: 0 auto 15px auto;
  box-shadow: 0 0 0 5px ${colors.card};
`;

export const UserName = styled.h2`
  font-weight: 600;
  font-size: 1.7rem;
  text-align: center;
  color: ${colors.link};
  margin-bottom: 12px;
`;

export const UserInfo = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 5px 0;
  color: ${colors.textSecondary};
  text-align: left;
  padding: 0 5px;
`;

export const Label = styled.span`
  color: ${colors.textPrimary};
  font-weight: 500;
  margin-right: 6px;
  font-size: 0.9rem;
`;

export const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  margin-left: 6px;

  background-color: ${({ variant }) =>
    variant === "admin"
      ? colors.adminBadge
      : variant === "user"
      ? colors.userBadge
      : colors.publicBadge};
`;

export const LinksGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 14px;
  padding-top: 10px;
  border-top: 1px dashed ${colors.border};
`;

export const Link = styled.a`
  color: ${colors.link};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #79b8ff;
    text-decoration: underline;
  }
`;

export const UrlSection = styled.div`
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${colors.border};
`;

export const UrlItem = styled.p`
  font-size: 0.8rem;
  margin: 8px 0;
  color: ${colors.textSecondary};
  word-break: break-all;

  & strong {
    color: ${colors.textPrimary};
    font-weight: 500;
  }
`;

export const UrlLink = styled.a`
  color: ${colors.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
