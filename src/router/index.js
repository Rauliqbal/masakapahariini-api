import express from 'express'
import { getNewRecipes, getNewRecipesByPage, getRecipeDetail } from '../controller/recipes.controller.js'

const route = express.Router()

route.get('/recipes', getNewRecipes)
route.get('/recipes/:id', getNewRecipesByPage)
route.get('/recipe/:slug', getRecipeDetail)

export default route