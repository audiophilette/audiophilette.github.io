# Plastic Skillet Publishing

A small Jekyll book site hosted by GitHub Pages at https://books.plasticskillet.com.
There is no external theme or JavaScript build step.
The header’s Theme control offers Auto (device preference), Light, and Dark.
A small script remembers the choice; without JavaScript, device preference still works.

## Preview locally

Install Ruby 3.4 and Bundler, then run:

```sh
export BUNDLE_GEMFILE=Gemfile.local
bundle install
bundle exec jekyll serve
```

Open http://127.0.0.1:4000. To build and check links, run `bash tools/test.sh`.
Pushes to `main` or `master` build and deploy using GitHub’s official `actions/jekyll-build-pages` workflow.
In the repository’s Settings → Pages, the build source should be GitHub Actions.
Local dependencies use `github-pages` to match GitHub’s supported Jekyll stack.
`Gemfile` declares only GitHub’s supplied build dependency; `Gemfile.local` adds
Ruby compatibility, preview, and link-checking tools for local development.

## Edit content

- `index.md`: home page introduction and book listing.
- `_tabs/about.md`: author biography.
- `_tabs/serpheart.md` and `_tabs/practical.md`: book metadata and descriptions.
- `assets/css/site.css`: all styling.
- `_layouts/`: the three small page templates.

## Add a book

1. Copy `_templates/book.md` to `_tabs/your-book.md`.
2. Fill in the title, category, and summary. Choose an unused `permalink`
   such as `/your-book/`. `order` controls the home page order (lowest first).
3. Save the cover as `assets/img/your-book.jpg` and set `cover` to that path,
   including the leading `/`.
4. Create `downloads/your-book/` and put your PDF, EPUB, and/or ZIP files there.
   Set `download_directory` to `/downloads/your-book/`, including both slashes.
5. Replace the text below the second `---` with your blurb.
6. Commit and push the files. The home page lists the book automatically, and
   its page lists every PDF, EPUB, and ZIP in its download folder.

No HTML or navigation edits are needed. `summary` is optional and appears only
on the home page. For a disclaimer below the downloads, add `note: Your text`
to the metadata. Keep existing download filenames and permalinks when updating
books so saved links continue to work.

`CNAME` and `url` in `_config.yml` must agree with the custom domain configured in GitHub Pages.
