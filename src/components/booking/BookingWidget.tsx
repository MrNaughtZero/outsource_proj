import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CAL_FLOATING_ID, isContactPage, showBookingButton } from './calBooking';
import './booking.css';

export default function BookingWidget() {
  const { pathname } = useLocation();
  const onContact = isContactPage(pathname);

  // Hide the host before Cal loads, including direct visits to /contact.
  // The popup remains available through the page's own booking buttons.
  useLayoutEffect(() => {
    document.documentElement.toggleAttribute('data-cal-contact', onContact);
    return () => document.documentElement.removeAttribute('data-cal-contact');
  }, [onContact]);

  useEffect(() => {
    showBookingButton();
    return () => document.getElementById(CAL_FLOATING_ID)?.remove();
  }, []);

  return null;
}
