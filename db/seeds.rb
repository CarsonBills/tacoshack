# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

items = [
"Taco Flap Jacks",
"Quesadilla Earthquake",
"Nachopocalypse Now Nachos",
"Chicken",
"Half-Beef",
"Purple Rice",
"Garlic Akimbo",
"Pork Miasma",
"Placebo",
"Pigheaded Burrito",
"Jello Undulate",
"Unsettling Soup",
"Shenanigans",
"Spittle Spackle",
"Pork Chops",
"Stuck Steak",
"3% Milk",
"Tomato Potato",
"Broccoli",
"Enormous Tortilla",
"Giggle-fish",
"Jackrabbit",
"Stones",
"Tree sap",
"Fire",
"Cilantro Soap",
]

adjectives = [
"Defenestrated",
"Disappointed",
"Cheesy",
"Crunchy",
"Waffle-Cut",
"Grilled",
"Existent",
"Imaginary",
"Twee",
"Whelming",
"World-Famous",
"Undulating",
"Absent",
"Sentient",
"Milky",
"Stringy",
"Tender",
"Upside Down",
"Slow cooked",
"Mobile",
"Mysterious",
"Gluten Free",
"Free-Range",
"Vegan",
"Mashed",
"Caramelized",
"Baked",
"Anxious",
"Misty",
"Abundant",
"Pan-Seared",
"Wise",
"Foolish",
"Sauteed",
"Gargantuan",
"Tiny",
"Fuzzy",
"Deceased",
"Obedient",
"Aged",
"Acidic",
"Bitter",
"Brown",
"Blue",
"Burnt",
"Buttered",
"Classic",
"Deep Fried",
"Infamous",
"Frozen",
"Gourmet",
"American",
]

modifiers = [
"With a cheese frizzle drizzle",
"With a disappointed onion",
"With a judgemental meal companion",
"With Milk",
"With boiled fries and fried boils",
"With Chanel No. 5",
"Served at high speed",
"With Bacon",
"While crying",
"With copious whining",
"Served in a red room with a tiny blue man",
"With Ice Cream",
"With a general feeling of disatisfaction",
"Served on a bed of enlightenment",
"On a very high table while sitting in a very small chair",
"From the floor",
"With an attractive date",
"Alone",
"With your fingers",
"While listening to loud experimental Jazz",
"While Barefoot",
"In the dark",
"Outside, during a snow storm",
]

items.each do |item|
  Item.create(name: item)
end

modifiers.each do |modifier|
  Modifier.create(modifier: modifier)
end

adjectives.each do |adjective|
  Adjective.create(adjective: adjective)
end