import React from 'react';
import CandidateProfileContributionForm from '../../components/forms/CandidateProfileContributionForm';
import CandidateProfileInfo from '../../components/info-containers/CandidateProfileInfo';
import CandidateProfileInvitesOptions from '../../components/info-containers/CandidateProfileInvitesOptions';
import CandidateProfileTable from '../../components/tables/CandidateProfileTable';

export default class CandidateProfile extends React.Component {
render() {
  return (
    <div className="container">
      <CandidateProfileInfo />
      <CandidateProfileContributionForm />
      <CandidateProfileInvitesOptions />
      <CandidateProfileTable />
    </div>
  );
}
}
