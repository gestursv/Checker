(function () {

  const codemirror = CodeMirror(document.body, {
    value: '// CodeMirror Addon hint/show-hint.js sample.\n// Snippets are Ctrl-E or Cmd-E.',
    mode: 'text/javascript',
    lineNumbers: true,
    styleActiveLine: true,
    theme: 'solarized dark'
  })

  // keymap を指定
  codemirror.setOption('extraKeys', {
    'Cmd-E': function() {
      snippet()
    },
    'Ctrl-E': function() {
      snippet()
    }
  })

  // スニペットの配列
  const snippets: any[] = [
    { text: 'N-N', displayText: 'N-N - noun, nominative' },
    { text: 'N-A', displayText: 'N-A - noun, accusative' },
    { text: 'N-D', displayText: 'N-D - noun, dative' },
    { text: 'N-G', displayText: 'N-A - noun, genetive' },
    { text: 'NS-A', displayText: 'NS-A - noun, plural, accusative' },

    { text: 'var', displayText: 'var declarations' },
  ]

  N-N - noun, nominative
  NS-A - noun, plural, accusative
  NPR-D - noun, proper, dative
  NPRS-G - non, proper, plural, genitive


  function snippet(): void {
    CodeMirror.showHint(codemirror, function (): any {
      const cursor = codemirror.getCursor()
      const token = codemirror.getTokenAt(cursor)
      const start: number = token.start
      const end: number = cursor.ch
      const line: number = cursor.line
      const currentWord: string = token.string

      // 入力した文字列をスニペット配列から探す
      const list: any[] = snippets.filter(function (item): boolean {
        return item.text.indexOf(currentWord) >= 0
      })

      return {
        list: list.length ? list : snippets,
        from: CodeMirror.Pos(line, start),
        to: CodeMirror.Pos(line, end)
      }
    }, { completeSingle: false })
  }
})()
