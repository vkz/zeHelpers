# zeHelpers
zeRusski's little helpers

```shell
> npm install ze-helpers
```

```js
var pp = require("ze-helpers").prettyPrint;
pp(ast, {prompt: "ast"}); //where ast is some object

// or you can write into a string
pp(ast, {stringify: true});
```

Sample output looks like this:
```js
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
                                                                       ast 
[ 'stmts',
  [ 'stmt',
    [ 'spacesAndComments', [] ],
    [ 'template',
      [ [ 'commaList',
          [ 'pred',
            [ 'block',
              [ [ 'spacesAndComments', [] ],
                [ 'name', 'block' ],
                [ 'spacesAndComments', [ [ 'spaces', ' ' ] ] ],
                [ 'value', [ 'string', 'logo' ] ],
                [ 'spacesAndComments', [ [ 'spaces', ' ' ] ] ] ] ] ] ],
        [ 'spacesAndComments', [] ],
        [ 'templateBlock',
          [ 'stmts',
            [ 'stmt',
              [ 'spacesAndComments', [ [ 'spaces', '\n  ' ] ] ],
              [ 'template',
                [ [ 'commaList',
                    [ 'pred',
                      [ 'stdMode',
                        [ 'spacesAndComments', [] ],
                        [ 'name', 'tag' ],
                        [ 'spacesAndComments', [] ] ] ] ],
                  [ 'spacesAndComments', [] ],
                  [ 'body',
                    [ [ 'spacesAndComments', [ [ 'spaces', ' ' ] ] ],
                      [ 'literal', [ 'string', '\'', [ 'i', 'm', 'g' ] ] ],
                      [ 'spacesAndComments',
                        [ [ 'spaces', '                                 ' ],
                          [ 'comment', '// end of line comment' ],
                          [ 'spaces', '\n  ' ] ] ] ] ] ] ],
              [ 'stmtEnd' ],
              [ 'spacesAndComments', [] ] ],
            [ 'stmt',
              [ 'spacesAndComments', [] ],
              [ 'template',
                [ [ 'commaList',
                    [ 'pred',
                      [ 'stdMode',
                        [ 'spacesAndComments', [] ],
                        [ 'name', 'attrs' ],
                        [ 'spacesAndComments', [] ] ] ] ],
                  [ 'spacesAndComments', [] ],
                  [ 'body',
                    [ [ 'spacesAndComments', [ [ 'spaces', ' ' ] ] ],
                      [ 'literal',
                        [ 'bracketedExpr',
                          [ 'spacesAndComments', [] ],
                          [ 'obj',
                            [ 'commaList',
                              [ 'objItem',
                                [ 'spacesAndComments', [] ],
                                [ 'name', 'alt' ],
                                [ 'spacesAndComments', [] ],
                                [ 'spacesAndComments', [ [ 'spaces', ' ' ] ] ],
                                [ 'string', '\'', [ 'l', 'o', 'g', 'o' ] ],
                                [ 'spacesAndComments', [] ] ],
                              [ 'objItem',
                                [ 'spacesAndComments', [ [ 'spaces', ' ' ] ] ],
                                [ 'name', 'href' ],
                                [ 'spacesAndComments', [] ],
                                [ 'spacesAndComments', [ [ 'spaces', ' ' ] ] ],
                                [ 'string',
                                  '\'',
                                  [ 'h', 't', 't', 'p', ':', '/', '/', '.', '.', '.' ] ],
                                [ 'spacesAndComments', [] ] ] ] ],
                          [ 'spacesAndComments', [] ] ] ],
                      [ 'spacesAndComments',
                        [ [ 'spaces', ' ' ],
                          [ 'comment', '// another comment' ],
                          [ 'spaces', '\n' ] ] ] ] ] ] ],
              [ 'stmtEnd', [ 'spacesAndComments', [] ] ],
              [ 'spacesAndComments', [] ] ] ] ] ] ],
    [ 'stmtEnd', [ 'spacesAndComments', [] ] ],
    [ 'spacesAndComments', [] ] ] ]
 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 ```
