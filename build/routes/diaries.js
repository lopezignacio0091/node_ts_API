"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/Diary/diary"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getErrorMessage = (error) => {
    if (error instanceof Error)
        return error.message;
    return String(error);
};
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesSpecific());
});
router.get('/:id', (_req, res) => {
    const diary = diaryServices.getFindByIdEntry(+_req.params.id);
    return (diary != null) ? res.send(diary) : res.status(404);
});
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const newDiary = diaryServices.addEntry(newDiaryEntry);
        res.send(newDiary);
    }
    catch (e) {
        res.status(400).send({ message: getErrorMessage(e) });
    }
});
exports.default = router;
