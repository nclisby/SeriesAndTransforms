var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Homepage    copyright  "
},
{
  "id": "sec-what-is-mathematics",
  "level": "1",
  "url": "sec-what-is-mathematics.html",
  "type": "Section",
  "number": "1.1",
  "title": "What is mathematics?",
  "body": " What is mathematics?  There is no  "
},
{
  "id": "sec-why-study-mathematics",
  "level": "1",
  "url": "sec-why-study-mathematics.html",
  "type": "Section",
  "number": "1.2",
  "title": "Why study mathematics?",
  "body": " Why study mathematics?  Superpower.  Useful, unreasonable effectiveness of mathematics.  "
},
{
  "id": "sec-the-power-of-abstraction",
  "level": "1",
  "url": "sec-the-power-of-abstraction.html",
  "type": "Section",
  "number": "1.3",
  "title": "The power of abstraction",
  "body": " The power of abstraction  Text of section.  "
},
{
  "id": "sec-formalism-and-proof",
  "level": "1",
  "url": "sec-formalism-and-proof.html",
  "type": "Section",
  "number": "1.4",
  "title": "Formalism and proof",
  "body": " Formalism and proof  Text of section.  "
},
{
  "id": "sec-what-is-a-mathematician",
  "level": "1",
  "url": "sec-what-is-a-mathematician.html",
  "type": "Section",
  "number": "1.5",
  "title": "What is a mathematician?",
  "body": " What is a mathematician?  Text of section.  "
},
{
  "id": "sec-overview-of-series-and-transforms",
  "level": "1",
  "url": "sec-overview-of-series-and-transforms.html",
  "type": "Section",
  "number": "1.6",
  "title": "Overview of Series and Transforms",
  "body": " Overview of Series and Transforms        "
},
{
  "id": "ch-logic-and-mathematical-objects",
  "level": "1",
  "url": "ch-logic-and-mathematical-objects.html",
  "type": "Chapter",
  "number": "2",
  "title": "Logic and mathematical objects",
  "body": " Logic and mathematical objects  "
},
{
  "id": "ch-methods-of-proof",
  "level": "1",
  "url": "ch-methods-of-proof.html",
  "type": "Chapter",
  "number": "3",
  "title": "Methods of proof",
  "body": " Methods of proof  "
},
{
  "id": "ch-cardinality",
  "level": "1",
  "url": "ch-cardinality.html",
  "type": "Chapter",
  "number": "4",
  "title": "Cardinality",
  "body": " Cardinality  "
},
{
  "id": "ch-sequences",
  "level": "1",
  "url": "ch-sequences.html",
  "type": "Chapter",
  "number": "5",
  "title": "Sequences",
  "body": " Sequences  "
},
{
  "id": "ch-sequences-of-functions",
  "level": "1",
  "url": "ch-sequences-of-functions.html",
  "type": "Chapter",
  "number": "6",
  "title": "Sequences of functions",
  "body": " Sequences of functions  "
},
{
  "id": "ch-series",
  "level": "1",
  "url": "ch-series.html",
  "type": "Chapter",
  "number": "7",
  "title": "Series",
  "body": " Series  "
},
{
  "id": "ch-series-of-functions",
  "level": "1",
  "url": "ch-series-of-functions.html",
  "type": "Chapter",
  "number": "8",
  "title": "Series of functions",
  "body": " Series of functions  "
},
{
  "id": "ch-integration",
  "level": "1",
  "url": "ch-integration.html",
  "type": "Chapter",
  "number": "9",
  "title": "Integration",
  "body": " Integration  "
},
{
  "id": "ch-vector-spaces",
  "level": "1",
  "url": "ch-vector-spaces.html",
  "type": "Chapter",
  "number": "10",
  "title": "Vector spaces",
  "body": " Vector spaces  "
},
{
  "id": "ch-fourier-series",
  "level": "1",
  "url": "ch-fourier-series.html",
  "type": "Chapter",
  "number": "11",
  "title": "Fourier series",
  "body": " Fourier series  "
},
{
  "id": "ch-fourier-transform",
  "level": "1",
  "url": "ch-fourier-transform.html",
  "type": "Chapter",
  "number": "12",
  "title": "Fourier transform",
  "body": " Fourier transform  "
},
{
  "id": "ch-laplace-transform",
  "level": "1",
  "url": "ch-laplace-transform.html",
  "type": "Chapter",
  "number": "13",
  "title": "Laplace transform",
  "body": " Laplace transform  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})