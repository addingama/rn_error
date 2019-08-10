// Simple React Native specific changes

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,

  BankFilter: {
    all: null,
    needFollowUp: 0,
    contacted: 1,
    responded: 2,
    goldCandidate: 3,
    goldDemo: 4,
    gold: 5,
    google: 6,
    note: 7
  },

  UploadImageMode: {
    ktp: 'ktp',
    formUpgrade: 'form_upgrade'
  }
}
