/**
 * 🎃 Halloween with FlowForest – crea il modulo Google di conferma partecipazione.
 *
 * Come usarlo:
 *  1. Vai su https://script.google.com → "Nuovo progetto".
 *  2. Incolla tutto questo file (sostituendo il contenuto di Code.gs).
 *  3. Imposta PAYMENT_URL qui sotto con il tuo link di pagamento (PayPal.me, Satispay, Stripe...).
 *  4. Premi ▶ Esegui su creaModuloHalloween e concedi i permessi richiesti.
 *  5. Apri il menu Visualizza → Log di esecuzione: trovi il link per modificare il modulo
 *     e il link da mandare agli invitati.
 */

// Link per pagare la quota: mostrato dopo l'invio del modulo.
const PAYMENT_URL = 'INCOLLA-QUI-IL-LINK-DI-PAGAMENTO';

function creaModuloHalloween() {
  const form = FormApp.create('🎃 Halloween with FlowForest – Conferma partecipazione');

  form
    .setDescription(
      'Festa in maschera a tema Scary Movie (horror o parodia, a vostra scelta) nel nostro bosco. ' +
      'Dalle 18:00 apericena al tramonto, poi musica, attività e bar per tutta la sera. ' +
      'Chi vuole può dormire nella zona tende. ' +
      'Compila il modulo per confermare: dopo l\'invio trovi il link per pagare la quota. ' +
      'La partecipazione è confermata solo col pagamento.'
    )
    .setConfirmationMessage(
      '👻 Grazie, ci siamo quasi!\n\n' +
      '🎃 Ultimo passo: paga la quota da questo link per confermare il tuo posto:\n' +
      PAYMENT_URL + '\n\n' +
      'La partecipazione è confermata solo col pagamento. ' +
      'Ci vediamo nel bosco… se hai il coraggio 🦇🕸️'
    )
    .setCollectEmail(false)
    .setShowLinkToRespondAgain(false)
    .setAllowResponseEdits(false);

  // 1. Nome e cognome
  form.addTextItem()
    .setTitle('Nome e cognome')
    .setRequired(true);

  // 2. Numero di telefono
  form.addTextItem()
    .setTitle('Numero di telefono')
    .setRequired(true);

  // 3. Formula scelta
  form.addMultipleChoiceItem()
    .setTitle('Formula scelta')
    .setChoiceValues([
      '5€ – Apericena al tramonto',
      '15€ – Apericena + 2 drink inclusi'
    ])
    .setRequired(true);

  // 4. Dormire
  form.addMultipleChoiceItem()
    .setTitle('Ti fermi a dormire?')
    .setChoiceValues([
      'Sì, porto la mia tenda',
      'Sì, mi serve posto nella tenda grande',
      'No'
    ])
    .setRequired(true);

  // 5. Intolleranze / allergie
  form.addTextItem()
    .setTitle('Intolleranze o allergie alimentari?')
    .setRequired(false);

  // 6. Accompagnatori
  form.addTextItem()
    .setTitle('Vieni con qualcuno che non è nel gruppo? Se sì, indica chi')
    .setRequired(false);

  Logger.log('Modifica il modulo: ' + form.getEditUrl());
  Logger.log('Link per gli invitati: ' + form.getPublishedUrl());
}
