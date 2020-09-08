import React from 'react';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import DashboardIndex from './pages/Dashboard/contents/DashboardIndex';
import AddListingContent from './pages/Dashboard/contents/AddListingContent';
import BookingsContent from './pages/Dashboard/contents/BookingsContent';
import BookmarksContent from './pages/Dashboard/contents/BookmarksContent';
import InvoiceContent from './pages/Dashboard/contents/InvoiceContent';
import InboxContent from './pages/Dashboard/contents/InboxContent';
import MyOfferingsContent from './pages/Dashboard/contents/MyOfferingsContent';
import MyProfileContainer from './pages/Dashboard/contents/MyProfileContent/my-profile-container';
import ReviewsContent from './pages/Dashboard/contents/ReviewsContent';
import WalletContent from './pages/Dashboard/contents/WalletContent';
import BlogPage from './pages/BlogPage';
import BookingPage from './pages/BookingPage';
import BookingConfirmationPage from './pages/BookingPage/BookingConfirmationPage';
import ContactPage from './pages/ContactPage';
import ElementsPage from './pages/ElementsPage';
import LessonFilteringPage from './pages/LessonFilteringPage';
import PricingTablesPage from './pages/PricingTablesPage';
import TypographyPage from './pages/TypographyPage';
import UserProfilePage from './pages/UserProfilePage';
import ComingSoonPage from './pages/ComingSoonPage';
import Heroes from './demo-development/heroes-module/pages/Heroes';
import BlogPost from './pages/BlogPage/BlogPostPage';
import LoginPage from './pages/LoginPage';
import ContinueAsPage from './pages/ContinueAs';
import VirtualClassroomsContent from './pages/Dashboard/contents/VirtualClassroomsContent';
import CoursesContent from './pages/Dashboard/contents/CoursesContent';
import TutoringsContent from './pages/Dashboard/contents/TutoringsContent';
import CreateOfferingsContent from './pages/Dashboard/contents/CreateOfferingsContent';
import SettingsContent from './pages/Dashboard/contents/SettingsContent';
import ResumeContent from './pages/Dashboard/contents/ResumeContent';
import OfferingsForReviews from './pages/Dashboard/contents/MyOfferingsContent/pages/offerings-for-reviews';
import ActiveOfferings from './pages/Dashboard/contents/MyOfferingsContent/pages/active-offerings';
import InactiveOfferings from './pages/Dashboard/contents/MyOfferingsContent/pages/inactive-offerings';
import OfferingDetail from './pages/Dashboard/contents/MyOfferingsContent/pages/offering-detail';
import EditOffering from './pages/Dashboard/contents/MyOfferingsContent/pages/edit-offering';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardContentNotFound from './pages/Dashboard/contents/DashboardContentNotFound';
import ProtectedRoute from './components/protected-route';

const Router = () => {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL + '/'} element={<HomePage />} />
      <Route path={'blog'} element={<BlogPage />} />
      <Route path={'blog-post'} element={<BlogPost />} />
      <Route path={'booking'} element={<BookingPage />} />
      <Route
        path={'booking-confirmation'}
        element={<BookingConfirmationPage />}
      />
      <Route path={'contact'} element={<ContactPage />} />
      <Route path={'coming-soon'} element={<ComingSoonPage />} />
      <Route path={'elements'} element={<ElementsPage />} />
      <Route path={'lesson-filtering'} element={<LessonFilteringPage />} />
      <Route path={'pricing-tables'} element={<PricingTablesPage />} />
      <Route path={'typography'} element={<TypographyPage />} />
      <Route path={'user-profile'} element={<UserProfilePage />} />
      <Route path={'heroes'} element={<Heroes />} />
      <Route path={'login'} element={<LoginPage />} />
      <Route path={'continue-as'} element={<ContinueAsPage />} />
      <Route path={'dashboard'} element={<Dashboard />}>
        <Route path={`/`} element={<DashboardIndex />} />
        <Route path={`add-listing`} element={<AddListingContent />} />
        <Route path={`bookings`} element={<BookingsContent />} />
        <Route path={`bookmarks`} element={<BookmarksContent />} />
        <Route path={`invoice`} element={<InvoiceContent />} />
        <Route path={`inbox`} element={<InboxContent />} />
        <Route path={`my-offerings`} element={<MyOfferingsContent />} />
        <Route
          path={`virtual-classrooms`}
          element={<VirtualClassroomsContent />}
        />
        <Route path={`courses`} element={<CoursesContent />} />
        <Route path={`create-offerings`} element={<CreateOfferingsContent />} />
        <Route path={`active-offerings`} element={<ActiveOfferings />} />
        <Route
          path={`offerings-for-reviews`}
          element={<OfferingsForReviews />}
        />
        <Route path={`inactive-offerings`} element={<InactiveOfferings />} />
        <Route path={`offering-detail/:id`} element={<OfferingDetail />} />
        <Route path={`edit-offering/:id`} element={<EditOffering />} />
        <Route path={`settings`} element={<SettingsContent />} />
        <Route path={`resume`} element={<ResumeContent />} />
        <Route path={`my-profile`} element={<MyProfileContainer />} />
        <Route path={`reviews`} element={<ReviewsContent />} />
        <Route path={`tutorings`} element={<TutoringsContent />} />
        <Route path={`wallet`} element={<WalletContent />} />
        <Route path="*" element={<DashboardContentNotFound />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
