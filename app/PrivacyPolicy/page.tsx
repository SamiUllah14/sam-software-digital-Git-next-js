// pages/privacy-policy.tsx

import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy outlines how NewYorkSoftwares.com ("we," "us," or "our") collects, uses, and protects your personal information in compliance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA). By using our services, you consent to the practices described in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect the following types of personal information:
      </p>
      <ul>
        <li>Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Billing Information</li>
        <li>Technical Data (e.g., IP address, browser type, device information)</li>
        <li>Usage Data (e.g., how you use our services)</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use your personal information for the following purposes:
      </p>
      <ul>
        <li>To provide and maintain our services.</li>
        <li>To process transactions and send notifications.</li>
        <li>To communicate with you, including customer support.</li>
        <li>To comply with legal obligations.</li>
        <li>To improve our services and user experience.</li>
        <li>To send promotional materials (with your consent).</li>
      </ul>

      <h2>3. Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information to third parties. We may share your information with:
      </p>
      <ul>
        <li>Service providers who assist us in operating our services.</li>
        <li>Legal authorities when required by law.</li>
      </ul>

      <h2>4. Your Rights</h2>
      <p>
        Depending on your location, you may have the following rights:
      </p>
      <ul>
        <li>The right to access your personal data.</li>
        <li>The right to request correction of inaccurate data.</li>
        <li>The right to request deletion of your data.</li>
        <li>The right to object to data processing.</li>
        <li>The right to data portability.</li>
      </ul>

      <h2>5. Maintenance Fees</h2>
      <p>
        After one month post-project completion, any changes or additional services you require will incur a maintenance fee. This fee will be communicated to you before any work is undertaken.
      </p>

      <h2>6. Remote Work Policy</h2>
      <p>
        We operate remotely and provide services to clients worldwide. All data handling and communication are conducted with the utmost care to ensure your information remains secure.
      </p>

      <h2>7. Money-Back Guarantee</h2>
      <p>
        We offer a money-back guarantee within a specified period after project completion. Please refer to our terms for specific conditions.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or destruction.
      </p>

      <h2>9. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be communicated through our website. Your continued use of our services after such changes constitutes your acceptance of the new Privacy Policy.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at support@newyorksoftwares.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;