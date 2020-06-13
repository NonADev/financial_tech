export const DBConfig = {
    name: 'project_db',
    version: 1,
    objectStoresMeta: [
        {
            store: 'funcionario',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'nome', keypath: 'nome', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: false } }
            ]
        },
        {
            store: 'ponto',
            storeConfig: {keyPath: 'id', autoIncrement: true},
            storeSchema: [
                { name: 'horaInicio', keypath: 'horaInicio', options: {unique: false}},
                { name: 'horaFim', keypath: 'horaFim', options: {unique: false}}
            ]
        },
        {
            store: 'system_access',
            storeConfig: {keyPath: 'id', autoIncrement: true},
            storeSchema: [
                { name: 'dateTime', keypath: 'dateTime', options: {unique: false}},
                { name: 'username', keypath: 'username', options: {unique: false}},
                { name: 'password', keypath: 'password', options: {unique: false}}
            ]
        }
    ]
};