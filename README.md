# Overview
This project contains the content for the Thales Group organization documentation (github pages).

It relies on https://www.mkdocs.org/ and consists of several markdown files that will be hosted on https://thalesgroup.github.io/

# Branches
* `site` branch (default) is used to update the content through the different markdown files composing the documentation
* `master` branch is used for output content, result of the mkdocs build

# Updating content procedure

1. Clone the repository and checkout the `site` branch
1. Install mkdocs : https://www.mkdocs.org/#installation
1. Install the material theme: `pip install mkdocs-material`
1. If needed, update `mkdocs.yml` descriptor file
1. Add/update markdown files in the [docs/](docs/) directory
1. Test the documentation by launching `mkdocs serve` from the root directory
1. Open a web browser at http://localhost:8000
1. Browse and test the documentation structure, navigation and content
1. Commit your local modifications and open a pull request against the `site` branch