import _ from 'lodash'
export default (data) => {
    let banks = {}
    _.map(data, bank => {
        banks[bank.bank_id] = bank
    })
  
    return banks
  }
  