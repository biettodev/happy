const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

Database.then(async db => {
	
	await saveOrphanage(db, {
		lat: "-23.5488", 
		lng: "-46.6384",
		name: 'Lar das meninas',
		about: 'Presta assistência a crianças de 5 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social',
		whatsapp: "999281322",
		images: ["https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",	"https://images.unsplash.com/photo-1573261524391-266433971be1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
		].toString(),
		instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
		opening_hours: "Horários de visita das 8hs às 18hs",
		open_on_weekends: "0"
	})
	
	const orphanages = await db.all("SELECT * FROM orphanages")
	console.log(orphanages)
})