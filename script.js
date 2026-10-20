const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.getElementById('year');
const copyEmailButton = document.getElementById('copy-email-button');
const emailCopyStatus = document.getElementById('email-copy-status');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (copyEmailButton && emailCopyStatus) {
  const email = 'mukesh.sahu05mar@gmail.com';
  const originalButtonText = copyEmailButton.textContent;

  copyEmailButton.addEventListener('click', async () => {
    let copied = false;

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API unavailable');
      }

      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      const emailField = document.createElement('textarea');
      emailField.value = email;
      emailField.setAttribute('readonly', '');
      emailField.style.position = 'fixed';
      emailField.style.opacity = '0';

      try {
        document.body.appendChild(emailField);
        emailField.select();
        copied = document.execCommand('copy');
      } catch {
        copied = false;
      } finally {
        emailField.remove();
      }
    }

    if (copied) {
      copyEmailButton.textContent = 'Copied';
      emailCopyStatus.textContent = 'Email copied to clipboard.';
      window.setTimeout(() => {
        copyEmailButton.textContent = originalButtonText;
      }, 2000);
    } else {
      emailCopyStatus.textContent = 'Could not copy email. Please use Send email.';
    }
  });
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
