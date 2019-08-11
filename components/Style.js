function SiteStyle() {
  return (
    <style global jsx>
      {`
  body {
      background-color: #333;
      color: #DDD;
      font-size: 1em;
      font-family: "Courier New", Courier, monospace;
  }
  a {
      color: #88FF88;
      text-decoration: none;
  }
  a:hover {
      background-color: #2B2B2B;
      text-decoration: none;
  }
  a:link {
      color: #88FF88;
  }
  a:visited {
      color: #8888FF;
  }
  h1 {
      color: #FFFF88;
      font-size: 3em;
      //font-family: 'Times New Roman', 'Times', serif;
      text-transform: Capitalize;
  }
  h2 {
      color: #FF8844;
      font-size: 2.5em;
  }
  h3 {
      color: #FF8866;
      font-size: 2em;
  }
  h4 {
      color: #FF8888;
      font-size: 1.75em;
  }
  h5 {
      color: #FF88AA;
      font-size: 1.5em;
  }
  h6 {
      color: #FF88DD;
      font-size: 1.25em;
  }

  div h1:not(:first-child), h2:not(:first-child) {
      border-top-width: 1px;
      border-top-style: solid;
      border-color: #AAA;
      padding-top: 1em;
  }
  main, header, footer {
      margin-left: auto;
      margin-right: auto;
      padding: 0px;
  }
  .inner {
      padding: 20px;
      margin: 10px;
      border-width: 1px;
      border-style: solid;
      border-color: #808080;
      box-shadow: 5px 8px 8px #222;
  }
  .outer {
      padding: 0px;
      margin: 0px;
  }
  header, nav, menu {
      padding: 0px;
  }


  main {
      max-width: 1000px;
  }
  .page {
      margin: 10px;
  }
  .page-inner {
      margin: auto;
      max-width: 1000px;
  }
  header .inner {
    position: sticky;
    top: 10px;
  }
  nav {
      padding: none;
      margin: none;
      overflow: hidden;
  }

  nav ul {
      padding: 0px;
      margin: 0px;
      list-style: none;
      overflow: hidden;
  }
  nav li {
      float: left;
  }
  nav a {
      display: block;
      padding: 10px;
      text-transform: capitalize;
  }
`}
    </style>
  );
}

export default SiteStyle;
