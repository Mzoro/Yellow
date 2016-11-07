import React from 'react';
import { Route } from 'react-router';
import LayoutFaq from '../components/layouts/LayoutFaq';
import LoggedLayout from '../components/layouts/LoggedLayout';
import Layout from '../components/layouts/Layout';
import Faq from '../components/pages/Faq';
import Tutorial from '../components/pages/Tutorial';
import Homepage from '../components/pages/Homepage';
import AboutUs from '../components/pages/AboutUs';
import YellowApp from '../startup/YellowAppClient';
import AccountSettings from '../components/pages/AccountSettings';
import LayoutBlog from '../components/layouts/LayoutBlog';
import Blog from '../components/pages/Blog';
import CandidateProfile from '../components/pages/CandidateProfile';
import ContactUs from '../components/pages/ContactUs';
import ContributionFormCustomization from '../components/pages/ContributionFormCustomization';
import ContributionFormEssentials from '../components/pages/ContributionFormEssentials';
import ContributionFormGoal from '../components/pages/ContributionFormGoal';
import ChangePassword from '../components/pages/ChangePassword';
import EventCustomization from '../components/pages/EventCustomization';
import EventEssentials from '../components/pages/EventEssentials';
import EventTickets from '../components/pages/EventTickets';
import EmailAlerts from '../components/tables/EmailAlerts';
import Features from '../components/pages/Features';
import Jobs from '../components/pages/Jobs';
import Login from '../components/pages/Login';
import NewPassword from '../components/pages/NewPassword';
import MyContributions from '../components/pages/MyContributions';
import MyContributionsHistory from '../components/forms/MyContributionsHistory';
import MyFundraising from '../components/pages/MyFundraising';
import MyRecurringContributions from '../components/forms/MyRecurringContributions';
import Pricing from '../components/pages/Pricing';
import ResetPassword from '../components/pages/ResetPassword';
import LayoutSupportUs from '../components/layouts/LayoutSupportUs';
import SupportUs from '../components/pages/SupportUs';
import Directory from '../components/pages/Directory';
import RecurringContributions from '../components/pages/RecurringContributions';
import ContributionForms from '../components/pages/ContributionForms';
import SignUpForm from '../components/forms/SignUpForm';
import ContributeCandidate from '../components/pages/ContributeCandidate';
import SupportMember from '../components/pages/SupportMember';
import DonorProfileForm from '../components/forms/DonorProfileForm';
import Privacy from '../components/pages/Privacy';
import TermsOfUse from '../components/pages/TermsOfUse';
import PaymentProcessing from '../components/pages/PaymentProcessing';
import Express from '../components/pages/Express';

export default (
  <Route component={YellowApp}>
    <Route component={LoggedLayout} >
      <Route component={Layout} >
        <Route path="/account_settings" component={AccountSettings} />
        <Route path="/candidate_profile" component={CandidateProfile} />
        <Route path="/contribute_candidate" component={ContributeCandidate} />
        <Route path="/contribution_form_customization" component={ContributionFormCustomization} />
        <Route path="/contribution_form_essentials" component={ContributionFormEssentials} />
        <Route path="/contribution_form_goal" component={ContributionFormGoal} />
        <Route path="/event_customization" component={EventCustomization} />
        <Route path="/event_essentials" component={EventEssentials} />
        <Route path="/event_tickets" component={EventTickets} />
        <Route path="/express_donor_profile" component={DonorProfileForm} />
        <Route path="/manage_email_alerts" component={EmailAlerts} />
        <Route path="/my_contributions" component={MyContributions} />
        <Route path="/my_contributions_history" component={MyContributionsHistory} />
        <Route path="/my_fundraising" component={MyFundraising} />
        <Route path="/my_recurring_contributions" component={MyRecurringContributions} />
      </Route>
    </Route>
    <Route component={Layout}>
      <Route path="/" component={Homepage} />
      <Route path="/about_us" component={AboutUs} />
      <Route path="/change_password" component={ChangePassword} />
      <Route path="/contact_us" component={ContactUs} />
      <Route path="/contribution_forms" component={ContributionForms} />
      <Route path="/express" component={Express} />
      <Route path="/homepage" component={Homepage} />
      <Route path="/features" component={Features} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/login" component={Login} />
      <Route path="/new_password" component={NewPassword} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/recurring_contributions" component={RecurringContributions} />
      <Route path="/reset_my_password" component={ResetPassword} />
      <Route path="/sign_up" component={SignUpForm} />
      <Route path="/terms_of_use" component={TermsOfUse} />
    </Route>
    <Route component={LayoutBlog}>
      <Route path="/blog" component={Blog} />
    </Route>
    <Route component={LayoutSupportUs}>
      <Route path="/support_us" component={SupportUs} />
      <Route path="/support_member" component={SupportMember} />
      <Route path="/payment_processing" component={PaymentProcessing} />
    </Route>
    <Route component={LayoutFaq}>
      <Route path="/faq" component={Faq} />
      <Route path="/tutorial" component={Tutorial} />
    </Route>
    <Route path="/directory" component={Directory} />
  </Route>
);
