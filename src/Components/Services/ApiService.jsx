const BASE_URL =
  "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json";

export const apiService = async () => {
  try {
    const data = await fetch(BASE_URL);
    if (data.ok) {
      return await data.json();
    }
  } catch (error) {
    console.log("Error Fetching Data", error);
  }
};
