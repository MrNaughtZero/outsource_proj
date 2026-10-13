import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CAL_FLOATING_ID, isContactPage, showBookingButton } from './calBooking';
import './booking.css';

export default function BookingWidget() {
  const { pathname } = useLocation();
  const hideFloatingButton = isContactPage(pathname) || pathname.replace(/\/+$/, '').toLowerCase() === '/login';

  // Hide the host before Cal loads, including direct visits to login/contact.
  // Contact's own booking buttons can still open the popup.
  useLayoutEffect(() => {
    document.documentElement.toggleAttribute('data-cal-floating-hidden', hideFloatingButton);
    return () => document.documentElement.removeAttribute('data-cal-floating-hidden');
  }, [hideFloatingButton]);

  useEffect(() => {
    showBookingButton();
    return () => document.getElementById(CAL_FLOATING_ID)?.remove();
  }, []);

  return null;
}
