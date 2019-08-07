function SiteStyle() {
  return (
    <style global jsx>
      {`
  body {
      background-color: #333;
      color: #DDD;
      font-size: 1em;
      font-family: 'Helvetica', 'Arial', sans-serif;
  }
  a {
      color: #AAA;
      text-decoration: none;
  }
  h1 {
      font-size: 3em;
      color: #AFA;
  }
  h2 {
      color: #ADA;
      font-size: 2em;
  }
  h3 {
      color: #ABA;
      font-size: 1em;
  }
  h4 {
      font-size: 1em;
  }
  h5 {
      font-size: 1em;
  }
  h6 {
      font-size: 1em;
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
      box-shadow: 5px 10px;
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
  header {
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
  nav a:hover {
      background-color: #111;
  }
`}
    </style>
  );
}

export default SiteStyle;
