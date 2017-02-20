class ApiClient {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    getInvoiceForChild(childId) {
        return new Promise((resolve, reject) => {
            console.log('getInvoiceForChild added');
            resolve();
        })
    }
}