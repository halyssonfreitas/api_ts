"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NewsRepository_1 = require("../repository/NewsRepository");
class NewsService {
    get() {
        return NewsRepository_1.default.find({});
    }
    getById(_id) {
        return NewsRepository_1.default.findById(_id);
    }
    create(news) {
        return NewsRepository_1.default.create(news);
    }
    update(_id, news) {
        return NewsRepository_1.default.findByIdAndUpdate(_id, news);
    }
    delete(_id) {
        return NewsRepository_1.default.findByIdAndRemove(_id);
    }
}
exports.default = new NewsService();
