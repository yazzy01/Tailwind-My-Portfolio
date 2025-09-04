/**
 * Script to fix duplicated sections in the portfolio HTML file
 * This will identify and remove duplicated sections after the Contact section
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Running duplicate section fixer...');
  
  // Fix section order and remove duplicates
  fixSectionOrder();
  
  // Fix any duplicate elements within sections
  removeDuplicateElements();
  
  console.log('Duplicate section fixing complete!');
});

/**
 * Fixes the order of sections and removes duplicates
 */
function fixSectionOrder() {
  // Get all sections
  const sections = document.querySelectorAll('section');
  const sectionIds = new Set();
  const duplicateSections = [];
  
  // Find duplicate sections
  sections.forEach(section => {
    const id = section.id;
    if (id && sectionIds.has(id)) {
      console.log(`Found duplicate section: ${id}`);
      duplicateSections.push(section);
    } else if (id) {
      sectionIds.add(id);
    }
  });
  
  // Remove duplicate sections
  duplicateSections.forEach(section => {
    console.log(`Removing duplicate section: ${section.id}`);
    section.remove();
  });
  
  // Check for sections after contact that should be before it
  const contactSection = document.getElementById('contact');
  const skillsSection = document.getElementById('skills');
  const portfolioSection = document.getElementById('portfolio');
  const aboutSection = document.getElementById('about');
  
  // Correct section order if needed
  if (contactSection && skillsSection && 
      contactSection.compareDocumentPosition(skillsSection) & Node.DOCUMENT_POSITION_FOLLOWING) {
    console.log('Skills section is after Contact section - fixing order');
    
    // Get the parent element
    const parent = contactSection.parentNode;
    
    // Move skills section before portfolio section
    if (portfolioSection) {
      parent.insertBefore(skillsSection, portfolioSection);
    } else if (aboutSection) {
      // If portfolio doesn't exist, insert after about
      aboutSection.after(skillsSection);
    }
  }
}

/**
 * Removes duplicate elements within sections
 */
function removeDuplicateElements() {
  // Fix duplicate contact info
  const contactSection = document.getElementById('contact');
  
  if (contactSection) {
    // Check for duplicate headers
    const contactHeaders = contactSection.querySelectorAll('.flex.flex-col.items-center.mb-16');
    if (contactHeaders.length > 1) {
      console.log(`Found ${contactHeaders.length - 1} duplicate contact headers`);
      for (let i = 1; i < contactHeaders.length; i++) {
        contactHeaders[i].remove();
      }
    }
    
    // Check for duplicate contact info sections
    const contactInfos = contactSection.querySelectorAll('.lg\\:col-span-5');
    if (contactInfos.length > 1) {
      console.log(`Found ${contactInfos.length - 1} duplicate contact info sections`);
      for (let i = 1; i < contactInfos.length; i++) {
        contactInfos[i].remove();
      }
    }
    
    // Check for duplicate contact forms
    const contactForms = contactSection.querySelectorAll('.lg\\:col-span-7');
    if (contactForms.length > 1) {
      console.log(`Found ${contactForms.length - 1} duplicate contact form sections`);
      for (let i = 1; i < contactForms.length; i++) {
        contactForms[i].remove();
      }
    }
  }
}
