Introduction
------------

**What does the project do**

Do you never know what to cook tonight? And if you have a recipe, are you also curious about the nutritional values? Or are you in the
supermarket and are you curious how many calories an ingredient has? The Clueless Cook application will help you with this.


**What functions does the project have**

- Homepage:
  - Included with a search function for finding recipes. The search function contains search options for meal-type, cuisine, diet and cooking time. It will show 12 recipes matching the search query.
  - The homepage shows three random featured recipes in the header with the theme 'Veggie', just to get inspired. Why veggie? We can always use some extra vitamins!
- Recipe page:
  - With the recipe title, ingredients list, link to the preparation (linked to the original source of the recipe), recipe image, nutrients table and health labels.
- Calorie Calculator:
  - Search by type of product or product barcode, showing serving size.
  - Add selected product with the amount of servings by choice. 
  - Showing a table with the added amount of products, with calorie, fat and carb data. 

Installation and Requirements
-----------------------------

**Step 1: installing Node.js and npm**

Before you start, you need to have Node.js and npm installed on your system. Check [this](https://nodejs.org/en/download/) website to download and install the latest version. This project is set up with Node.js v16.15.0 and npm v8.10.0. You can check if Node.js and npm are installed on your system and with what version, by running the following commands on the command line:

`node -v
`

`npm -v
`

**Step 2: installing (development) dependencies** 

All the (development) dependencies are mentioned in the package.json file. You can install them all at once by running the following command on the command line:

`npm install
`

_The following development dependencies, with the minimum version mentioned, are used:_

- buffer: v6.0.3
- parcel: v2.6.0
- parcel-plugin-nuke-dist: v1.0.1
- process: v0.11.10

_The following dependencies, with the minimum version mentioned, are used:_

- axios: v0.27.2


**Step 3: Use of APIs from Edamam**

In this project the 'Recipe Search API' and 'Food Database API' of Edamam are used (both the V2 version). You can find the full documentation of these APIs at the website of [Edamam](https://www.edamam.com/). 

**important!** Before you can use this project by yourself, you need the signup for an account at the [Edamam](https://www.edamam.com/) website and add the 'Recipe Search API' and 'Food Database API' to your account. This will create an application ID and key for both APIs separately. You need to change the application ID and key to your own application ID and key at the following files:
  - [src/main.js](src/main.js), lines 12 and 13 (app_key and app_id of the Recipe Search API)
  - [src/recipe-page-main.js](src/recipe-page-main.js), lines 15 and 16 (app_key and app_id of the 'Recipe Search API')
  - [src/functions/fetch-recipe-data.js](src/functions/fetch-recipe-data.js), lines 8 and 9 (app_key and app_id of the 'Recipe Search API')
  - [src/functions/fetch-calorie-data.js](src/functions/fetch-calorie-data.js), lines 8 and 9 (app_key and app_id of the 'Food Database API')

**Step 4: Running and testing the project locally**

To run the project locally and test all the functions, run the following command on the command line:

`npm run start
`

Need some help?
-----------------------------
If you have any issues with installing, or you have questions about the project, let me know! I am happy to help you out. You can find my contact details at my [GitHub profile](https://github.com/AnnemiekNieboer/)

Who maintains and contributes to the project?
-----------------------------
Me! Annemiek Nieboer. You can find recent updates at the [GitHub repository](https://github.com/AnnemiekNieboer/eindopdracht-webdevelopment) of this project.