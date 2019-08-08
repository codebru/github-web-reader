import Link from 'next/link';

function Footer() {
  return (
    <div>
      <p>This is a website by Philip Bruland</p>
      <br />
      <p>
        <Link href="https://github.com/codebru/full-web-dev">
        The original source of the information can be found
          <a> here</a>
        </Link>
        .
      </p>
    </div>
  );
}

export default Footer;
