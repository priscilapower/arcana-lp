import { GithubIcon } from './BrandMark';

export function CloudSignalSection() {
  return (
    <div className="cloud-sig">
      <div className="wrap cloud-sig-in">
        <p className="cloud-sig-text">
          Arcana is MIT licensed.{' '}
          <span>Cloud is coming: sync, always-on briefings, and team workspaces. Star on GitHub to follow.</span>
        </p>
        <a
          href="https://github.com/priscilapower/arcana"
          target="_blank"
          rel="noopener noreferrer"
          className="gh-pill"
        >
          <GithubIcon />
          <span>Star on GitHub</span>
        </a>
      </div>
    </div>
  );
}
