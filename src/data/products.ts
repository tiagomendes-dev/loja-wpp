import { Product } from "@/types/product";

export const products: Product[] = [
	{
		id: 1,
		category: "pizza",
		name: "Margherita",
		ingredients: "Tomato sauce, Mozzarella, Basil",
		image: "https://placeholder.com/150",
		price: 10.99,
	},
	{
		id: 2,
		category: "pizza",
		name: "Pepperoni",
		ingredients: "Tomato sauce, Pepperoni, Mozzarella",
		image: "https://placeholder.com/150",
		price: 12.99,
	},
	{
		id: 3,
		category: "pizza",
		name: "Vegetariana",
		ingredients:
			"Tomato sauce, Mushrooms, Bell peppers, Red onions, Olives, Mozzarella",
		image: "https://placeholder.com/150",
		price: 11.99,
	},
	{
		id: 4,
		category: "pizza",
		name: "Frango com Catupiry",
		ingredients: "Chicken, Catupiry cheese, Corn, Mozzarella",
		image: "https://placeholder.com/150",
		price: 13.99,
	},
	{
		id: 5,
		category: "pizza",
		name: "Quatro Queijos",
		ingredients: "Mozzarella, Gorgonzola, Provolone, Parmesan",
		image: "https://placeholder.com/150",
		price: 14.99,
	},
	{
		id: 6,
		category: "pizza",
		name: "Calabresa",
		ingredients: "Tomato sauce, Calabrese sausage, Mozzarella",
		image: "https://placeholder.com/150",
		price: 12.99,
	},
	{
		id: 7,
		category: "pizza",
		name: "Portuguesa",
		ingredients: "Tomato sauce, Ham, Eggs, Peas, Mozzarella",
		image: "https://placeholder.com/150",
		price: 13.99,
	},
	{
		id: 8,
		category: "pizza",
		name: "Mista",
		ingredients: "Tomato sauce, Ham, Pepperoni, Mozzarella",
		image: "https://placeholder.com/150",
		price: 14.99,
	},
	{
		id: 9,
		category: "pizza",
		name: "Atum",
		ingredients: "Tomato sauce, Tuna, Red onions, Olives, Mozzarella",
		image: "https://placeholder.com/150",
		price: 13.99,
	},
	{
		id: 10,
		category: "pizza",
		name: "Chocolover",
		ingredients: "Chocolate spread, Strawberries, Marshmallows",
		image: "https://placeholder.com/150",
		price: 11.99,
	},
	{
		id: 11,
		category: "pizza",
		name: "Caprese",
		ingredients: "Tomato, Mozzarella, Basil, Balsamic glaze",
		image: "https://placeholder.com/150",
		price: 12.99,
	},
	{
		id: 12,
		category: "pizza",
		name: "BBQ Chicken",
		ingredients: "BBQ sauce, Chicken, Red onions, Mozzarella",
		image: "https://placeholder.com/150",
		price: 13.99,
	},

	// Petiscos
	{
		id: 13,
		category: "petisco",
		name: "Coxinha",
		ingredients: "Chicken, Dough, Cream cheese",
		image: "https://placeholder.com/150",
		price: 5.99,
	},
	{
		id: 14,
		category: "petisco",
		name: "Calabresa Frita",
		ingredients: "Calabrese sausage, Oil",
		image: "https://placeholder.com/150",
		price: 7.99,
	},
	{
		id: 15,
		category: "petisco",
		name: "Bolinho de Bacalhau",
		ingredients: "Codfish, Potatoes, Parsley",
		image: "https://placeholder.com/150",
		price: 8.99,
	},
	{
		id: 16,
		category: "petisco",
		name: "Mandioca Frita",
		ingredients: "Cassava, Salt",
		image: "https://placeholder.com/150",
		price: 6.99,
	},
	{
		id: 17,
		category: "petisco",
		name: "Queijo Coalho",
		ingredients: "Queijo coalho cheese, Skewers",
		image: "https://placeholder.com/150",
		price: 9.99,
	},
	{
		id: 18,
		category: "petisco",
		name: "Batata Frita",
		ingredients: "Potatoes, Salt",
		image: "https://placeholder.com/150",
		price: 5.99,
	},
	{
		id: 19,
		category: "petisco",
		name: "Pastel de Carne",
		ingredients: "Beef, Onions, Bell peppers, Dough",
		image: "https://placeholder.com/150",
		price: 7.99,
	},
	{
		id: 20,
		category: "petisco",
		name: "Bruschetta",
		ingredients: "Baguette, Tomatoes, Garlic, Basil",
		image: "https://placeholder.com/150",
		price: 8.99,
	},
	{
		id: 21,
		category: "petisco",
		name: "Espetinho de Frango",
		ingredients: "Chicken, Bell peppers, Onions",
		image: "https://placeholder.com/150",
		price: 6.99,
	},
	{
		id: 22,
		category: "petisco",
		name: "Linguiça Toscana",
		ingredients: "Tuscany sausage, Mustard",
		image: "https://placeholder.com/150",
		price: 9.99,
	},
	{
		id: 23,
		category: "petisco",
		name: "Dadinho de Tapioca",
		ingredients: "Tapioca flour, Cheese, Ham",
		image: "https://placeholder.com/150",
		price: 8.99,
	},
	{
		id: 24,
		category: "petisco",
		name: "Ovos de Codorna",
		ingredients: "Quail eggs, Salt",
		image: "https://placeholder.com/150",
		price: 6.99,
	},

	// Bebidas
	{
		id: 25,
		category: "bebida",
		name: "Coca-Cola",
		ingredients: "Carbonated water, High fructose corn syrup",
		image: "https://placeholder.com/150",
		price: 2.99,
	},
	{
		id: 26,
		category: "bebida",
		name: "Água Mineral",
		ingredients: "Pure water",
		image: "https://placeholder.com/150",
		price: 1.99,
	},
	{
		id: 27,
		category: "bebida",
		name: "Suco de Laranja",
		ingredients: "Fresh orange juice",
		image: "https://placeholder.com/150",
		price: 3.49,
	},
	{
		id: 28,
		category: "bebida",
		name: "Limonada",
		ingredients: "Freshly squeezed lemons, Sugar, Water",
		image: "https://placeholder.com/150",
		price: 3.99,
	},
	{
		id: 29,
		category: "bebida",
		name: "Chá Gelado",
		ingredients: "Tea, Ice, Lemon",
		image: "https://placeholder.com/150",
		price: 2.49,
	},
	{
		id: 30,
		category: "bebida",
		name: "Cerveja Artesanal",
		ingredients: "Craft beer",
		image: "https://placeholder.com/150",
		price: 5.99,
	},
	{
		id: 31,
		category: "bebida",
		name: "Mojito",
		ingredients: "White rum, Lime, Mint, Sugar, Soda water",
		image: "https://placeholder.com/150",
		price: 7.99,
	},
	{
		id: 32,
		category: "bebida",
		name: "Caipirinha",
		ingredients: "Cachaça, Lime, Sugar",
		image: "https://placeholder.com/150",
		price: 6.99,
	},
	{
		id: 33,
		category: "bebida",
		name: "Coquetel de Frutas",
		ingredients: "Mixed fruits, Vodka, Soda water",
		image: "https://placeholder.com/150",
		price: 8.99,
	},
	{
		id: 34,
		category: "bebida",
		name: "Smoothie de Morango",
		ingredients: "Strawberries, Yogurt, Honey",
		image: "https://placeholder.com/150",
		price: 4.99,
	},
	{
		id: 35,
		category: "bebida",
		name: "Vinho Tinto",
		ingredients: "Red wine",
		image: "https://placeholder.com/150",
		price: 9.99,
	},
	{
		id: 36,
		category: "bebida",
		name: "Café Espresso",
		ingredients: "Ground coffee beans, Hot water",
		image: "https://placeholder.com/150",
		price: 2.49,
	},
];
