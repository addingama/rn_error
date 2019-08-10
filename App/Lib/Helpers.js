import { Linking } from 'react-native'
import numeral from 'numeral'
import moment from 'moment'

numeral.register('locale', 'id', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal: function (number) {
    return number === 1 ? '' : 's'
  },
  currency: {
    symbol: 'Rp'
  }
})

export function openUrl (url) {
  Linking.canOpenURL(url).then(supported => {
    if (!supported) {
      console.tron.log('Can\'t handle url: ' + url)
    } else {
      return Linking.openURL(url)
    }
  }).catch(err => console.tron.error('An error occurred', err))
}

export function formatNumber (number, format = '0,0[.]00', prefix = '', suffix = '') {
  numeral.locale('id')
  const value = numeral(number).format(format)
  return `${prefix + value + suffix}`
}

export const getFullAge = (dob) => {
  let b = moment(dob)
  let a = moment()
  let intervals = ['years', 'months', 'weeks', 'days']
  let intervalId = ['tahun', 'bulan', 'minggu', 'hari']
  let out = []

  for (var i = 0; i < intervals.length; i++) {
    var diff = a.diff(b, intervals[i])
    b.add(diff, intervals[i])
    if (intervals[i] === 'years' && diff === 0) {
      // skip 0 years
    } else {
      out.push(diff + ' ' + intervalId[i])
    }
  }
  return out.join(', ')
}
