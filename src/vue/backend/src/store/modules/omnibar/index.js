import actions from './actions'
import getters from './getters'

const state = {
    cityListOptions: [],
    cityListSelected: '',
    countyListOptions: [],
    countyListSelected: '',
    postalCodeListOptions: [],
    postalCodeSelected: '',
    defaultPropertyTypeOptions: [],
    defaultPropertyTypeSelected: '',
    mlsMembership: [],
    autofillMLS: '',
    customFieldsSelected: [],
    customFieldsOptions: [],
    customPlaceholder: 'City, Postal Code, Address, or Listing ID',
    defaultSortOrderSelected: 'newest'
}

export default {
    namespaced: true,
    actions,
    getters,
    state
}
