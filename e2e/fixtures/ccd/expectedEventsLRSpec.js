const events = require('./events.js');

module.exports = {
  applicant_solicitor: {
    CASE_ISSUED: [
      events.ENTER_BREATHING_SPACE_SPEC,
      events.LIFT_BREATHING_SPACE_SPEC,
      events.CHANGE_SOLICITOR_EMAIL
    ],
    AWAITING_CASE_DETAILS_NOTIFICATION: [
      events.NOTIFY_DEFENDANT_OF_CLAIM_DETAILS,
      events.CHANGE_SOLICITOR_EMAIL
    ],
    AWAITING_RESPONDENT_ACKNOWLEDGEMENT: [
      events.CHANGE_SOLICITOR_EMAIL
    ],
    PROCEEDS_IN_HERITAGE_SYSTEM: [],
    AWAITING_APPLICANT_INTENTION: [
      events.CLAIMANT_RESPONSE,
      events.CHANGE_SOLICITOR_EMAIL
    ],
    PENDING_CASE_ISSUED: [
      events.RESUBMIT_CLAIM,
      events.CHANGE_SOLICITOR_EMAIL
    ]
  },
  defendant_solicitor: {
    AWAITING_CASE_DETAILS_NOTIFICATION: [],
    AWAITING_RESPONDENT_ACKNOWLEDGEMENT: [
      events.ACKNOWLEDGE_CLAIM,
      events.DEFENDANT_RESPONSE,
      events.INFORM_AGREED_EXTENSION_DATE,
      events.ADD_DEFENDANT_LITIGATION_FRIEND,
      events.CHANGE_SOLICITOR_EMAIL
    ],
    PROCEEDS_IN_HERITAGE_SYSTEM: [],
    AWAITING_APPLICANT_INTENTION: [
      events.ADD_DEFENDANT_LITIGATION_FRIEND,
      events.CHANGE_SOLICITOR_EMAIL
    ],
  },
  admin: {
    CASE_ISSUED: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.CASE_PROCEEDS_IN_CASEMAN_SPEC,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    AWAITING_CASE_DETAILS_NOTIFICATION: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.CASE_PROCEEDS_IN_CASEMAN_SPEC,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    AWAITING_RESPONDENT_ACKNOWLEDGEMENT: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.CASE_PROCEEDS_IN_CASEMAN_SPEC,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    PROCEEDS_IN_HERITAGE_SYSTEM: [
      events.AMEND_PARTY_DETAILS
    ],
    AWAITING_APPLICANT_INTENTION: [
      events.CASE_PROCEEDS_IN_CASEMAN,
      events.CASE_PROCEEDS_IN_CASEMAN_SPEC,
      events.AMEND_PARTY_DETAILS,
      events.ADD_CASE_NOTE
    ],
    PENDING_CASE_ISSUED: [
      events.AMEND_PARTY_DETAILS
    ]
  }
};
