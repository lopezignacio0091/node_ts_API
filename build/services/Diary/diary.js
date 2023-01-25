"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesSpecific = exports.getFindByIdEntry = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getFindByIdEntry = (id) => {
    const diary = diaries.find(d => d.id === id);
    return diary;
};
exports.getFindByIdEntry = getFindByIdEntry;
const getEntriesSpecific = () => diaries.map(({ id, date, weather, visibility }) => ({ id, date, weather, visibility }));
exports.getEntriesSpecific = getEntriesSpecific;
const addEntry = (newDiaryEntry) => {
    const newEntry = Object.assign({ id: Math.max(...diaries.map(d => d.id)) + 1 }, newDiaryEntry);
    diaries.push(newEntry);
    return newEntry;
};
exports.addEntry = addEntry;
