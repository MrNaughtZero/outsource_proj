import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

// Supplied copy: Figma F05RSIukQOCUrO9lDvzckd, policy frames dated 8 October 2026.
export type PolicyType = 'legal' | 'privacy' | 'cookies';
type PolicyContent = { title: string; updated: string; mobileIntro: string; sections: { heading: string; content: ReactNode }[] };

export const policies: Record<PolicyType, PolicyContent> = {
  legal: {
    title: "Website Terms & Information",
    updated: '8 October 2026',
    mobileIntro: "",
    sections: [
    { heading: "1. About Outsource.com", content: (
      <div><p>Outsource.com provides managed finance professionals who work with accountancy firms and businesses, supported by management and an online platform.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>These terms explain how you may use this website and provide information about our services and website operator.</p></div>
    ) },
    { heading: "2. Website information", content: (
      <div><p>Information on this website provides a general overview of our services, people and platform. It does not constitute accounting, tax, legal or other professional advice.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>We take reasonable care to keep website information accurate and current, but we cannot guarantee that all content will always be complete or up to date.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Service availability, features and arrangements may change</p></div>
    ) },
    { heading: "3. Services and client agreements", content: (
      <div><p>The scope of services, fees, responsibilities and other engagement terms will be agreed separately in writing.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>The legal entity providing your services will be identified in your client agreement. That agreement governs your engagement and takes precedence over website information where there is a conflict.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Submitting an enquiry or booking a call does not, by itself, create a client engagement.</p></div>
    ) },
    { heading: "4. Company information", content: (
      <div><p>This website is operated by Outsource Technologies Ltd, trading as Outsource.com.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p><strong>{`Company number: `}</strong>16761463</p><p><strong>{`Registered in: `}</strong>England and Wales</p><p><strong>{`Registered office: `}</strong>221 Bury New Road, Manchester, M45 8GW, United Kingdom</p><p><strong>{`Email: `}</strong><a href="mailto:hello@outsource.com">hello@outsource.com</a></p></div>
    ) },
    { heading: "5. Prices and cost comparisons", content: (
      <div><p>Prices shown on this website are indicative unless expressly stated otherwise. Final pricing will be confirmed in your proposal or client agreement.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Rates may vary according to experience, team size and commitment length. VAT, where applicable, will be addressed in your proposal or agreement.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Our cost calculator provides estimates based on the information entered and the assumptions displayed. Results are illustrative and do not constitute a quotation or guarantee of savings. Savings shown exclude VAT.</p></div>
    ) },
    { heading: "6. Outsource Workspace", content: (
      <div><p>Outsource Workspace is our online platform for supporting collaboration, communication and the management of work.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Access is restricted to authorised users. Available features and access permissions depend on the relevant service arrangements.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Users must keep login details secure, use the platform only for authorised purposes and notify us promptly of suspected unauthorised access.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Users must have permission to upload or share any information they provide through the platform. Personal and confidential information must be handled in accordance with applicable law and the relevant client agreement.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Platform access and use may be subject to additional terms provided during onboarding. The relevant client agreement governs service responsibilities, data handling and any agreed availability commitments.</p></div>
    ) },
    { heading: "7. Acceptable use", content: (
      <div><p>You must not:</p><div className="policy-paragraph-gap" aria-hidden="true" /><ul><li>Use this website for unlawful or fraudulent purposes.</li><li>Attempt to gain unauthorised access to the website, platform or connected systems.</li><li>Introduce malicious software or interfere with security or operation.</li><li>Copy, collect or use website content in a way that infringes another person’s rights.</li></ul></div>
    ) },
    { heading: "8. Intellectual property", content: (
      <div><p>Unless otherwise stated, the website’s content, branding, design and materials belong to us or our licensors.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>You may view and download material for your own internal business information. You must not reproduce, distribute or commercially exploit it without permission, except where permitted by law.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Third-party names and trademarks remain the property of their respective owners.</p></div>
    ) },
    { heading: "9. External websites and services", content: (
      <div><p>This website may link to external websites or use third-party services, including appointment booking tools.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Those services may have their own terms and privacy notices. We are not responsible for the content or operation of external websites outside our control.</p></div>
    ) },
    { heading: "10. Privacy and cookies", content: (
      <div><p>Our <Link to="/privacy">Privacy Policy</Link> explains how we handle personal information.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Our <Link to="/cookie-policy">Cookie Policy</Link> explains our use of cookies and similar technologies and how to control them.</p></div>
    ) },
    { heading: "11. Website availability and liability", content: (
      <div><p>We aim to keep the website available, but access may occasionally be interrupted, restricted or suspended.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>To the extent permitted by law, we are not liable for business losses arising from reliance on general website information or from website interruptions, including loss of profit, revenue, business opportunities or anticipated savings.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Nothing in these terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability that cannot lawfully be excluded or limited.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>These website terms do not replace or limit obligations under a separate client agreement. Any mandatory rights you have under applicable law remain unaffected.</p></div>
    ) },
    { heading: "12. Changes to these terms", content: (
      <p>We may update these terms to reflect changes to the website, our services or legal requirements. The date above shows when they were last updated.
            </p>
    ) },
    { heading: "13. Governing law", content: (
      <div><p>These terms are governed by the laws of England and Wales.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Disputes relating to these website terms are subject to the jurisdiction of the courts of England and Wales, subject to any mandatory rights that apply to you.</p></div>
    ) }
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: '8 October 2026',
    mobileIntro: "",
    sections: [
    { heading: "1. About this policy", content: (
      <div><p>This policy explains how Outsource.com collects and uses personal information when you visit our website, contact us, book a call, apply for a role or interact with our services.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Outsource Technologies Ltd, trading as Outsource.com, is the controller responsible for the personal information covered by this policy.
              </p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Where we process information on behalf of a client as part of delivering services, we act in accordance with the relevant agreement and the client’s instructions. The client’s privacy notice will normally explain that processing.</p></div>
    ) },
    { heading: "2. Information we collect", content: (
      <div><p>Depending on how you interact with us, we may collect:</p><div className="policy-paragraph-gap" aria-hidden="true" /><ul><li><strong>{`Contact information: `}</strong>your name, business email address, telephone number, company and job title.
                </li><li><strong>Enquiry and booking information:
                  </strong>{` messages, appointment details and information you provide about your requirements.`}</li><li><strong>Business relationship information:
                  </strong>{` correspondence, proposals, agreements and relevant billing or administrative details.`}</li><li><strong>{`Recruitment information: `}</strong>your CV, employment history, qualifications and other information you provide when applying for a role.
                </li><li><strong>Platform information:
                  </strong>{` account details, permissions, communications and activity records associated with your use of Outsource Workspace.`}</li><li><strong>Technical information:
                  </strong>{` IP address, browser and device information, and operational or security logs.`}</li><li><strong>Cookie preferences:
                  </strong>{` information used to remember choices made through our cookie controls, where these are provided.`}</li></ul><div className="policy-paragraph-gap" aria-hidden="true" /><p>If we introduce optional analytics or advertising technologies, the information collected through them will be explained in our Cookie Policy before they are enabled.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Please only provide information relevant to your enquiry, application or use of our services.</p></div>
    ) },
    { heading: "3. Where information comes from", content: (
      <div><p>We primarily collect information directly from you through our website, booking arrangements, email, telephone calls and platform.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>We may also receive information from your employer or colleagues when they arrange services or give you access to the platform.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Service providers, such as our booking, communications and hosting providers, may supply information necessary to operate their services.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Where relevant to a business enquiry, we may use publicly available professional or company information to understand your organisation and requirements.</p></div>
    ) },
    { heading: "4. How and why we use information", content: (
      <div><p>We use personal information for the following purposes:</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Responding to enquiries and arranging calls
              </p><p>We rely on our legitimate interests in responding to prospective clients, or on taking steps at your request before entering a contract with you.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Setting up and managing services
              </p><p>We rely on performing a contract with you, or on our legitimate interests in managing a relationship with the organisation you represent.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Providing platform accounts and support
              </p><p>We rely on performing a contract with you, or on our legitimate interests in delivering and supporting services for your organisation.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Considering job applications
              </p><p>We rely on taking steps at your request before entering an employment contract, and on our legitimate interests in assessing candidates.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Protecting our website, systems and information
              </p><p>We rely on our legitimate interests in preventing misuse, maintaining security and investigating incidents.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Maintaining records and meeting legal requirements
              </p><p>We rely on compliance with legal obligations and, where applicable, our legitimate interests in managing our business and legal claims.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Sending relevant business marketing
              </p><p>We rely on consent where required, or on our legitimate interests where the law permits.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p className="policy-emphasis">Using optional analytics or advertising technologies, if introduced
              </p><p>We rely on your consent.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Where we rely on legitimate interests, we consider the purpose, necessity and impact of the processing on your rights.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>If information is necessary to arrange a booking, assess an application or provide a service, we will indicate this when collecting it. Without that information, we may be unable to complete your request.</p></div>
    ) },
    { heading: "5. Contact details", content: (
      <div><p>For privacy questions, concerns or requests, contact:</p><div className="policy-paragraph-gap" aria-hidden="true" /><p><strong>Email:
                </strong>{` `}<a href="mailto:hello@outsource.com">hello@outsource.com
                  </a><br /><strong>Post:
                </strong>{` Privacy enquiries, Outsource.com, `}<a href="https://www.google.com/maps/search/221+Bury+New+Road,+Manchester,+M45+8GW,+United+Kingdom?entry=gmail&source=g" target="_blank" rel="noreferrer">221 Bury New Road, Manchester, M45 8GW, United Kingdom
                  </a></p></div>
    ) },
    { heading: "6. Bookings and communications", content: (
      <div><p>We use Cal.com to support appointment booking. Information you submit when booking is used to arrange and manage your appointment and related communications.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>{`Cal.com also processes information as described in its own `}<a href="https://cal.com/privacy" target="_blank" rel="noreferrer">Privacy Policy
                  </a>.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>We use an AI-assisted telephone receptionist to help handle enquiries, take messages and assist with bookings. Where recording or transcription is enabled, we will provide appropriate information at the start of the call.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Please avoid sharing unnecessary sensitive information through booking forms or telephone messages.</p></div>
    ) },
    { heading: "7. Marketing and advertising", content: (
      <div><p>We may contact you about services relevant to your business where we have your consent or another lawful basis and the applicable marketing rules permit this.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>{`You can opt out at any time using the unsubscribe option in a marketing message or by emailing `}<a href="mailto:hello@outsource.com">hello@outsource.com
                  </a>.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Opting out of marketing does not prevent us from sending necessary messages about an enquiry, booking or existing service.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>We do not currently use analytics or advertising tracking on this website. If we introduce these tools, we will update our Cookie Policy and obtain consent before enabling optional tracking.</p></div>
    ) },
    { heading: "8. Who we share information with", content: (
      <div><p>We share personal information where necessary for the purposes described in this policy. Recipients may include:</p><div className="policy-paragraph-gap" aria-hidden="true" /><ul><li>Authorised members of our UK and Bangladesh teams.</li><li>Providers of website hosting, IT, cloud storage, communications, booking, security and platform services.</li><li>Professional advisers, including accountants, legal advisers and insurers.</li><li>Authorities or other parties where disclosure is required by law or necessary to establish, exercise or defend legal claims.</li><li>Parties involved in a proposed business restructuring or transfer, where appropriate confidentiality and data protection safeguards apply.</li></ul><div className="policy-paragraph-gap" aria-hidden="true" /><p>Where a provider processes personal information on our behalf, we require appropriate contractual protections.</p></div>
    ) },
    { heading: "9. International access and transfers`", content: (
      <div><p>Our operations include teams in the United Kingdom and Bangladesh. Authorised colleagues in Bangladesh may access personal information where necessary to respond to enquiries or deliver and support services.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Some service providers may also process information outside the United Kingdom.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Where this involves a restricted international transfer, we use an appropriate legal transfer mechanism. Depending on the circumstances, this may include UK adequacy regulations or approved contractual safeguards, together with any required assessments and additional protections.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>You can contact us for information about the safeguards relevant to your personal information and how to obtain a copy, subject to appropriate redactions.</p></div>
    ) },
    { heading: "10. How long we keep information", content: (
      <div><p>We keep personal information only for as long as necessary for the purpose for which it was collected.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>We determine retention according to the type of information, the reason we hold it, whether our relationship with you is ongoing, applicable legal requirements and any relevant complaint or legal claim.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>In particular:</p><div className="policy-paragraph-gap" aria-hidden="true" /><ul><li><strong>{`Enquiries and bookings: `}</strong>we retain information while handling your enquiry and any reasonably anticipated follow-up. Once the enquiry is closed, we assess whether there is a continuing business or legal reason to keep it.
                </li><li><strong>{`Client and business records: `}</strong>we retain relevant records during the relationship and afterwards for applicable accounting, tax and other legal requirements, and for relevant legal limitation periods.
                </li><li><strong>{`Recruitment information: `}</strong>we retain information for the recruitment process and any relevant period for resolving questions or claims arising from it. If we wish to keep your details for future vacancies, we will explain the proposed retention period separately.
                </li><li><strong>{`Platform accounts and activity: `}</strong>we retain information while access or service administration requires it, and afterwards only where necessary for security, contractual obligations or legal claims. Client-controlled information is handled under the relevant agreement.
                </li><li><strong>{`Marketing information: `}</strong>we retain contact information while there is a lawful and relevant basis to contact you. If you opt out, we may retain a limited suppression record to ensure we respect your preference.
                </li><li><strong>{`Security and technical records: `}</strong>retention is based on the time reasonably needed to detect and investigate incidents, with relevant records kept longer where an incident or dispute requires this.
                </li><li><strong>{`Cookie information: `}</strong>where used, storage periods depend on the technology concerned and will be explained in our Cookie Policy or cookie controls.
                </li></ul><div className="policy-paragraph-gap" aria-hidden="true" /><p>We review retained information and delete or anonymise it when it is no longer needed. Information subject to a legal preservation requirement may be retained until that requirement ends.</p></div>
    ) },
    { heading: "11. Protecting information", content: (
      <div><p>We use appropriate technical and organisational measures to protect personal information against unauthorised access, loss, misuse or disclosure.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Access is limited to people who need the information for their work and are subject to appropriate confidentiality requirements.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>No system or method of transmission can be guaranteed completely secure.</p></div>
    ) },
    { heading: "12. Your rights", content: (
      <div><p>Depending on the circumstances, you may have the right to:</p><div className="policy-paragraph-gap" aria-hidden="true" /><ul><li>Request access to your personal information.</li><li>Have inaccurate or incomplete information corrected.</li><li>Request deletion of information.</li><li>Request restrictions on how we use information.</li><li>Object to processing based on legitimate interests.</li><li>Object to direct marketing.</li><li>Receive certain information in a portable format.</li><li>Withdraw consent where we rely on it.</li></ul><div className="policy-paragraph-gap" aria-hidden="true" /><p>These rights are subject to applicable conditions and exemptions. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>{`To exercise your rights, email `}<a href="mailto:hello@outsource.com">hello@outsource.com
                  </a>. We may need information to verify your identity before responding.</p></div>
    ) },
    { heading: "13. Automated decisions", content: (
      <div><p>We do not use solely automated decision-making that produces legal or similarly significant effects on you.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Using an automated booking tool or AI-assisted receptionist does not, by itself, determine whether we enter a client relationship or offer employment.</p></div>
    ) },
    { heading: "15. Concerns and complaints", content: (
      <div><p>If you have a concern about how we handle your personal information, please contact us so we can investigate and respond.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>{`You also have the right to raise a complaint with the UK data protection regulator, the ICO. Further information is available at `}<a href="https://ico.org.uk/" target="_blank" rel="noreferrer">ico.org.uk
                  </a>.</p></div>
    ) },
    { heading: "16. Changes to this policy", content: (
      <div><p>We may update this policy to reflect changes to our activities, systems or legal requirements.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>The date above shows when it was last updated. Where required, we will bring significant changes to your attention.</p></div>
    ) }
    ],
  },
  cookies: {
    title: "Cookie Policy",
    updated: '8 October 2026',
    mobileIntro: "This policy explains how Outsource.com uses cookies and similar technologies and how you can manage your choices.",
    sections: [
    { heading: "1. About this policy", content: (
      <div><p>This policy explains our use of cookies and similar technologies, how third-party booking services are treated and how you can control cookies.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>For information about how we handle personal information, please read our <Link to="/privacy">Privacy Policy</Link>.</p></div>
    ) },
    { heading: "2. What are cookies?", content: (
      <div><p>Cookies are small files stored on your device when you visit a website.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Other technologies, such as local storage and tracking pixels, can also store information on your device or collect information about your interaction with a website. References to cookies in this policy include these similar technologies where relevant.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Some cookies last only for your browsing session. Others remain until they expire or are deleted.</p></div>
    ) },
    { heading: "3. Our current use", content: (
      <div><p>We do not currently use analytics or advertising tracking on this website.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Our booking link takes you to Cal.com, where its own cookies and privacy information apply.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>If we introduce additional cookies or similar technologies, we will update the relevant information before they are used and obtain consent where required.</p></div>
    ) },
    { heading: "4. Essential cookies", content: (
      <div><p>Where used, essential cookies support functions necessary to provide the website or a service you request. These may include security functions and remembering your cookie choices.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>We only treat a cookie as essential where its purpose meets the applicable legal exemption.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Essential cookies do not require consent where that exemption applies. You can block them through your browser, but doing so may affect the functions they support.</p></div>
    ) },
    { heading: "5. Booking through Cal.com", content: (
      <div><p>When you follow our external booking link, you leave Outsource.com and visit Cal.com.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Cal.com may use cookies or similar technologies on its own service. Cookie choices offered there are managed separately from choices made on our website.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Information you submit when booking is used to arrange and manage your appointment.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>{`You can read more in `}<a href="https://cal.com/privacy" target="_blank" rel="noreferrer">Cal.com’s Privacy Policy
                  </a>.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>If we introduce an embedded calendar, we will review its use of cookies and similar technologies and update this policy accordingly. Technologies requiring consent will not be enabled before the appropriate consent has been obtained.</p></div>
    ) },
    { heading: "6. Analytics cookies", content: (
      <div><p>We do not currently use analytics cookies.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>If introduced, optional analytics cookies will help us understand how visitors use the website and identify improvements.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Before enabling them, we will explain the relevant providers, purposes and storage periods and ask for your consent.</p></div>
    ) },
    { heading: "7. Advertising cookies", content: (
      <div><p>We do not currently use advertising cookies.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>If introduced, optional advertising cookies may help us measure whether adverts lead to website visits, bookings or enquiries.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>If we use cookies to support advertising based on previous visits to our website, we will explain that purpose and identify the relevant providers before enabling them.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>We will ask for consent before using optional advertising cookies.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Advertising on an external platform does not, by itself, mean that advertising cookies are installed on our website.</p></div>
    ) },
    { heading: "8. Your cookie choices", content: (
      <div><p>Where optional cookies are available, our cookie controls will offer:</p><div className="policy-paragraph-gap" aria-hidden="true" /><p><strong>Accept all:
                </strong>{` allow the optional cookies described at the time of your choice.`}</p><p><strong>Reject optional:
                </strong>{` keep optional cookies switched off, while allowing essential functions.`}</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Optional cookies will remain off unless you consent. Continuing to browse will not count as consent.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>{`You will be able to review available categories and change your choices through `}<strong>Manage cookies
                </strong>{` in the website footer.`}</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>An earlier choice will not be treated as blanket permission for new tracking purposes or providers that were not explained when you made that choice.</p></div>
    ) },
    { heading: "9. Changing or withdrawing consent", content: (
      <div><p>{`Where we use optional cookies, you will be able to change or withdraw consent through `}<strong>Manage cookies
                </strong>{` in the footer.`}</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Withdrawing consent will stop the associated optional tracking. We will remove consent-dependent storage where technically within our control. You can also remove stored cookies through your browser.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Withdrawal will not affect processing lawfully carried out before it.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Cookie choices apply to the browser and device on which you make them. You may need to choose again if you use another browser or device, clear stored information or if changes require fresh consent.</p></div>
    ) },
    { heading: "10. Storage periods", content: (
      <div><p>Where cookies or similar technologies are used, their storage periods will be provided in this policy or through the cookie controls.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Cookies used by Cal.com on its own website are subject to the information and controls provided by Cal.com.</p></div>
    ) },
    { heading: "11. Browser controls", content: (
      <div><p>Most browsers allow you to view, delete or block cookies through their settings.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Blocking cookies may affect the functions they support. Browser controls apply independently of any cookie controls provided on our website.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Choices made on Outsource.com do not automatically apply to external websites you visit through our links.</p></div>
    ) },
    { heading: "12. Changes to this policy", content: (
      <div><p>We may update this policy when our website, providers or use of cookies changes.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>Before introducing new optional tracking, we will update the relevant information and obtain any consent required for that use.</p><div className="policy-paragraph-gap" aria-hidden="true" /><p>The date above shows when this policy was last updated.</p></div>
    ) },
    { heading: "13. Contact us", content: (
      <p>{`If you have questions about this policy, email `}<a href="mailto:hello@outsource.com">hello@outsource.com
                </a>.</p>
    ) }
    ],
  }
};
