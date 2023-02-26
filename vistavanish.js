// Get the items to hide by their text
const items = [
  'SiteBuilder',
  'SEO Tools',
  'Backups',
  'Select PHP Version',
  'Free FTP Software',
  'Change Language',
  'PostgreSQL Databases',
  'Remote MySQL',
  'Email Accounts',
  'Forwarders',
  'Webmail',
  'Error Logs',
  'General PHP Info'
];

// Loop through the items to hide them
items.forEach(itemToHide => {
  const element = [...document.querySelectorAll('.itemTextWrapper')].find(el => el.textContent.includes(itemToHide));
  if (element) {
    element.closest('.item').style.display = 'none';
  }
});

// Hide the sidebar
const sidebar = document.getElementById('sidebar');
if (sidebar) {
  sidebar.style.display = 'none';
}
