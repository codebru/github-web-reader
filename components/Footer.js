import Link from 'next/link';

function Footer() {
  return (
    <div>
      <p>This is a website by Philip Bruland</p>
      <br />
      <p>
        The original source of the infromation can be found
        <Link href="https://github.com/codebru/full-web-dev">
          <a> here</a>
        </Link>
        .
      </p>
    </div>
  );
}

export default Footer;
