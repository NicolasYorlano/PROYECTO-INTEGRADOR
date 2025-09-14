
const KEY_INSTITUTION = "institution";

const initialize = () => {
    const initialData = {
        name: "Hamburguesas LP",
        address: "La Plata 123, Buenos Aires, Argentina.",
        phone: "264-411-2233",
        email: "HamburguesasLaPlata@gmial.com",
        about: {
            mission: "En Hamburguesas LP nos proponemos crear hamburguesas de calidad, usando ingredientes frescos y ofreciendo un servicio rápido y cercano para que cada cliente disfrute de una experiencia única.",
            vision: "Queremos que Hamburguesas LP sea reconocida como la hamburguesería de referencia en la La Plata, destacándonos por nuestro sabor, la innovación y la forma en que conectamos con cada persona.",
            values: "Nos guiamos por la calidad en cada producto, la innovación constante para mejorar, la cercanía con clientes y colaboradores, y la responsabilidad hacia la comunidad y el medio ambiente.",
        },
    };

    localStorage.setItem(KEY_INSTITUTION, JSON.stringify(initialData));

    return initialData;
};

const getInstitutionFromLocalStorage = () => {
    const data = localStorage.getItem(KEY_INSTITUTION);
    return JSON.parse(data) || initialize();
};

const fetchInstitution = () => {
    return new Promise((resolve) => {
        resolve(getInstitutionFromLocalStorage());
    });
};

export default {
    fetchInstitution,
};