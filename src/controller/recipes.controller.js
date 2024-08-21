import axios from "axios";
import { BASE_URL } from "../constant/index.js";
import { load } from "cheerio";

// Get New Recipes
export const getNewRecipes = async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/resep`);
    const $ = load(data);

  const listItem = $("._recipes-list ._recipe-card .card");
  const resep = [];
  let slug, title, thumbnail, duration, difficulty;

  listItem.each((idx,el) => {
    title = $(el).find("h3 a").attr("data-tracking-value");
    thumbnail = $(el).find(".thumbnail img").attr("data-src");
    duration = $(el).find("._recipe-features span").text();
    difficulty = $(el)
      .find("._recipe-features a.icon_difficulty")
      .text()
      .trim();
    slug = $(el).find("h3 a").attr("href").split("/")[4]

    resep.push({
      slug,
      title,
      thumbnail,
      duration,
      difficulty,
    });
  });

  res.status(200).json({
    status: "Berhasil!",
    message: "Berhasil ambil data resep terbaru!",
    data: resep,
  });
  } catch (error) {
    res.status(404).json({
      status: "Gagal!",
      message: `Error: ${error.message}`,
      
    });
  }
};

// Get New Recipes By Page
export const getNewRecipesByPage = async (req, res) => {
  try {
    const {id} = req.params
    const { data } = await axios.get(`${BASE_URL}/resep/page/${id}`);
    const $ = load(data);

  const listItem = $("._recipes-list ._recipe-card .card");
  const resep = [];
  let slug, title, thumbnail, duration, difficulty;

  listItem.each((idx,el) => {
    title = $(el).find("h3 a").attr("data-tracking-value");
    thumbnail = $(el).find(".thumbnail img").attr("data-src");
    duration = $(el).find("._recipe-features span").text();
    difficulty = $(el)
      .find("._recipe-features a.icon_difficulty")
      .text()
      .trim();
    slug = $(el).find("h3 a").attr("href").split("/")[4]

    resep.push({
      slug,
      title,
      thumbnail,
      duration,
      difficulty,
    });
  });

  res.status(200).json({
    status: "Berhasil!",
    message: `Berhasil ambil data resep dihalaman ${id}!` ,
    data: resep,
  });
  } catch (error) {
    res.status(404).json({
      status: "Gagal!",
      message: `Error: ${error.message}`,
      
    });
  }
}