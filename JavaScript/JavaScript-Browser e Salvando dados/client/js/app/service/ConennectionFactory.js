(function() {

    let stores = ['negociacoes'];
    let version = 4;
    let dbName = 'aluraframe';
    let connection = null;

    return class ConnectionFactory {


        constructor() {

            throw new Error('Não é possível criar instâncias de ConnectinFactory');
        }

        static getConnection() {

        }

        static _createStores() {

        }
    }
})();