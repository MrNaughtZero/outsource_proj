import { useEffect, type RefObject } from 'react';

/** Mouse dragging for desktop carousels; touch and keyboard scrolling stay native. */
export default function useDesktopDragScroll(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;

    let gesture: { pointerId: number; startX: number; lastX: number } | null = null;
    let dragged = false;

    const finish = () => {
      const pointerId = gesture?.pointerId;
      gesture = null;
      scroller.classList.remove('is-dragging');
      if (pointerId !== undefined && scroller.hasPointerCapture(pointerId)) {
        scroller.releasePointerCapture(pointerId);
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      dragged = false;
      if (event.pointerType !== 'mouse' || event.button !== 0
        || !window.matchMedia('(min-width: 1024px)').matches
        || scroller.scrollWidth <= scroller.clientWidth) return;

      // Native mouse selection/focus can scroll a clipped card into view before
      // dragging starts. Keep focus accessible without letting it move the row.
      event.preventDefault();
      const control = event.target instanceof Element
        ? event.target.closest<HTMLElement>('a[href], button, [tabindex]')
        : null;
      if (control && scroller.contains(control)) control.focus({ preventScroll: true });

      gesture = { pointerId: event.pointerId, startX: event.clientX, lastX: event.clientX };
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!gesture || event.pointerId !== gesture.pointerId) return;
      if (!(event.buttons & 1)) {
        finish();
        return;
      }

      if (!dragged && Math.abs(event.clientX - gesture.startX) < 5) return;
      if (!dragged) {
        dragged = true;
        scroller.setPointerCapture(event.pointerId);
        scroller.classList.add('is-dragging');
      }
      event.preventDefault();
      // One CSS pixel of cursor movement is one pixel of content movement.
      // Updating from the last position also lets direction reverse immediately
      // at either scroll boundary, even after dragging beyond the end.
      const distance = event.clientX - gesture.lastX;
      gesture.lastX = event.clientX;
      scroller.scrollLeft = Math.max(0, Math.min(
        scroller.scrollWidth - scroller.clientWidth,
        scroller.scrollLeft - distance,
      ));
    };

    const onPointerEnd = (event: PointerEvent) => {
      if (event.pointerId === gesture?.pointerId) finish();
    };

    const onClick = (event: MouseEvent) => {
      // Suppress the mouse click produced by a drag, but allow keyboard clicks.
      if (dragged && event.detail > 0) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    const onDragStart = (event: DragEvent) => {
      if (gesture) event.preventDefault();
    };

    scroller.addEventListener('pointerdown', onPointerDown);
    scroller.addEventListener('click', onClick, true);
    scroller.addEventListener('dragstart', onDragStart);
    scroller.addEventListener('lostpointercapture', onPointerEnd);
    document.addEventListener('pointermove', onPointerMove, { passive: false });
    document.addEventListener('pointerup', onPointerEnd);
    document.addEventListener('pointercancel', onPointerEnd);
    window.addEventListener('blur', finish);

    return () => {
      scroller.removeEventListener('pointerdown', onPointerDown);
      scroller.removeEventListener('click', onClick, true);
      scroller.removeEventListener('dragstart', onDragStart);
      scroller.removeEventListener('lostpointercapture', onPointerEnd);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerup', onPointerEnd);
      document.removeEventListener('pointercancel', onPointerEnd);
      window.removeEventListener('blur', finish);
      finish();
    };
  }, [ref]);
}
