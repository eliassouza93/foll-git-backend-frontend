declare module "gender-detection" {
  export function detect(
    name: string
  ): "male" | "female" | "mostly_male" | "mostly_female" | "andy" | "unknown";
}
