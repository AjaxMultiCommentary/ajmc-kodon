# The Ajax Multi-Commentary: A minimal computing approach

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.15551111.svg)](https://doi.org/10.5281/zenodo.15551111)


Based on [Kōdōn](https://github.com/ajaxMultiCommentary/kodon).

## Development

To develop and run the application locally, make sure you have Node.js and NPM installed. See https://docs.npmjs.com/downloading-and-installing-node-js-and-npm for help.

### Installing dependencies

With `node` and `npm` installed, you can install the application's dependencies locally by running

```sh
$ npm install
```

from the root directory (the same directory that contains this README).

### Running the application

To run the application locally, use

```sh
$ npm run dev
```

This will start a development server at localhost:5137 by default. Any changes that you make to the application code should be picked up automatically. If for some reason they are not, try restarting the server.

## AjMC Development

### Ingesting changes in the commentaries

In order to update the commentaries used here, make sure that you have set the following environment variables:

- `GITHUB_API_TOKEN`: Needed to access the `commentaries_data` repository
- `ZOTERO_API_TOKEN`: Needed to access the Zotero API for bibliographic data
- `ZOTERO_API_URL`: E.g, https://api.zotero.org/groups/{GROUP_ID}/, where `GROUP_ID` is the ID of the group containing the bibliographic information for the commentaries

You will also need to have a recent version of the the Elixir runtime available on your system. With Homebrew on macOS, run

```sh
$ brew install elixir
```

See https://elixir-lang.org/install.html for more information.

Finally, you can now run

```sh
$ elixir support/ingestion_scripts/canonical_commentaries.exs
```

This script will update the `commentaries/` directory with the latest changes from the `commentaries_data` repository.

**!!! NB !!!**: For now, this will overwrite any changes that have been manually made to the markdown commentaries.

## License

Copyright 2024 Matteo Romanello, Ajax Multi-Commentary Project

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
