import express from 'express'
import { getNewRecipes } from '../controller/recipes.controller.js'

const route = express.Router()

route.get('/recipes', getNewRecipes)

export default route