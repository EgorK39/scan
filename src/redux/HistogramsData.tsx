function HistogramsData(state = {
                            totalDocuments: [],
                            riskFactors: []
                        }
    ,
                        action) {
    switch (action.type) {
        case 'HISTOGRAMS':
            return {
                ...state,
                totalDocuments: [...state.totalDocuments, ...action.payload.totalDocuments],
                riskFactors: [...state.riskFactors, ...action.payload.riskFactors]
            }
        default:
            return state
    }
}

// totalDocuments
export default HistogramsData;