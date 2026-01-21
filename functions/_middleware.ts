/**
 * Cloudflare Pages Middleware
 * Redirects Spanish users from AvaTrade pages to AvaFutures
 * Uses Cloudflare's built-in geo detection (no third-party API needed)
 */

interface CFRequest extends Request {
  cf?: {
    country?: string;
  };
}

export const onRequest: PagesFunction = async (context) => {
  const request = context.request as CFRequest;
  const url = new URL(request.url);
  const country = request.cf?.country;

  // Only process if user is from Spain
  if (country === 'ES') {
    const path = url.pathname;

    // Redirect AvaTrade pages to AvaFutures for Spanish users
    // Matches: /avatrade/, /es/avatrade/, /de/avatrade/, etc.
    const avatradeMatch = path.match(/^(\/[a-z]{2}(-[A-Z]{2})?)?\/avatrade\/?$/);

    if (avatradeMatch) {
      const langPrefix = avatradeMatch[1] || '';
      const newPath = `${langPrefix}/avafutures/`;

      return new Response(null, {
        status: 302,
        headers: {
          'Location': newPath,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Redirect-Reason': 'spain-cfd-restriction'
        }
      });
    }
  }

  // Continue to the next middleware/page
  return context.next();
};
