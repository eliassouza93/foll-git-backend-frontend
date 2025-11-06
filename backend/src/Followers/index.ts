import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const USER = process.env.GITHUB_USER;
const TOKEN = process.env.GITHUB_TOKEN;
const PAGE = process.env.GITHUB_PAGE || 1;
const PER_PAGE = process.env.GITHUB_PER_PAGE || 100;

export async function getFollowers() {
  const { data: followers } = await axios.get(
    `https://api.github.com/users/${USER}/followers?page=${PAGE}&per_page=${PER_PAGE}`,
    {
      headers: {
        Authorization: `token ${TOKEN}`,
        "User-Agent": "GitHub Gender Filter",
      },
    }
  );

  // const follAll = followers.filter(
  //   (f: any) => detect(f.login.split(/[-_]/)[0]) === "female"
  // );

  return { seguidores: followers };
  // retorna homem ou mulher
  //   return {
  //     totalSeguidores: followers.length,
  //     totalMulheres: mulheres.length,
  //     mulheres: mulheres.map((m: any) => m.login),
  //   };
}
