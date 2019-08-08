import Link from 'next/link';
import { githubUser, githubRepo } from '../config';

function Footer() {
  return (
    <div>
      <p>
        This is a website by
        <Link href="https://github.com/codebru">
          <a> Codebru</a>
        </Link>
      </p>
      <br />
      <p>
        The original source of the information can be found
        <Link href={`https://github.com/${githubUser}/${githubRepo}`}>
          <a> here</a>
        </Link>
        .
      </p>
    </div>
  );
}

export default Footer;
