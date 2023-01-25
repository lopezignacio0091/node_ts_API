"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Comentario Incorrecto, valide que sea de tipo texto');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('La fecha es  Incorrecta');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Weather Incorrecto');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Visibility Incorrecto');
    }
    return visibilityFromRequest;
};
// string instanceof String cuando crean una instancia con New String se valida asi
const isString = (string) => typeof string === 'string';
const isDate = (date) => Boolean(Date.parse(date));
const isWeather = (weather) => Object.values(types_1.Weather).includes(weather);
const isVisibility = (params) => Object.values(types_1.Visibility).includes(params);
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
