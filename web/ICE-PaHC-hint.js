"use strict";
(function () {
  var codemirror = CodeMirror(document.body, {
    value: '// CodeMirror Addon hint/show-hint.js sample.\n// Snippets are Ctrl-L or Cmd-L.',
    mode: 'text/javascript',
    lineNumbers: true,
    styleActiveLine: true,
    theme: 'solarized dark' });

  // keymap
  codemirror.setOption('extraKeys', {
    'Cmd-L': function () {
      snippet();
    },
    'Ctrl-L': function () {
      snippet();
    } });

  // 
  var snippets = [
  { text: 'N-N', displayText: 'N-N - noun, nominative' },
  { text: 'N-A', displayText: 'N-A - noun, accusative' },
  { text: 'N-D', displayText: 'N-D - noun, dative' },
  { text: 'N-G', displayText: 'N-A - noun, genetive' },
  { text: 'NS-N', displayText: 'NS-N - noun, plural, nominative' },
  { text: 'NS-A', displayText: 'NS-A - noun, plural, accusative' },
  { text: 'NS-D', displayText: 'NS-D - noun, plural, dative' },
  { text: 'NS-G', displayText: 'NS-G - noun, plural, genitive' },
  { text: 'NPR-N', displayText: 'NPR-N - noun, plural, nominative' },
  { text: 'NPR-A', displayText: 'NPR-A - noun, plural, accusative' },
  { text: 'NPR-D', displayText: 'NPR-D - noun, plural, dative' },
  { text: 'NPR-G', displayText: 'NPR-G - noun, plural, genitive' },
  { text: 'NPRS-N', displayText: 'NPRS-N - noun, proper, plural, nominative' },
  { text: 'NPRS-A', displayText: 'NPRS-A - noun, proper, plural, accusative' },
  { text: 'NPRS-D', displayText: 'NPRS-D - noun, proper, plural, dative' },
  { text: 'NPRS-G', displayText: 'NPRS-G - noun, proper, plural, genitive' },
  { text: 'ONE', displayText: 'form of EINN' },
  { text: 'ONES', displayText: 'plural of EINN' },
  { text: 'D-N', displayText: 'determiner, nominiative' },
  { text: 'D-A', displayText: 'determiner, accusative' },
  { text: 'D-D', displayText: 'determiner, dative' },
  { text: 'D-G', displayText: 'determiner, genitive' },
  { text: 'WD-N', displayText: 'wh-determiner, nominiative' },
  { text: 'WD-A', displayText: 'wh-determiner, accusative' },
  { text: 'WD-D', displayText: 'wh-determiner, dative' },
  { text: 'WD-G', displayText: 'wh-determiner, genitive' },
  { text: 'PRO-N', displayText: 'pronoun, nominiative' },
  { text: 'PRO-A', displayText: 'pronoun, accusative' },
  { text: 'PRO-D', displayText: 'pronoun, dative' },
  { text: 'PRO-G', displayText: 'pronoun, genitive' },
  { text: 'WPRO-N', displayText: 'wh-pronoun, nominiative' },
  { text: 'WPRO-A', displayText: 'wh-pronoun, accusative' },
  { text: 'WPRO-D', displayText: 'wh-pronoun, dative' },
  { text: 'WPRO-G', displayText: 'wh-pronoun, genitive' },
  { text: 'ADJ-N', displayText: 'adjective (positive), nominiative' },
  { text: 'ADJ-A', displayText: 'adjective (positive), accusative' },
  { text: 'ADJ-D', displayText: 'adjective (positive), dative' },
  { text: 'ADJ-G', displayText: 'adjective (positive), genitive' },
  { text: 'ADJR-N', displayText: 'adjective, correlative, nominiative' },
  { text: 'ADJR-A', displayText: 'adjective, correlative, accusative' },
  { text: 'ADJR-D', displayText: 'adjective, correlative, dative' },
  { text: 'ADJR-G', displayText: 'adjective, correlative, genitive' },
  { text: 'ADJS-N', displayText: 'adjective, superlative, nominiative' },
  { text: 'ADJS-A', displayText: 'adjective, superlative, accusative' },
  { text: 'ADJS-D', displayText: 'adjective, superlative, dative' },
  { text: 'ADJS-G', displayText: 'adjective, superlative, genitive' },
  { text: 'WADJ-N', displayText: 'wh-adjective, nominiative' },
  { text: 'WADJ-A', displayText: 'wh-adjective, accusative' },
  { text: 'WADJ-D', displayText: 'wh-adjective, dative' },
  { text: 'WADJ-G', displayText: 'wh-adjective, genitive' },
  { text: 'SUCH-N', displayText: 's-adjective, nominiative' },
  { text: 'SUCH-A', displayText: 's-adjective, accusative' },
  { text: 'SUCH-D', displayText: 's-adjective, dative' },
  { text: 'SUCH-G', displayText: 's-adjective, genitive' },
  { text: 'Q-N', displayText: 'quantifier (positive), nominiative' },
  { text: 'Q-A', displayText: 'quantifier (positive), accusative' },
  { text: 'Q-D', displayText: 'quantifier (positive), dative' },
  { text: 'Q-G', displayText: 'quantifier (positive), genitive' },
  { text: 'QR-N', displayText: 'correlative, nominiative' },
  { text: 'QR-A', displayText: 'correlative, accusative' },
  { text: 'QR-D', displayText: 'correlative, dative' },
  { text: 'QR-G', displayText: 'correlative, genitive' },
  { text: 'QS-N', displayText: 'superlative, nominiative' },
  { text: 'QS-A', displayText: 'superlative, accusative' },
  { text: 'QS-D', displayText: 'superlative, dative' },
  { text: 'QS-G', displayText: 'superlative, genitive' },
  { text: 'WQ', displayText: 'wh-quantifier, nominiative' },
  { text: 'WQ', displayText: 'wh-quantifier, accusative' },
  { text: 'WQ', displayText: 'wh-quantifier, dative' },
  { text: 'WQ', displayText: 'wh-quantifier, genitive' },
  { text: 'ADV', displayText: 'adverb' }.
  { text: 'WADV', displayText: 'adverb' },
  { text: 'P', displayText: 'prepositions' },
  { text: 'RP', displayText: 'adverbial particles' },
  { text: 'RPX', displayText: 'prep object omitted' },
  { text: 'BEPI', displayText: 'vera - be, present, indicative' },
  { text: 'BEPS', displayText: 'vera - be, present, subjunctive' },
  { text: 'BEDI', displayText: 'vera - be, past, indicative' },
  { text: 'BEDS', displayText: 'vera - be, past, subjunctive' },
  { text: 'BEI', displayText: 'vera - be, imperative' },
  { text: 'BAG', displayText: 'vera - be, present, participle' },
  { text: 'BEN', displayText: 'vera - be, past, participle' },
  { text: 'BAN', displayText: 'vera - be, passive, participle' },
  { text: 'DOPI', displayText: 'gera - do, present, indicative' },
  { text: 'DOPS', displayText: 'gera - do, present, subjunctive' },
  { text: 'DODI', displayText: 'gera - do, past, indicative' },
  { text: 'DODS', displayText: 'gera - do, past, subjunctive' },
  { text: 'DOI', displayText: 'gera - do, imperative' },
  { text: 'DAG', displayText: 'gera - do, present, participle' },
  { text: 'DON', displayText: 'gera - do, past, participle' },
  { text: 'DAN', displayText: 'gera - do, passive, participle' },
  { text: 'HVPI', displayText: 'hafa - have, present, indicative' },
  { text: 'HVPS', displayText: 'hafa - have, present, subjunctive' },
  { text: 'HVDI', displayText: 'hafa - have, past, indicative' },
  { text: 'HVDS', displayText: 'hafa - have, past, subjunctive' },
  { text: 'HVI', displayText: 'hafa - have, imperative' },
  { text: 'HAG', displayText: 'hafa - have, present, participle' },
  { text: 'HVN', displayText: 'hafa - have, past, participle' },
  { text: 'HAN', displayText: 'hafa - have, passive, participle' },
  { text: 'MDPI', displayText: 'modal, present, indicative' },
  { text: 'MDPS', displayText: 'modal, present, subjunctive' },
  { text: 'MDDI', displayText: 'modal, past, indicative' },
  { text: 'MDDS', displayText: 'modal, past, subjunctive' },
  { text: 'MDI', displayText: 'modal, imperative' },
  { text: 'MAG', displayText: 'modal, present, participle' },
  { text: 'MDN', displayText: 'modal, past, participle' },
  { text: 'MAN', displayText: 'modal, passive, participle' },
  { text: 'RDPI', displayText: 'verða - become, present, indicative' },
  { text: 'RDPS', displayText: 'verða - become, present, subjunctive' },
  { text: 'RDDI', displayText: 'verða - become, past, indicative' },
  { text: 'RDDS', displayText: 'verða - become, past, subjunctive' },
  { text: 'RDI', displayText: 'verða - become, imperative' },
  { text: 'RAG', displayText: 'verða - become, present, participle' },
  { text: 'RDN', displayText: 'verða - become, past, participle' },
  { text: 'RAN', displayText: 'verða - become, passive, participle' },
  { text: 'VBPI', displayText: 'modal, present, indicative' },
  { text: 'VBPS', displayText: 'modal, present, subjunctive' },
  { text: 'VBDI', displayText: 'modal, past, indicative' },
  { text: 'VBDS', displayText: 'modal, past, subjunctive' },
  { text: 'VBI', displayText: 'modal, imperative' },
  { text: 'VAG', displayText: 'modal, present, participle' },
  { text: 'VBN', displayText: 'modal, past, participle' },
  { text: 'VAN', displayText: 'modal, passive, participle' },
  { text: 'VBP', displayText: 'verb - present tense' }.
  { text: 'VBD', displayText: 'verb - past tense' }.
  { text: 'VBN', displayText: 'verb - past participle' }.
  { text: 'VAN', displayText: 'passive participle' }.
  { text: 'VAG', displayText: 'progressive participle' }.
  { text: 'MD', displayText: 'modals' }.
  { text: 'RD', displayText: 'verða - be' }.



  'BEPI','BEPS','BEDI','BEDS','BEI','BAG','BEN','BAN','BE.*','B.*',
'DOPI','DOPS','DODI','DODS','DOI','DAG','DON','DAN','DO.*','D.*',
'HVPI','HVPS','HVDI','HVDS','HVI','HAG','HVN','HAN','HV.*','H.*',
'MDPI','MDPS','MDDI','MDDS','MDI','MAG','MDN','MAN','MD.*','M.*',
'RDPI','RDPS','RDDI','RDDS','RDI','RAG','RDN','RAN','RD.*','R.*',
'VBPI','VBPS','VBDI','VBDS','VBI','VAG','VBN','VAN','VBP','VBD','VBN','VAN','VAG','VB.*','V.*'
'.*PI','.*PS','.*DI','.*DS','.*DI',

'MD','HV','RD','LS','FW'
  
  


];

  function snippet() {
    CodeMirror.showHint(codemirror, function () {
      var cursor = codemirror.getCursor();
      var token = codemirror.getTokenAt(cursor);
      var start = token.start;
      var end = cursor.ch;
      var line = cursor.line;
      var currentWord = token.string;
      var list = snippets.filter(function (item) {
        return item.text.indexOf(currentWord) >= 0;
      });
      return {
        list: list.length ? list : snippets,
        from: CodeMirror.Pos(line, start),
        to: CodeMirror.Pos(line, end) };

    }, { completeSingle: false });
  }
})();