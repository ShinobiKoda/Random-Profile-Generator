import { Profile, ProfileResponse } from "./types";

export const getUserData = async (): Promise<Profile | undefined> => {
  let data: ProfileResponse | null = null;
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error("Failed to get user data");
    }
    data = await response.json();
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
    }
  }

  return data?.results[0];
};
