import { v4 as uuidv4 } from "uuid";
export const state = () => ({
  payload: [],
  bcs_payload: [],
  titles: [
    "Follow Me On Github",
    "Follow Me On Codepen",
    "Let's connect on Linkedin",
    "Follow me on Twitter",
  ],
  icons: ["github", "codepen", "linkedin-in", "twitter"],
  urls: [
    {
      id: uuidv4(),
      url: "https://github.com/NikolaJohnny94",
    },
    {
      id: uuidv4(),
      url: "https://codepen.io/NikolaJohnny/pens/public/",
    },
    {
      id: uuidv4(),
      url: "https://www.linkedin.com/in/nikola-ivanovi%C4%87-2b6a13179/",
    },
    {
      id: uuidv4(),
      url: "https://twitter.com/nikola8794pwd",
    },
  ],
  imgURL:
    "https://cdn.pixabay.com/photo/2015/04/28/13/35/america-743574_960_720.jpg",
});

export const getters = {
  getURLS: (state) => state.urls,
  getIcons: (state) => state.icons,
  getTitles: (state) => state.titles,
  getImg: (state) => state.imgURL,
};
