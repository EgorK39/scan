let initialState = {
    parameters: [
        {
            id: 1,
            description: 'Признак максимальной полноты'
        },
        {
            id: 2,
            description: 'Упоминания в бизнес-контексте'
        },
        {
            id: 3,
            description: 'Главная роль в публикациие'
        },
        {
            id: 4,
            description: 'Публикации только с риск-факторами'
        },
        {
            id: 5,
            description: 'Включать технические новости рынков'
        },
        {
            id: 6,
            description: 'Включать анонсы и календари'
        },
        {
            id: 7,
            description: 'Включать сводки новостей'
        }
    ]

}

function searchParameters(state = initialState, action) {
    switch (action.type) {
        case 'SEARCHPARAMETERS':
            return {
                ...state,

                parameters: [...state.parameters, ...action.payload]
            };
        default:
            return state
    }
}

export default searchParameters;
