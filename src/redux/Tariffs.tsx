let initialState = {
    tariffs: [{
        id: 1,
        tariff: 'Beginner',
        description: 'Для небольшого исследования',
        img: 'Group 1171274215.svg',
        price: '799',
        priceDescription: 'или 150 ₽/мес. при рассрочке на 24 мес.',
        inclusive: 'В тариф входит:',
        one: 'Безлимитная история запросов',
        two: 'Безопасная сделка',
        three: 'Поддержка 24/7',
    }, {
        id: 2,
        tariff: 'Pro',
        description: 'Для HR и фрилансеров',
        img: 'Group 1171274216.svg',
        price: '1 299',
        priceDescription: 'или 279 ₽/мес. при рассрочке на 24 мес.',
        inclusive: 'В тариф входит:',
        one: 'Все пункты тарифа Beginner',
        two: 'Экспорт истории',
        three: 'Рекомендации по приоритетам',
    }, {
        id: 3,
        tariff: 'Business',
        description: 'Для корпоративных клиентов',
        img: 'Group 1171274214.svg',
        price: '2 379',
        priceDescription: '',
        inclusive: 'В тариф входит:',
        one: 'Все пункты тарифа Pro',
        two: 'Безлимитное количество запросов',
        three: 'Приоритетная поддержка',
    }]

}

function changeTariffs(state = initialState, action) {
    switch (action.type) {
        case 'TARIFFS':
            return {
                ...state,

                tariffs: [...state.tariffs, ...action.payload]
            };
        default:
            return state
    }
}

export default changeTariffs;


// store.dispatch({
//     type: 'READ', payload: [{
//         id: 4,
//         tariff: 'None',
//         description: 'description',
//         img: '',
//         price: '',
//         priceDescription: 'или --- ₽/мес. при рассрочке на 24 мес',
//         inclusive: 'В тариф входит:',
//         one: 'none',
//         two: 'none',
//         three: 'none',
//     }]
//
// })
