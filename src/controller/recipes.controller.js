import axios from "axios";
import { BASE_URL } from "../constant/index.js";
import { load } from "cheerio";

//  GET NEW RECIPE
export const getNewRecipes = async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/resep`);
    const $ = load(data);

    const listItem = $("._recipes-list ._recipe-card .card");
    const resep = [];
    let slug, title, thumbnail, duration, difficulty;

    listItem.each((idx, el) => {
      title = $(el).find("h3 a").attr("data-tracking-value");
      thumbnail = $(el).find(".thumbnail img").attr("data-src");
      duration = $(el).find("._recipe-features span").text();
      difficulty = $(el)
        .find("._recipe-features a.icon_difficulty")
        .text()
        .trim();
      slug = $(el).find("h3 a").attr("href").split("/")[4];

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

// GET RECIPE BY PAGE
export const getNewRecipesByPage = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${BASE_URL}/resep/page/${id}`);
    const $ = load(data);

    const listItem = $("._recipes-list ._recipe-card .card");
    const resep = [];
    let slug, title, thumbnail, duration, difficulty;

    listItem.each((idx, el) => {
      title = $(el).find("h3 a").attr("data-tracking-value");
      thumbnail = $(el).find(".thumbnail img").attr("data-src");
      duration = $(el).find("._recipe-features span").text();
      difficulty = $(el)
        .find("._recipe-features a.icon_difficulty")
        .text()
        .trim();
      slug = $(el).find("h3 a").attr("href").split("/")[4];

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
      message: `Berhasil ambil data resep dihalaman ${id}!`,
      data: resep,
    });
  } catch (error) {
    res.status(404).json({
      status: "Gagal!",
      message: `Error: ${error.message}`,
    });
  }
};

// GET RECIPE DETAIL
export const getRecipeDetail = async (req, res) => {
  try {
    const { slug } = req.params;
    const { data } = await axios.get(`${BASE_URL}/resep/${slug}`);
    const $ = load(data);

    const detail = $("main");
    let title, thumbnail, user,releaseDate,description,duration, instructions,  difficulty,ingredients,ingredient;

    detail.each((idx, el) => {
      title = $(el).find("header h1").text().split("|")[0].trim();
      thumbnail = $(el).find(".recipe-image picture img").attr("src");
      user = $(el).find(".author").text().trim().split('|')[0].trim()
      releaseDate = $(el).find(".author").text().trim().split("|")[1].trim()
      duration = $(el).find("._recipe-header ._recipe-features span").text().trim();
      difficulty = $(el).find("._recipe-header ._recipe-features a.icon_difficulty").text().trim();
      description = $(el).find(".content p").first().text();
      // instructions = $(el).find("._recipe-instructions ol li").text();
    });

    const author = {
      name: user,
      releaseDate
    }

    // let ingredientsArr = [];
    //         elementIngredients.find('.d-flex').each((i, e) => {
    //             let term = '';
    //             quantity = $(e).find('.part').text().trim();
    //             metaIngredient = $(e).find('.item').text().trim().split('\r\t')[0];
    //             metaIngredient = metaIngredient.split('\t');
    //             if (metaIngredient[0] != '') {
    //                 term = metaIngredient[0].replace('\n', '').trim() + ' '
    //                     + metaIngredient[metaIngredient.length - 1].replace('\n', '').trim();
    //                 ingredients = `${quantity} ${term}`;
    //                 ingredientsArr.push(ingredients)
    //             }
    //         });

    //         object.ingredient = ingredientsArr;

    let ingredientArr = []
    let object = {};
    let quantity,item
    detail.each((idx, el) => {
      quantity = $(el).find("._recipe-ingredients .part").text().trim()
      item = $(el).find("._recipe-ingredients .item").text().trim().split('|')[0]
      item = item.split('|')

       ingredientArr.push({
        quantity,
        item
    })
    });

    object.ingredient = ingredientArr
   


    const resep = {
      title,
      thumbnail,
      duration,
      difficulty,
      description,
      author,
      ingredient: object.ingredient
    }

    res.status(200).json({
      status: "Berhasil!",
      message: `Berhasil ambil data resep dihalaman ${slug}!`,
      data: resep,
    });
  } catch (error) {
    res.status(404).json({
      status: "Gagal!",
      message: `Error: ${error.message}`,
    });
  }
};
