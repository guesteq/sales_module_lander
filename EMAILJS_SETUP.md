# EmailJS Setup Instructions

To enable email notifications when the form is submitted, you need to set up EmailJS:

## Steps:

1. **Create an EmailJS account** (free at https://www.emailjs.com/)

2. **Add an Email Service**
   - Go to "Email Services" in your dashboard
   - Add a service (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**
   - Go to "Email Templates"
   - Create a new template with these variables:
     - `{{to_email}}` - recipient email (ryan@guesteq.com)
     - `{{from_name}}` - sender's name
     - `{{from_email}}` - sender's email
     - `{{role}}` - sender's role
     - `{{company}}` - sender's company
     - `{{message}}` - optional message
     - `{{reply_to}}` - reply-to email
   - Set the "To Email" field to: `{{to_email}}`
   - Set the "From Name" field to: `{{from_name}}`
   - Set the "Reply To" field to: `{{reply_to}}`
   - Add subject line (e.g., "New Demo Request from {{from_name}}")
   - Add email body with all the form fields

4. **Get your credentials**
   - Go to "Account" → "General"
   - Copy your Public Key
   - Note your Service ID and Template ID

5. **Set environment variables**
   Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Alternative: Hardcode in the code** (not recommended for production)
   Update the values in `src/App.jsx` where it says `'YOUR_SERVICE_ID'`, etc.

## Note:
The form will send emails to: ryan@guesteq.com

