const btn = document.getElementById('demoBtn');
const output = document.getElementById('output');

btn?.addEventListener('click', () => {
  const now = new Date();
  output.textContent = `Interaction OK — rendu local validé à ${now.toLocaleTimeString('fr-FR')}.`;
});
