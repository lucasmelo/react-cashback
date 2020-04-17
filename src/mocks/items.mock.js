
let items = [];
let newItems = [];

export const getItems = () => {
    items = [
        {
            "code": "5578892",
            "value": "356.22",
            "date": "15/02/2020",
            "cashbackPercent": "22%",
            "cashBackValue": "535",
            "status": "Aprovado"
        },
        {
            "code": "2223321",
            "value": "556.22",
            "date": "05/01/2020",
            "cashbackPercent": "15%",
            "cashBackValue": "535",
            "status": "Aprovado"
        }
    ];
    return items;
};

export const addItems = (e) => {
    let newItemsAdded = [];
    newItems = [...newItemsAdded, e]
    return newItems;
}

export const getCurrentCash = () => {
    const valueCashback = '112.44';
    return valueCashback;
}

export const getNewItems = () => {
    return newItems;
}
