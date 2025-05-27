function calcolaRata() {
  const P = parseFloat(document.getElementById("amount").value);
  const n = parseInt(document.getElementById("years").value) * 12;
  const annualRate = parseFloat(document.getElementById("rate").value) / 100;
  const r = annualRate / 12;

  if (isNaN(P) || isNaN(n) || isNaN(r)) {
    document.getElementById("result").innerText = "Inserisci tutti i valori correttamente.";
    return;
  }

  const rata = (P * r) / (1 - Math.pow(1 + r, -n));
  document.getElementById("result").innerText = `La rata mensile stimata è: € ${rata.toFixed(2)}`;
}

function vaiARisultati() {
  const P = parseFloat(document.getElementById("amount").value);
  const annualRate = parseFloat(document.getElementById("rate").value);

  if (isNaN(P) || isNaN(annualRate)) {
    alert("Inserisci tutti i valori correttamente.");
    return;
  }

  // Passa i dati tramite query string
  window.location.href = `risultati.html?amount=${encodeURIComponent(P)}&rate=${encodeURIComponent(annualRate)}`;
}