import { mission } from "./data/mission.js";
import { values } from "./data/values.js";
import { vision } from "./data/vision.js";

const KEY_INSTITUTION = "institution";

const initialize = () => {
    const initialData = {
        name: "Mi App",
        address: "Av. Siempreviva 100, San Juan, Argentina",
        phone: "264-411-2233",
        email: "info@miapp.com",
        about: {
            mission: mission,
            vision: values,
            values: vision,
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