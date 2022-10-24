const events = require('./events.js');

module.exports = {
  applicant_solicitor: {
    CASE_ISSUED: [
      events.CHANGE_SOLICITOR_EMAIL,
      events.ENTER_BREATHING_SPACE_SPEC,
      events.LIFT_BREATHING_SPACE_SPEC,
    ],
    AWAITING_CASE_DETAILS_NOTIFICATION: [
      events.NOTIFY_DEFENDANT_OF_CLAIM_DETAILS,
      events.CHANGE_SOLICITOR_EMAIL,
      events.ENTER_BREATHING_SPACE_SPEC,
      events.DEFAULT_JUDGEMENT_SPEC,
      events.LIFT_BREATHING_SPACE_SPEC
    ],
    AWAITING_RESPONDENT_ACKNOWLEDGEMENT: [
      events.CHANGE_SOLICITOR_EMAIL,
      events.ENTER_BREATHING_SPACE_SPEC,
      events.LIFT_BREATHING_SPACE_SPEC,
    ],
    PROCEEDS_IN_HERITAGE_SYSTEM: [],
    AWAITING_APPLICANT_INTENTION: [
      events.CHANGE_SOLICITOR_EMAIL,
      events.ENTER_BREATHING_SPACE_SPEC,
      events.LIFT_BREATHING_SPACE_SPEC,
      events.DEFAULT_JUDGEMENT_SPEC,
    ],
    PENDING_CASE_ISSUED: [
      events.RESUBMIT_CLAIM,
      events.CHANGE_SOLICITOR_EMAIL
    ],

    AWAITING_DEFENDANT_RESPONSE: [
      events.CHANGE_SOLICITOR_EMAIL,
      events.ENTER_BREATHING_SPACE_SPEC,
      events.LIFT_BREATHING_SPACE_SPEC,
      events.CLAIMANT_RESPONSE_SPEC
    ]
  },
  defendant_solicitor: {
    AWAITING_CASE_DETAILS_NOTIFICATION: [],
    AWAITING_RESPONDENT_ACKNOWLEDGEMENT: [
      events.DEFENDANT_RESPONSE_SPEC,
      events.INFORM_AGREED_EXTENSION_DATE_SPEC,
      events.CHANGE_SOLICITOR_EMAIL,
    ],
    PROCEEDS_IN_HERITAGE_SYSTEM: [],
    AWAITING_APPLICANT_INTENTION: [
      events.ACKNOWLEDGEMENT_OF_SERVICE,
      events.CHANGE_SOLICITOR_EMAIL,
      events.DEFENDANT_RESPONSE_SPEC,
      events.DEFAULT_JUDGEMENT_SPEC,
      events.INFORM_AGREED_EXTENSION_DATE_SPEC,
    ],
    AWAITING_DEFENDANT_RESPONSE: [
      events.CHANGE_SOLICITOR_EMAIL,
    ]
  },
  admin: {
    CASE_ISSUED: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    AWAITING_CASE_DETAILS_NOTIFICATION: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    AWAITING_RESPONDENT_ACKNOWLEDGEMENT: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    PROCEEDS_IN_HERITAGE_SYSTEM: [
      events.AMEND_PARTY_DETAILS
    ],
    AWAITING_APPLICANT_INTENTION: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    PENDING_CASE_ISSUED: [
      events.AMEND_PARTY_DETAILS
    ],

    AWAITING_DEFENDANT_RESPONSE: [
      events.ADD_CASE_NOTE,
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.AMEND_PARTY_DETAILS
    ]
  }
};
