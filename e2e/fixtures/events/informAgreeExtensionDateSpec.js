const {dateNoWeekends} = require('../../api/dataHelper');

module.exports = {
  userInput: {
    ExtensionDate: {
      respondentSolicitor1AgreedDeadlineExtension: dateNoWeekends(40) // date generate invalid date, like weekend date
    }
  },
  midEventData: {
    ExtensionDate: {
      businessProcess: {
        status: 'FINISHED',
        camundaEvent: 'CREATE_CLAIM_SPEC'
      },
    }
  },

  midEventGeneratedData: {

  }
};
