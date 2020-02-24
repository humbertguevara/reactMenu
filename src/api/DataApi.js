class DataApi {

    constructor(rawData) {
        this.rawData = rawData;
    }   

    getSections() {
        return this.rawData.sections;
    }

    getItems() {
        return this.rawData.items;
    }

    getItemsBySection(idSection) {
        return this.getItems().filter(item => item.id_section === idSection);
    }
}

export default DataApi;