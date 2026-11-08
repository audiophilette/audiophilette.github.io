(() => {
  const root = document.documentElement;
  let preference = 'system';
  try {
    const saved = localStorage.getItem('color-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (_) { /* Device preference works when storage is unavailable. */ }

  function apply(value) {
    if (value === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', value);
  }
  apply(preference);

  document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('theme-select');
    if (!select) return;
    select.value = preference;
    select.closest('label').hidden = false;
    select.addEventListener('change', () => {
      apply(select.value);
      try {
        if (select.value === 'system') localStorage.removeItem('color-theme');
        else localStorage.setItem('color-theme', select.value);
      } catch (_) { /* The current page still switches without storage. */ }
    });
  });
})();
