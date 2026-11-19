import { instituteConfig } from '../src/config/institute.config.js';

console.log('Testing instituteConfig integrity...');

const assertions = [
  ['identity.name exists', !!instituteConfig.identity?.name],
  ['identity.tagline exists', !!instituteConfig.identity?.tagline],
  ['activeTheme is valid', ['theme-a', 'theme-b', 'theme-c'].includes(instituteConfig.activeTheme)],
  ['contact.whatsappNumber exists', !!instituteConfig.contact?.whatsappNumber],
  ['contact.address exists', !!instituteConfig.contact?.address?.city],
  ['brochure.pdfUrl exists', instituteConfig.brochure?.pdfUrl !== undefined],
  ['stats has 4 items', instituteConfig.stats?.length === 4],
  ['courses has items', instituteConfig.courses?.length >= 5],
  ['courseCategories has items', instituteConfig.courseCategories?.length >= 5],
  ['faculty has items', instituteConfig.faculty?.length >= 4],
  ['resultsDisclaimer exists', !!instituteConfig.resultsDisclaimer],
  ['toppers has items', instituteConfig.toppers?.length >= 4],
  ['gallery has items', instituteConfig.gallery?.length >= 5],
  ['testimonials has items', instituteConfig.testimonials?.length >= 3],
  ['faqs has items', instituteConfig.faqs?.length >= 5],
  ['whatsappTemplates.general exists', typeof instituteConfig.whatsappTemplates.general === 'string'],
  ['whatsappTemplates.courseEnquiry works', typeof instituteConfig.whatsappTemplates.courseEnquiry('Test') === 'string'],
  ['whatsappTemplates.demoClass works', typeof instituteConfig.whatsappTemplates.demoClass('Test') === 'string'],
  ['whatsappTemplates.admissionForm works', typeof instituteConfig.whatsappTemplates.admissionForm({
    name: 'Rahul',
    phone: '9876543210',
    course: 'JEE',
    batch: 'Morning',
    isDemo: true
  }) === 'string'],
];

let failed = 0;
for (const [desc, result] of assertions) {
  if (result) {
    console.log(`  ✓ ${desc}`);
  } else {
    console.error(`  ✗ FAIL: ${desc}`);
    failed++;
  }
}

if (failed === 0) {
  console.log('\nAll 19 integrity checks PASSED successfully!');
  process.exit(0);
} else {
  console.error(`\n${failed} checks failed.`);
  process.exit(1);
}
