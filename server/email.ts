// Email functionality removed - contact form submissions are stored in database only
export async function sendContactNotification(
  name: string,
  email: string,
  subject: string,
  message: string
): Promise<boolean> {
  // Email functionality removed - just log the submission
  console.log('Contact form submission:', {
    name,
    email,
    subject,
    message,
    timestamp: new Date().toISOString()
  });
  
  // Return true to indicate the submission was "processed" (stored in database)
  return true;
}