const isTest = process.env.NEXT_PUBLIC_TEST === 'true';
const githubUser = isTest ? 'codebru' : 'codebru';
const githubRepo = isTest ? 'github-web-reader-test-infosource' : 'full-web-dev';

export { githubUser, githubRepo };
