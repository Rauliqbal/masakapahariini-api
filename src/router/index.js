import express from 'express'
import { getNewRecipes, getNewRecipesByPage } from '../controller/recipes.controller.js'

const route = express.Router()

route.get('/recipes', getNewRecipes)
route.get('/recipes/:id', getNewRecipesByPage)

export default route