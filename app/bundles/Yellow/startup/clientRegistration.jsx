
import ReactOnRails from 'react-on-rails';
import YellowApp from './YellowAppClient';
import LayoutFaq from '../components/layouts/LayoutFaq';
import Layout from '../components/layouts/Layout';
import LayoutBlog from '../components/layouts/LayoutBlog';

// This is how react_on_rails can see the YellowApp in the browser.
ReactOnRails.register({ YellowApp, LayoutFaq, Layout, LayoutBlog });
