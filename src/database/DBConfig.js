export const DBConfig = {
    name: 'project_db',
    version: 1,
    objectStoresMeta: [
        {
            store: 'funcionario',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'username', keypath: 'username', options: { unique: false }},
                { name: 'password', keypath: 'password', options: { unique: false }},
                { name: 'cargo', keypath: 'cargo', options: { unique: false }},
                { name: 'valorHora', keypath: 'valorHora', options: { unique: false }}
            ]
        },
        {
            store: 'pontoBatido',
            storeConfig: {keyPath: 'id', autoIncrement: true},
            storeSchema: [
                { name: 'fkFuncionario', keypath: 'fkFuncionario', options: {unique: false}},
                { name: 'dataHora', keypath: 'dataHora', options: {unique: false}}
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