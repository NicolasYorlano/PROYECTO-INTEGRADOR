db.institutions.insertOne({
    name: "Mi App",
    address: "Av. Siempreviva 100, San Juan, Argentina",
    phone: "+54 264 1234-5678",
    email: "info@miapp.com",
    logo: "logo.png",
    mission: {
        description: "En Hamburguesas LP nos proponemos crear hamburguesas de calidad, usando ingredientes frescos y ofreciendo un servicio rápido y cercano para que cada cliente disfrute de una experiencia única.",
        thumbnail: "mission.png",
    },
    vision: {
        description: "Queremos que Hamburguesas LP sea reconocida como la hamburguesería de referencia en la región, destacándonos por nuestro sabor, la innovación y la forma en que conectamos con cada persona.",
        thumbnail: "vision.png",
    },
    values: {
        description: "Nos guiamos por la calidad en cada producto, la innovación constante para mejorar, la cercanía con clientes y colaboradores, y la responsabilidad hacia la comunidad y el medio ambiente.",
        thumbnail: "values.png",
    },
    createdAt: new Date(),
    updatedAt: new Date()
});