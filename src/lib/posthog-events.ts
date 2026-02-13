import posthog from 'posthog-js';

/**
 * Track a custom event in PostHog
 * @param eventName - The name of the event
 * @param properties - Optional event properties/metadata
 */
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
): void {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.capture(eventName, properties);
  }
}

/**
 * Track a page view event
 * @param pageName - Name or title of the page
 * @param properties - Optional additional properties
 */
export function trackPageView(
  pageName: string,
  properties?: Record<string, any>
): void {
  trackEvent('Page View', {
    page_name: pageName,
    ...properties,
  });
}

/**
 * Track a button click event
 * @param buttonName - Name or label of the button
 * @param properties - Optional additional properties
 */
export function trackButtonClick(
  buttonName: string,
  properties?: Record<string, any>
): void {
  trackEvent('Button Click', {
    button_name: buttonName,
    ...properties,
  });
}

/**
 * Track a form submission event
 * @param formName - Name of the form
 * @param properties - Optional form data or metadata
 */
export function trackFormSubmission(
  formName: string,
  properties?: Record<string, any>
): void {
  trackEvent('Form Submission', {
    form_name: formName,
    ...properties,
  });
}

/**
 * Identify a user in PostHog
 * @param userId - Unique user identifier
 * @param userProperties - User metadata (name, email, plan, etc.)
 */
export function identifyUser(
  userId: string,
  userProperties?: Record<string, any>
): void {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.identify(userId, {
      distinctId: userId,
      ...userProperties,
    });
  }
}

/**
 * Reset user identification (on logout)
 */
export function resetUserIdentification(): void {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.reset();
  }
}

/**
 * Set user properties
 * @param properties - User properties to set
 */
export function setUserProperties(properties: Record<string, any>): void {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.setPersonProperties(properties);
  }
}
