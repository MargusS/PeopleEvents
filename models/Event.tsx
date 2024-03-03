export class Event {
	id: string
	name: string
	date: string
	description: string
	price: string

	constructor(id: string, name: string, date: string, description: string, price: string) {
		this.id = id
		this.name = name
		this.date = date
		this.description = description
		this.price = price
	}
}